import {
	MorphingDialog,
	MorphingDialogTrigger,
	MorphingDialogContent,
	MorphingDialogClose,
	MorphingDialogImage,
	MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";
import { XIcon } from "lucide-react";

interface VehicleImagesProps {
	frontViewPhotoUrl: string | null;
	backViewPhotoUrl: string | null;
}

export function VehicleImages({
	frontViewPhotoUrl,
	backViewPhotoUrl,
}: VehicleImagesProps) {
	if (!frontViewPhotoUrl && !backViewPhotoUrl) {
		return null;
	}

	return (
		<div className="space-y-4">
			<h2 className="text-2xl font-bold">Vehicle Images</h2>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{frontViewPhotoUrl && (
					<MorphingDialog
						transition={{
							duration: 0.3,
							ease: "easeInOut",
						}}
					>
						<MorphingDialogTrigger>
							<div className="group relative overflow-hidden rounded-lg cursor-pointer">
								<MorphingDialogImage
									src={frontViewPhotoUrl}
									alt="Front view"
									className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<p className="text-white text-lg font-semibold">Front View</p>
								</div>
							</div>
						</MorphingDialogTrigger>
						<MorphingDialogContainer>
							<MorphingDialogContent className="relative">
								<MorphingDialogImage
									src={frontViewPhotoUrl}
									alt="Front view"
									className="h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]"
								/>
							</MorphingDialogContent>
							<MorphingDialogClose
								className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
								variants={{
									initial: { opacity: 0 },
									animate: {
										opacity: 1,
										transition: { delay: 0.3, duration: 0.1 },
									},
									exit: { opacity: 0, transition: { duration: 0 } },
								}}
							>
								<XIcon className="h-5 w-5 text-zinc-500" />
							</MorphingDialogClose>
						</MorphingDialogContainer>
					</MorphingDialog>
				)}
				{backViewPhotoUrl && (
					<MorphingDialog
						transition={{
							duration: 0.3,
							ease: "easeInOut",
						}}
					>
						<MorphingDialogTrigger>
							<div className="group relative overflow-hidden rounded-lg cursor-pointer">
								<MorphingDialogImage
									src={backViewPhotoUrl}
									alt="Back view"
									className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<p className="text-white text-lg font-semibold">Back View</p>
								</div>
							</div>
						</MorphingDialogTrigger>
						<MorphingDialogContainer>
							<MorphingDialogContent className="relative">
								<MorphingDialogImage
									src={backViewPhotoUrl}
									alt="Back view"
									className="h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]"
								/>
							</MorphingDialogContent>
							<MorphingDialogClose
								className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
								variants={{
									initial: { opacity: 0 },
									animate: {
										opacity: 1,
										transition: { delay: 0.3, duration: 0.1 },
									},
									exit: { opacity: 0, transition: { duration: 0 } },
								}}
							>
								<XIcon className="h-5 w-5 text-zinc-500" />
							</MorphingDialogClose>
						</MorphingDialogContainer>
					</MorphingDialog>
				)}
			</div>
		</div>
	);
}
