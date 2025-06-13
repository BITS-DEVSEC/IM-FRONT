import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useImperativeHandle, useState } from "react";
import { useForm } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const otpVerificationSchema = z.object({
	otp_code: z
		.string()
		.min(6, "OTP must be 6 digits")
		.max(6, "OTP must be 6 digits"),
});

interface EmailVerificationFormProps {
	onUpdateData: (data: { email: string }) => void; // Assuming email is passed back after verification
	// No onNext prop anymore
}

export const EmailVerificationForm = React.forwardRef<
	UseFormReturn<z.infer<typeof otpVerificationSchema>> & {
		triggerSubmit: () => Promise<boolean>;
	},
	EmailVerificationFormProps
>(({ onUpdateData }, ref) => {
	const form = useForm<z.infer<typeof otpVerificationSchema>>({
		resolver: zodResolver(otpVerificationSchema),
		defaultValues: {
			otp_code: "",
		},
	});

	const [isLoading, setIsLoading] = useState(false);
	const [, setError] = useState<string | null>(null);

	const onSubmit = React.useCallback(
		async (values: z.infer<typeof otpVerificationSchema>): Promise<boolean> => {
			setIsLoading(true);
			setError(null);
			// Simulate API call for OTP verification
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					if (values.otp_code === "123456") {
						resolve(true);
					} else {
						reject(new Error("Invalid OTP code. Please try again."));
					}
				}, 1500); // Simulate network delay
			});

			onUpdateData({ email: "mock-verified-email@example.com" });
			toast.success("Your email has been successfully verified.", {
				// title: "OTP Verified", // Sonner automatically uses the first argument as title
				description: "OTP Verified",
			});
			return true; // Indicate success
		},
		[onUpdateData],
	);

	useImperativeHandle(
		ref,
		() => ({
			...form,
			triggerSubmit: async () => {
				try {
					await form.handleSubmit(onSubmit)();
					return true;
				} catch (error) {
					return false;
				}
			},
		}),
		[form, onSubmit],
	);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 max-w-sm mx-auto"
			>
				{" "}
				{/* Added max-w-sm mx-auto for consistency */}
				<p className="text-muted-foreground mb-4">
					An OTP has been sent to your contact email. Please enter it below.
				</p>
				<FormField
					control={form.control}
					name="otp_code"
					render={({ field }) => (
						<FormItem className="flex justify-center">
							<FormLabel>OTP Code</FormLabel>
							<FormControl>
								<InputOTP maxLength={6} {...field} disabled={isLoading}>
									<InputOTPGroup>
										<InputOTPSlot index={0} />
										<InputOTPSlot index={1} />
										<InputOTPSlot index={2} />
									</InputOTPGroup>
									<InputOTPSeparator />
									<InputOTPGroup>
										<InputOTPSlot index={3} />
										<InputOTPSlot index={4} />
										<InputOTPSlot index={5} />
									</InputOTPGroup>
								</InputOTP>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
});

EmailVerificationForm.displayName = "EmailVerificationForm";
