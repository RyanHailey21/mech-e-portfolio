import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t bg-background/50 backdrop-blur-sm">
            <div className="container py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-6">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-heading font-bold text-lg tracking-tight">
                        RYAN H.
                    </span>
                    <p className="text-xs text-muted-foreground font-mono">
                        &copy; {new Date().getFullYear()} Mechanical Engineering Portfolio.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href="mailto:hello@example.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
