import type { ReactNode } from 'react';

export type DropdownBaseUIProps = {
	placeholder?: string;
	options: Option[];
	onSelect: (value: string) => void;
	defaultValue?: string | "first";
};

export type Option = {
	value: string; // идентификатор
	text: ReactNode; // текст опции
};
