import type { ReactNode } from "react";

interface SettingsSectionProps {
	title: string;
	description?: string;
	children: ReactNode;
	className?: string;
}

export function SettingsSection({
	title,
	description,
	children,
	className = "",
}: SettingsSectionProps) {
	return (
		<section className={`mb-8 px-8 ${className}`}>
			<div className="mb-6">
				<h2 className="text-lg font-medium">{title}</h2>
				{description && (
					<p className="text-sm text-muted-foreground mt-1">{description}</p>
				)}
			</div>
			<div className="space-y-6">{children}</div>
		</section>
	);
}
