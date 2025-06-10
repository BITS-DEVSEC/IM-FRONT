interface DetailSectionProps {
	title: string;
	children: React.ReactNode;
}

export function DetailSection({ title, children }: DetailSectionProps) {
	return (
		<section className="space-y-4">
			<h2 className="text-2xl font-bold tracking-tight">{title}</h2>
			<div className="grid gap-6">{children}</div>
		</section>
	);
}
