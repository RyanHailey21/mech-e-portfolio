"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function SiteHeader() {
    const [isOpen, setIsOpen] = React.useState(false);

    const navItems = [
        { name: "PROJECTS", href: "/projects" },
        { name: "ABOUT", href: "/about" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="size-8 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
                        <div className="size-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading font-bold text-lg leading-none tracking-tight">
                            RYAN H.
                        </span>
                        <span className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">
                            Mech. Engineer
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-2">
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <Link href={item.href} legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                "bg-transparent hover:bg-primary/10 hover:text-primary data-[active]:bg-primary/10 data-[active]:text-primary font-mono text-xs tracking-widest"
                                            )}
                                        >
                                            {item.name}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                            <NavigationMenuItem>
                                <Link href="/resume.pdf" target="_blank" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs tracking-widest ml-4"
                                        )}
                                    >
                                        RESUME
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col gap-8 mt-10">
                                <nav className="flex flex-col gap-4">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-heading font-semibold tracking-wide hover:text-primary transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/resume.pdf"
                                        target="_blank"
                                        className="text-lg font-heading font-semibold tracking-wide text-primary hover:text-primary/80 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        DOWNLOAD RESUME
                                    </Link>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Decorative bottom border line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </header>
    );
}
