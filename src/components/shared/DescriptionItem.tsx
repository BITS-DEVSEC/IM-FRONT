interface DescriptionItemProps {
	label: string;
	value: React.ReactNode;
}

export function DescriptionItem({ label, value }: DescriptionItemProps) {
	return (
		<div className="flex flex-col">
			<p className="text-sm text-muted-foreground">{label}</p>
			<p className="font-medium text-lg">{value}</p>
		</div>
	);
}
