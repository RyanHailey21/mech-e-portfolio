import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { TechGrid } from "@/components/tech-grid";

export default function ProjectsPage() {
    const categories = ["All", "Product Design", "Systems Design", "Simulation", "Manufacturing"];

    return (
        <div className="relative min-h-screen">
            <div className="container px-4 md:px-6 py-12">
                <div className="flex flex-col gap-4 mb-12">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">ENGINEERING PROJECTS</h1>
                    <p className="text-muted-foreground max-w-[600px]">
                        A collection of technical work spanning product design, systems engineering, and simulation analysis.
                    </p>
                </div>

                <Tabs defaultValue="All" className="w-full">
                    <div className="flex items-center justify-between mb-8 overflow-x-auto pb-4 md:pb-0">
                        <TabsList className="bg-background border border-border/50 h-auto p-1 gap-1">
                            {categories.map((category) => (
                                <TabsTrigger
                                    key={category}
                                    value={category}
                                    className="rounded-sm px-4 py-2 text-xs font-mono tracking-widest uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                                >
                                    {category}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <div className="hidden md:block text-xs font-mono text-muted-foreground opacity-50">
                            TOTAL: {projects.length}
                        </div>
                    </div>

                    <TabsContent value="All" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {projects.map((project) => (
                                <ProjectCard key={project.slug} {...project} />
                            ))}
                        </div>
                    </TabsContent>

                    {categories.filter(c => c !== "All").map((category) => (
                        <TabsContent key={category} value={category} className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {projects.filter(p => p.category === category).map((project) => (
                                    <ProjectCard key={project.slug} {...project} />
                                ))}
                            </div>
                            {projects.filter(p => p.category === category).length === 0 && (
                                <div className="w-full py-20 flex flex-col items-center justify-center border border-dashed border-muted rounded-lg text-muted-foreground">
                                    <p className="font-mono text-sm">NO PROJECTS IN THIS CATEGORY YET</p>
                                </div>
                            )}
                        </TabsContent>
                    ))}
                </Tabs>
            </div>

            {/* Background Grid */}
            <TechGrid opacity={0.05} className="z-[-1]" />
        </div>
    );
}
