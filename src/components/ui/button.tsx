'use client';

import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
    text: string; // the text on the button
    className: string; // custom styling of the button
    link?: string; // optional link, which changes the button component to a Link component
    onClick?: () => void; // optional onClick function
}

export default function Button({text, className, link, onClick}: ButtonProps) {
    if (link) {
        return (
            <Link href={link} className={clsx("rounded px-4 py-2", className)}>
                {text}
            </Link>
        );
    }
    return (
        <button
            className={clsx("rounded px-4 py-2 cursor-pointer", className)}
            onClick={onClick}
        >
            {text}
        </button>
    );
}