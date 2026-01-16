"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TechGridProps {
    className?: string;
    opacity?: number;
}

export function TechGrid({ className, opacity = 0.05 }: TechGridProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div
            className={cn(
                "absolute inset-0 pointer-events-none z-0 overflow-hidden",
                className
            )}
            aria-hidden="true"
        >
            {/* Primary 100px Grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, oklch(0.92 0.01 260 / ${opacity}) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.92 0.01 260 / ${opacity}) 1px, transparent 1px)
          `,
                    backgroundSize: "100px 100px",
                }}
            />

            {/* Secondary 20px Grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, oklch(0.92 0.01 260 / ${opacity * 0.5}) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.92 0.01 260 / ${opacity * 0.5}) 1px, transparent 1px)
          `,
                    backgroundSize: "20px 20px",
                }}
            />

            {/* Crosshairs at corners (optional decorative elements) */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/20" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-primary/20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-primary/20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/20" />
        </div>
    );
}
