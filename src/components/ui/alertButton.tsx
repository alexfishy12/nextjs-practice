'use client';

import clsx from "clsx";
import Button from "@/components/ui/button";

interface AlertButtonProps {
    text: string; // the text on the button
    className: string; // custom styling of the button
    alertMessage: string; // optional onClick function
}

export default function AlertButton({text, className, alertMessage}: AlertButtonProps) {
    return (
        <Button
            className={className}
            onClick={() => {
                    alert(alertMessage);
                }
            }
            text={text}
        >
        </Button>
    );
}