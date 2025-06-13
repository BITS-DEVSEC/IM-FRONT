# Next Task

### Incomplete UI/Refactoring/Routing Tasks

#### Low Difficulty

- [x] Rename `src/components/shared/NavUser.tsx` to `src/components/shared/InsurerNav.tsx`.
- [x] Update all relevant imports (e.g., in `src/layouts/DashboardLayout.tsx`).
- [ ] Remove the dynamic route `/admin/quotation-requests/:id` from `src/config/routes.tsx`.
- [x] ~~Add a new route for `InsurerOnboardingPage` in `src/config/routes.tsx`.~~ (Onboarding is implemented as a modal overlay, not a page)
- [ ] Create an `InsurerProfile` type, likely in `src/types/insurer.ts` (or modify `src/types/auth.ts` if `User` type is solely for `InsurerProfile`). This type will include: `id`, `role: "insurer"`, `name` (insurer company name), `email` (contact email), `description`, `contact_email`, `contact_phone`, `api_endpoint`, `api_key`, `logo_url` (for avatar/logo), and new flags: `password_reset_required: boolean` and `profile_complete: boolean`.
- [ ] Modify `src/services/authService.ts` to mock `mockUser` as an `InsurerProfile` with `password_reset_required: true` and `profile_complete: false` initially for testing the onboarding flow.
- [x] Modify `InsurerNav` to: Accept an `InsurerProfile` type for its `user` prop.
- [x] Modify `InsurerNav` to: Display `user.name` as the insurer company name.
- [x] Modify `InsurerNav` to: Generate `AvatarFallback` initials from `user.name`.
- [x] Modify `InsurerNav.tsx` (previously `NavUser.tsx`) to navigate to `/admin/settings?tab=profile` when the insurer's profile section is clicked.
- [ ] In `src/pages/settings/settings.tsx`, use `useSearchParams` from `react-router-dom` to read the `tab` query parameter and set the initially active tab. Default to "Profile Settings" if no tab is specified.

#### Medium Difficulty

- [ ] Adjust `src/layouts/DashboardLayout.tsx` to remove any direct link or breadcrumb logic related to the slug page for quotation details, as it will now be handled by the modal/drawer.
- [ ] Modify `InsurerNav` to: Use `user.logo_url` for `AvatarImage` `src` and `user.name` for `alt`.

### Incomplete API/Backend Integration Tasks

#### Medium Difficulty

- [ ] Update `src/context/AuthContext.tsx` to manage `InsurerProfile | null` as its `user` state and adjust `login` function accordingly.
- [ ] Add logic for super admin dashboard to display status of insurer\'s default password.
- [ ] In `src/App.tsx` or `src/layouts/RoleLayout.tsx`, after an insurer logs in:
    - [ ] First, check `password_changed`. If false, redirect to `InsurerOnboardingPage` (password reset step).
    - [ ] After password reset, check for email verification status (implicitly handled by backend after OTP, or via `email_verified` flag). If not verified, proceed to OTP step.
    - [ ] If `password_changed` is true and email is verified, then check `profile_complete`. If `profile_complete` is `false`, redirect to `InsurerOnboardingPage` (profile setup steps).

#### High Difficulty

- [ ] Upon completion of the final step (Branding), send a request to update the complete `InsurerProfile` data, setting `profile_complete: true`.
- [ ] Implement API call (e.g., `updateInsurerProfile`) to save changes, handling multipart form data for `logo_url`.
- [ ] Implement API call to update the password.
- [ ] Ensure API endpoints exist for: fetching `InsurerProfile`, updating `InsurerProfile` (including logo), and updating password.

---

### Completed UI Tasks

- [x] Add an insurer profile, make the user nav show the insurer name for example Bunna Insurance.
  *   **Create Insurer Profile Onboarding Wizard (`InsurerOnboardingStepper.tsx`):**
      *   [x] Developed as a modal overlay component at `src/components/admin-components/products/InsurerOnboardingStepper.tsx`
      *   [x] Utilizes `src/components/shared/Stepper.tsx` for multi-step form navigation
      *   **Stepper Steps:**
          *   [x] **Step 1: Welcome and Password Reset:** Fields: `new_password`, `confirm_new_password`. Upon submission, call API to update password and set `password_changed: true` in backend.
          *   [x] **Step 2: Email Verification (OTP):** Display message about OTP sent to `contact_email`. Field: `otp_code`. Upon submission, call API to verify OTP and mark email as verified in backend.
          *   [x] **Step 3: Company Information:** Fields: `name`, `description`.
          *   [x] **Step 4: Contact Details:** Fields: `contact_email`, `contact_phone`.
          *   [x] **Step 5: API Configuration:** Fields: `api_endpoint`, `api_key`.
          *   [x] **Step 6: Branding:** Field: `logo_url` (allowing file upload for multipart form data).
      *   [x] Implement form validation for each step using `react-hook-form` and `zod`.
  *   **UI Polish:**
      *   [x] Removed all `console.log` statements from onboarding forms and stepper.
      *   [x] Fixed "Maximum update depth exceeded" error in `BrandingForm.tsx`.
      *   [x] Addressed `backgroundColor` animation warnings in `src/components/shared/Stepper.tsx`.

