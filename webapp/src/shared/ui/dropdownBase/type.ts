import type { ReactNode } from 'react';

export type DropdownBaseUIProps = {
	placeholder?: string;
	children?: React.ReactNode; 
	onSelect?: (value: string) => void;
	selectedValue?: string | React.ReactNode; 
};