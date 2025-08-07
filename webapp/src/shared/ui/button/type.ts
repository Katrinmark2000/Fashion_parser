import type { ReactNode } from "react";

export type TButton = {
    onClick?: () => void;
    color: 'primary' | 'shaded';
    width?: string;
	children?: ReactNode;
    className?: string;
}