import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, GraduationCap, Laptop, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TechGrid } from "@/components/tech-grid";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen">
            <TechGrid opacity={0.05} />

            <div className="container px-4 md:px-6 py-16 md:py-24">
                {/* Header Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
                    {/* Left: Bio */}
                    <div className="space-y-8">
                        <div>
                            <Badge variant="outline" className="mb-4 font-mono text-xs tracking-widest uppercase border-primary/50 text-primary bg-primary/5">
                                Engineer Profile
                            </Badge>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                                ENGINEERING <br /> WITH PURPOSE.
                            </h1>
                            <div className="text-lg text-muted-foreground space-y-4 font-light leading-relaxed">
                                <p>
                                    I am a Mechanical Engineer with a passion for designing systems that operate at the intersection of precision and durability.
                                </p>
                                <p>
                                    My background spans from heavy manufacturing to precision robotics. I believe the best designs are those where every feature justifies its existence through function. My approach is rooted in first-principles thinking: understand the physics, define the constraints, and engineer the solution.
                                </p>
                                <p>
                                    When I'm not in CAD or the machine shop, I'm analyzing mechanical wristwatches or hiking to test my own gear designs.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button asChild className="rounded-none px-8">
                                <Link href="/contact">
                                    CONTACT ME
                                </Link>
                            </Button>
                            <Button variant="outline" asChild className="rounded-none px-8 gap-2">
                                <Link href="/resume.pdf" target="_blank">
                                    RESUME <Download className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right: Portrait/Visual */}
                    <div className="relative">
                        <div className="aspect-[3/4] md:aspect-square w-full bg-muted border border-border/50 relative overflow-hidden rounded-sm group">
                            {/* Placeholder for Profile Image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-mono text-muted-foreground opacity-50 uppercase tracking-widest">
                                    [Profile Photo Placeholder]
                                </span>
                            </div>

                            {/* Technical Overlays */}
                            <div className="absolute top-4 left-4 border border-primary/30 bg-background/80 backdrop-blur px-2 py-1 text-[10px] font-mono text-primary">
                                REF: RYAN_H
                            </div>
                            <div className="absolute bottom-4 right-4 border border-border bg-background/80 backdrop-blur px-2 py-1 text-[10px] font-mono text-muted-foreground">
                                STATUS: ACTIVE
                            </div>

                            {/* Crosshairs */}
                            <div className="absolute top-1/2 left-4 w-2 h-[1px] bg-primary/50" />
                            <div className="absolute top-1/2 right-4 w-2 h-[1px] bg-primary/50" />
                            <div className="absolute top-4 left-1/2 w-[1px] h-2 bg-primary/50" />
                            <div className="absolute bottom-4 left-1/2 w-[1px] h-2 bg-primary/50" />
                        </div>
                    </div>
                </div>

                {/* Skills Matrix */}
                <div className="mb-24">
                    <h2 className="font-heading text-3xl font-bold mb-12 border-b border-border/50 pb-4">
                        TECHNICAL COMPETENCIES
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* CAD/Design */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-primary/10 rounded-sm text-primary">
                                    <Laptop className="h-5 w-5" />
                                </div>
                                <h3 className="font-bold tracking-wide">DESIGN & CAD</h3>
                            </div>
                            <div className="space-y-4">
                                <SkillBar name="SolidWorks (CSWP)" level={95} />
                                <SkillBar name="Fusion 360" level={85} />
                                <SkillBar name="Rhino 3D" level={70} />
                                <SkillBar name="Technical Drafting (GD&T)" level={90} />
                            </div>
                        </div>

                        {/* Analysis */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-primary/10 rounded-sm text-primary">
                                    <GraduationCap className="h-5 w-5" />
                                </div>
                                <h3 className="font-bold tracking-wide">SIMULATION</h3>
                            </div>
                            <div className="space-y-4">
                                <SkillBar name="ANSYS FEA" level={80} />
                                <SkillBar name="CFD (Fluent)" level={75} />
                                <SkillBar name="MATLAB / Simulink" level={85} />
                                <SkillBar name="Python for Engineering" level={80} />
                            </div>
                        </div>

                        {/* Manufacturing */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-primary/10 rounded-sm text-primary">
                                    <Wrench className="h-5 w-5" />
                                </div>
                                <h3 className="font-bold tracking-wide">MANUFACTURING</h3>
                            </div>
                            <div className="space-y-4">
                                <SkillBar name="3D Printing (FDM/SLA)" level={95} />
                                <SkillBar name="CNC Machining" level={70} />
                                <SkillBar name="Manual Mill/Lathe" level={80} />
                                <SkillBar name="Welding (MIG/TIG)" level={60} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education Timeline */}
                <div className="max-w-3xl">
                    <h2 className="font-heading text-3xl font-bold mb-12 border-b border-border/50 pb-4">
                        EDUCATION & EXPERIENCE
                    </h2>

                    <div className="space-y-8 relative pl-8 border-l border-primary/20">
                        <TimelineItem
                            role="B.S. Mechanical Engineering"
                            org="University of Engineering"
                            date="2021 - 2025"
                            desc="Focus on Mechatronics and Robotics. GPA: 3.8/4.0. Capstone Project: Autonomous Search & Rescue Rover."
                        />
                        <TimelineItem
                            role="Engineering Intern"
                            org="Aerospace Dynamics Corp."
                            date="Summer 2024"
                            desc="Assisted in the design of structural components for commercial aircraft. Performed tolerance analysis and updated legacy CAD models."
                        />
                        <TimelineItem
                            role="Research Assistant"
                            org="Adaptive Structures Lab"
                            date="2023 - 2024"
                            desc="Conducted experiments on shape-memory alloy actuators. Published findings in undergraduate research symposium."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function SkillBar({ name, level }: { name: string; level: number }) {
    return (
        <div className="space-y-1.5 group">
            <div className="flex justify-between text-xs font-mono uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                <span>{name}</span>
                <span>{level}%</span>
            </div>
            <div className="h-1.5 w-full bg-secondary overflow-hidden">
                <div
                    className="h-full bg-primary transition-all duration-1000 ease-out group-hover:bg-primary/80"
                    style={{ width: `${level}%` }}
                />
            </div>
        </div>
    );
}

function TimelineItem({ role, org, date, desc }: { role: string; org: string; date: string; desc: string }) {
    return (
        <div className="relative">
            <div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
            <div className="mb-1">
                <h3 className="font-bold text-lg">{role}</h3>
                <div className="flex items-center gap-2 text-sm text-primary font-mono mt-1">
                    <span>{org}</span>
                    <span>•</span>
                    <span>{date}</span>
                </div>
            </div>
            <p className="text-muted-foreground max-w-xl">
                {desc}
            </p>
        </div>
    );
}
