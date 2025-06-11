import { useCallback, useMemo, useState, useRef, useEffect } from "react";

interface UseFileUploadOptions {
	accept?: string;
	maxSize?: number;
}

interface FileWithPreview {
	id: string;
	file: File;
	preview: string;
}

export function useFileUpload(options?: UseFileUploadOptions) {
	const [files, setFiles] = useState<FileWithPreview[]>([]);
	const [isDragging, setIsDragging] = useState(false);
	const [errors, setErrors] = useState<string[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);

	const validateFile = useCallback(
		(file: File) => {
			const newErrors: string[] = [];
			if (options?.accept && !file.type.match(options.accept)) {
				newErrors.push("Invalid file type.");
			}
			if (options?.maxSize && file.size > options.maxSize) {
				newErrors.push("File size exceeds limit.");
			}
			return newErrors;
		},
		[options?.accept, options?.maxSize],
	);

	const processFiles = useCallback(
		(fileList: FileList | null) => {
			if (!fileList) return;

			const newFiles: FileWithPreview[] = [];
			const newErrors: string[] = [];

			for (const file of Array.from(fileList)) {
				const validationErrors = validateFile(file);
				if (validationErrors.length > 0) {
					newErrors.push(...validationErrors);
				} else {
					const reader = new FileReader();
					reader.onloadend = () => {
						newFiles.push({
							id: Math.random().toString(36).substring(2, 9), // Simple unique ID
							file: file,
							preview: reader.result as string,
						});
						setFiles((prev) => [...prev, ...newFiles]);
					};
					reader.readAsDataURL(file);
				}
			}
			setErrors(newErrors);
		},
		[validateFile],
	);

	const handleDragEnter = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	}, []);

	const handleDragLeave = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
	}, []);

	const handleDragOver = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	}, []);

	const handleDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragging(false);
			processFiles(e.dataTransfer.files);
		},
		[processFiles],
	);

	const openFileDialog = useCallback(() => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	}, []);

	const handleFileChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			processFiles(e.target.files);
		},
		[processFiles],
	);

	const removeFile = useCallback((id: string) => {
		setFiles((prev) => prev.filter((file) => file.id !== id));
	}, []);

	const getInputProps = useCallback(
		() => ({
			type: "file",
			accept: options?.accept,
			multiple: false, // For single file upload as per the example
			onChange: handleFileChange,
			ref: inputRef,
		}),
		[options?.accept, handleFileChange],
	);

	useEffect(() => {
		// Cleanup preview URLs when files are removed
		return () => {
			for (const file of files) {
				URL.revokeObjectURL(file.preview);
			}
		};
	}, [files]);

	return [
		{ files, isDragging, errors },
		{
			handleDragEnter,
			handleDragLeave,
			handleDragOver,
			handleDrop,
			openFileDialog,
			removeFile,
			getInputProps,
		},
	] as const;
}