- [x] Change the slug page setup of the quotation details to a modal, and also there should be support for different insurance types on the details. Like if it\'s a certain type of insurance it should show a certain format of data.
  *   [x] **Refactor `QuotationDetailsPage` into `QuotationDetailsView` Component:**
      *   [x] Rename `src/pages/admin/quotations/[id].tsx` to `src/components/admin-components/quotations/QuotationDetailsView.tsx`.\
      *   [x] This component will no longer handle routing directly but will accept `quotationId` as a prop.
      *   [x] It will be responsible for fetching the quotation data and rendering the details based on the `quotation` object.
  *   [x] **Create Responsive `QuotationDetailsModal`:**
      *   [x] Create a new component `src/components/admin-components/quotations/QuotationDetailsModal.tsx`.
      *   [x] This component will conditionally render:
          *   [x] `Dialog` (`src/components/ui/dialog.tsx`) for desktop (using `useIsMobile` hook).
          *   [x] `Drawer` (`src/components/ui/drawer.tsx`) for mobile.
      *   [x] It will accept `isOpen` and `onOpenChange` props to control its visibility, and `quotationId` to pass to `QuotationDetailsView`.
  *   [x] **Implement Dynamic Content Rendering for Insurance Types:**
      *   [x] In `QuotationDetailsView.tsx`, implement conditional rendering logic (e.g., using a switch statement or a map of components) based on `quotation.insurance_type.name`.
      *   **Initial Guess for Data Formats (can be refined with actual data when available):**
          *   [x] **`Motor` Insurance:** Render `VehicleDetailsCard`, `VehicleImages`, `UserInformationCard`, `AddressInformationCard`, `InsuranceDetailsCard`.
          *   [x] **`Health` Insurance:** Render `UserInformationCard`, `AddressInformationCard`, `InsuranceDetailsCard`. Introduce a placeholder `HealthCoverageDetailsCard` for future health-specific fields.
          *   [x] **`Life` Insurance:** Render `UserInformationCard`, `InsuranceDetailsCard`. Introduce a placeholder `BeneficiaryDetailsCard` for future life-specific fields.
      *   [x] Create new detail components (e.g., `src/components/admin-components/quotations/details-page-components/HealthCoverageDetailsCard.tsx`, `src/components/admin-components/quotations/details-page-components/BeneficiaryDetailsCard.tsx`) as needed.
  *   [x] **Integrate into `AdminQuotations.tsx`:**
      *   [x] In `src/pages/admin/AdminQuotations.tsx`, introduce state to manage the `selectedQuotationId` and `isModalOpen`.
      *   [x] Modify the `onViewDetails` callback passed to `QuotationRequestsTable` to set `selectedQuotationId` and `isModalOpen(true)`.
      *   [x] Render `QuotationDetailsModal` in `AdminQuotations.tsx`, passing the `selectedQuotationId` and `isModalOpen` state.

- [x] Make the settings page, it should currently have only have the profile settings(consolidate the profile dialog to that page so that when the insurer button(the current user nav button) is clicked it opens the settings page specifically the profile tab), ensuring it is minimal and modern (consider using vertical tabs for navigation).
  *   [x] **Design `SettingsPage` Structure (`src/pages/settings/settings.tsx`):**
      *   [x] Implement a layout with a vertical navigation panel on the left and a content area on the right, inspired by the provided Cursor IDE settings image.
      *   [x] Utilize a UI component for vertical tabs.
      *   [x] Initial tabs: "Profile Settings," "Appearance," and "Password Reset." Design for future extensibility.
  *   [x] **"Profile Settings" Tab Implementation:**
      *   [x] Display and allow editing of all `InsurerProfile` details: `name`, `description`, `contact_email`, `contact_phone`, `api_endpoint`, `api_key`, `logo_url`.
      *   [x] Use `react-hook-form` and `zod` for form management and validation.
      *   [x] Fetch current insurer\'s profile data on mount and pre-populate the form.
  *   [x] **"Appearance" Tab Implementation:**
      *   [x] Include UI theme settings, integrating the existing `ModeToggle` component (`src/components/shared/mode-toggle.tsx`).
  *   [x] **"Password Reset" Tab Implementation:**
      *   [x] Allow password changes with fields: `current_password`, `new_password`, `confirm_new_password`.
      *   [x] Validate `new_password` matches `confirm_new_password` and meets security criteria.
