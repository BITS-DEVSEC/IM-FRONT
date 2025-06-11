import Stepper, { Step } from "@/components/shared/Stepper";
import { useRef, useState, useCallback } from "react";
import type React from "react";
import { ApiConfigurationForm } from "@/components/onboarding/ApiConfigurationForm";
import { BrandingForm } from "@/components/onboarding/BrandingForm";
import { CompanyInformationForm } from "@/components/onboarding/CompanyInformationForm";
import { ContactDetailsForm } from "@/components/onboarding/ContactDetailsForm";
import { PasswordResetForm } from "@/components/onboarding/PasswordResetForm";
import type { InsurerProfile } from "@/types/insurer";
import type { UseFormReturn } from "react-hook-form";
import * as z from "zod";

const passwordResetSchema = z
	.object({
		new_password: z.string().min(8, "Password must be at least 8 characters"),
		confirm_new_password: z.string(),
	})
	.refine((data) => data.new_password === data.confirm_new_password, {
		message: "Passwords don't match",
		path: ["confirm_new_password"],
	});

const companyInformationSchema = z.object({
	name: z.string().min(1, "Company name is required"),
	description: z.string().min(1, "Description is required"),
});

const contactDetailsSchema = z.object({
	contact_email: z.string().email("Invalid email address"),
	contact_phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

const apiConfigurationSchema = z.object({
	api_endpoint: z.string().url("Invalid URL"),
	api_key: z.string().min(1, "API key is required"),
});

const brandingSchema = z.object({
	logo_url: z
		.any()
		.refine(
			(file) =>
				file instanceof File || typeof file === "string" || file === null,
			"Logo is required",
		),
});

interface InsurerOnboardingStepperProps {
	onOnboardingComplete: (profile: InsurerProfile) => void;
}

export const InsurerOnboardingStepper: React.FC<
	InsurerOnboardingStepperProps
> = ({ onOnboardingComplete }) => {
	const [showOnboardingStepper, setShowOnboardingStepper] = useState(true);

	// Refs for each form, typed correctly
	const passwordResetFormRef =
		useRef<UseFormReturn<z.infer<typeof passwordResetSchema>>>(null);
	// const emailVerificationFormRef = useRef<
	// 	UseFormReturn<z.infer<typeof otpVerificationSchema>> & {
	// 		triggerSubmit: () => Promise<boolean>;
	// 	}
	// >(null);
	const companyInformationFormRef =
		useRef<UseFormReturn<z.infer<typeof companyInformationSchema>>>(null);
	const contactDetailsFormRef =
		useRef<UseFormReturn<z.infer<typeof contactDetailsSchema>>>(null);
	const apiConfigurationFormRef =
		useRef<UseFormReturn<z.infer<typeof apiConfigurationSchema>>>(null);
	const brandingFormRef =
		useRef<UseFormReturn<z.infer<typeof brandingSchema>>>(null);

	const [onboardingData, setOnboardingData] = useState<Partial<InsurerProfile>>(
		{
			id: "", // Placeholder
			role: "insurer",
			name: "",
			email: "",
			description: "",
			contact_email: "",
			contact_phone: "",
			api_endpoint: "",
			api_key: "",
			logo_url: null, // Initialize with null
			password_reset_required: true,
			profile_complete: false,
		},
	);

	const updateOnboardingData = useCallback(
		<K extends keyof InsurerProfile>(field: K, value: InsurerProfile[K]) => {
			setOnboardingData((prev: Partial<InsurerProfile>) => ({
				...prev,
				[field]: value,
			}));
		},
		[],
	);

	const handleValidateStep = async (currentStep: number): Promise<boolean> => {
		switch (currentStep) {
			case 1: {
				const form = passwordResetFormRef.current;
				if (form) {
					await form.trigger();
					return form.formState.isValid;
				}
				return false;
			}
			case 2: {
				const form = companyInformationFormRef.current;
				let isValid = false;
				if (form) {
					await form.trigger();
					isValid = form.formState.isValid;
				}
				return isValid;
			}
			case 3: {
				const form = contactDetailsFormRef.current;
				let isValid = false;
				if (form) {
					await form.trigger();
					isValid = form.formState.isValid;
				}
				return isValid;
			}
			case 4: {
				const form = apiConfigurationFormRef.current;
				let isValid = false;
				if (form) {
					await form.trigger();
					isValid = form.formState.isValid;
				}
				return isValid;
			}
			case 5: {
				const form = brandingFormRef.current;
				let isValid = false;
				if (form) {
					await form.trigger();
					isValid = form.formState.isValid;
				}
				return isValid;
			}
			default:
				return true;
		}
	};

	const handleFinalStepCompleted = () => {
		// Ensure all required fields are present before calling onOnboardingComplete
		// This check should be more robust in a real application
		// For now, we assume all fields are filled by the time we reach the end.
		// We also need to add a fake id to the onboardingData since it's required in InsurerProfile
		const finalProfile: InsurerProfile = {
			...(onboardingData as InsurerProfile),
			id:
				onboardingData.id ||
				`insurer-${Math.random().toString(36).substring(2, 9)}`, // Generate a dummy ID if not set
			profile_complete: true,
		};
		onOnboardingComplete(finalProfile);
		setShowOnboardingStepper(false);
	};

	if (!showOnboardingStepper) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xs">
			<Stepper
				initialStep={1}
				onStepChange={(step) => {}}
				onValidateStep={handleValidateStep}
				onFinalStepCompleted={handleFinalStepCompleted}
				backButtonText="Previous"
				nextButtonText="Next"
			>
				<Step>
					<h2 className="text-xl font-bold mb-4">
						Welcome to Insurer Onboarding!
					</h2>
					<p className="text-muted-foreground mb-6">
						Please reset your password to continue.
					</p>
					<PasswordResetForm
						ref={passwordResetFormRef}
						onUpdateData={({ password_reset_required }) =>
							updateOnboardingData(
								"password_reset_required",
								password_reset_required,
							)
						}
					/>
				</Step>

				<Step>
					<CompanyInformationForm
						ref={companyInformationFormRef}
						onUpdateData={({ name, description }) => {
							updateOnboardingData("name", name);
							updateOnboardingData("description", description);
						}}
					/>
				</Step>
				<Step>
					<ContactDetailsForm
						ref={contactDetailsFormRef}
						onUpdateData={({ contact_email, contact_phone }) => {
							updateOnboardingData("contact_email", contact_email);
							updateOnboardingData("contact_phone", contact_phone);
						}}
					/>
				</Step>
				<Step>
					<ApiConfigurationForm
						ref={apiConfigurationFormRef}
						onUpdateData={({
							api_endpoint,
							api_key,
						}: { api_endpoint: string; api_key: string }) => {
							updateOnboardingData("api_endpoint", api_endpoint);
							updateOnboardingData("api_key", api_key);
						}}
					/>
				</Step>
				<Step>
					<BrandingForm
						ref={brandingFormRef}
						onUpdateData={({ logo_url }) =>
							updateOnboardingData("logo_url", logo_url)
						}
					/>
				</Step>
			</Stepper>
		</div>
	);
};
