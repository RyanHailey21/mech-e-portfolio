import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, FileText, Layers, Ruler, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";
import { TechGrid } from "@/components/tech-grid";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="relative min-h-screen pb-20">
            <TechGrid opacity={0.03} className="fixed" />

            <div className="container px-4 md:px-6 py-12">
                <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all group text-muted-foreground" asChild>
                    <Link href="/projects">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        BACK TO PROJECT INDEX
                    </Link>
                </Button>

                {/* Project Header */}
                <div className="flex flex-col gap-6 mb-12">
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="outline" className="font-mono text-xs tracking-wide uppercase border-primary/40 text-primary">{project.category}</Badge>
                        <Badge variant="outline" className="font-mono text-xs tracking-wide uppercase border-muted-foreground/30 text-muted-foreground">Fall 2025</Badge>
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight uppercase max-w-[900px]">
                        {project.title}
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-[800px] font-light">
                        {project.description}
                    </p>
                </div>

                {/* Hero Image */}
                <div className="w-full aspect-video bg-muted/30 border border-border/50 rounded-lg overflow-hidden relative mb-16 group">
                    {/* Placeholder for real image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary/10">
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/50">Project Render: {project.title}</span>
                    </div>

                    {/* Technical overlays */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        <div className="bg-background/80 backdrop-blur-md px-3 py-1 rounded border border-border/50 font-mono text-[10px] text-muted-foreground">FIG. 01</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
                    {/* Main Documentation */}
                    <div className="space-y-12">
                        <section>
                            <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-primary/50 text-sm font-mono mr-2">01.</span>
                                CHALLENGE & CONTEXT
                            </h2>
                            <Separator className="mb-6 opacity-50" />
                            <div className="prose prose-invert max-w-none text-muted-foreground">
                                <p>
                                    {project.longDescription || project.description}
                                </p>
                                <p className="mt-4">
                                    The primary engineering challenge was to balance the competing constraints of weight, structural rigidity, and manufacturability.
                                    Existing solutions in the market either sacrifice durability for weight or are too heavy for extended endurance missions.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-primary/50 text-sm font-mono mr-2">02.</span>
                                TECHNICAL APPROACH
                            </h2>
                            <Separator className="mb-6 opacity-50" />
                            <div className="prose prose-invert max-w-none text-muted-foreground">
                                <p>
                                    The design process began with first-principles calculations to determine the minimum required stiffness.
                                    Following the initial sizing, a detailed CAD model was developed in {project.tags[0] || "SolidWorks"}.
                                </p>
                                <ul className="list-disc pl-5 mt-4 space-y-2">
                                    <li>Conducted topology optimization to identify non-structural material for removal.</li>
                                    <li>Performed FEA static stress analysis under worst-case loading conditions (5G impact).</li>
                                    <li>Iterated on the geometry to reduce stress concentrations at mounting points.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Gallery Grid Pylons */}
                        <section>
                            <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-primary/50 text-sm font-mono mr-2">03.</span>
                                VISUAL DOCUMENTATION
                            </h2>
                            <Separator className="mb-6 opacity-50" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="aspect-[4/3] bg-muted/20 border border-border/30 rounded flex items-center justify-center relative">
                                    <span className="font-mono text-xs text-muted-foreground/30">CAD WIREFRAME</span>
                                </div>
                                <div className="aspect-[4/3] bg-muted/20 border border-border/30 rounded flex items-center justify-center relative">
                                    <span className="font-mono text-xs text-muted-foreground/30">FEA STRESS PLOT</span>
                                </div>
                                <div className="aspect-[4/3] bg-muted/20 border border-border/30 rounded flex items-center justify-center relative">
                                    <span className="font-mono text-xs text-muted-foreground/30">PROTOTYPE ASSEMBLY</span>
                                </div>
                                <div className="aspect-[4/3] bg-muted/20 border border-border/30 rounded flex items-center justify-center relative">
                                    <span className="font-mono text-xs text-muted-foreground/30">FINAL VALIDATION</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="flex flex-col gap-8">
                        <div className="p-6 bg-card/30 border border-border/50 rounded-lg backdrop-blur-sm">
                            <h3 className="font-bold text-lg mb-6 font-heading tracking-wide">PROJECT DATA</h3>

                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-2">
                                        <User className="h-3 w-3" /> Role
                                    </span>
                                    <p className="font-medium">Lead Mechanical Engineer</p>
                                </div>

                                <div className="space-y-1">
                                    <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-2">
                                        <Calendar className="h-3 w-3" /> Duration
                                    </span>
                                    <p className="font-medium">4 Months</p>
                                </div>

                                <div className="space-y-1">
                                    <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-2">
                                        <Layers className="h-3 w-3" /> Tech Stack
                                    </span>
                                    <div className="flex flex-wrap gap-1.5 mt-1">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-[10px] bg-secondary/50 hover:bg-secondary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {project.stats && (
                                    <>
                                        <Separator className="my-2" />
                                        <div className="space-y-4">
                                            {project.stats.map(stat => (
                                                <div key={stat.label} className="flex justify-between items-center text-sm">
                                                    <span className="text-muted-foreground">{stat.label}</span>
                                                    <span className="font-mono font-bold text-primary">{stat.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Download/Resource Link */}
                        <div className="p-6 border border-dashed border-primary/20 rounded-lg text-center space-y-3">
                            <FileText className="h-8 w-8 mx-auto text-primary/50" />
                            <h4 className="font-bold text-sm">TECHNICAL REPORT</h4>
                            <p className="text-xs text-muted-foreground mb-4">
                                Download the full engineering documentation for this project.
                            </p>
                            <Button size="sm" variant="outline" className="w-full">
                                DOWNLOAD PDF
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
