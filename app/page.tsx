import Link from "next/link";
import { ArrowRight, Box, Cpu, Ruler, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { TechGrid } from "@/components/tech-grid";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="relative flex flex-col items-center">

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden border-b">
        <TechGrid opacity={0.1} />

        <div className="container relative z-10 px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <Badge variant="outline" className="font-mono text-xs tracking-widest uppercase border-primary/50 text-primary bg-primary/5">
              Available for Hire
            </Badge>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-foreground">
              PRECISION <br className="hidden md:block" />
              <span className="text-muted-foreground/30">ENGINEERING</span>
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl font-light">
              Designing systems where <span className="text-foreground font-medium">function dictates form</span>.
              Specializing in mechanical design, thermal analysis, and rapid prototyping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-none border-l-2 border-primary/0 hover:border-primary">
                <Link href="/projects">
                  VIEW PROJECTS <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-none">
                <Link href="/about">
                  ABOUT ME
                </Link>
              </Button>
            </div>

            <div className="flex gap-8 pt-8 text-muted-foreground/50">
              <div className="flex items-center gap-2">
                <Ruler className="h-4 w-4" />
                <span className="text-xs font-mono uppercase tracking-wider">CAD Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span className="text-xs font-mono uppercase tracking-wider">Simulation</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                <span className="text-xs font-mono uppercase tracking-wider">Mechatronics</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Abstract */}
          <div className="flex-1 w-full max-w-[500px] aspect-square relative md:ml-auto">
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-4 border border-dashed border-muted-foreground/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-primary/5 backdrop-blur-3xl rounded-full blur-3xl" />
            </div>

            {/* Decorative 'Technical' Lines */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border" />
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-border" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-20 px-4 md:px-6">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12 border-b border-border/50 pb-6">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide">
                FEATURED WORK
              </h2>
              <p className="text-muted-foreground mt-2 max-w-[600px]">
                Selected projects demonstrating engineering fundamentals and innovative problem solving.
              </p>
            </div>
            <Button variant="ghost" className="font-mono text-xs tracking-widest gap-2 group" asChild>
              <Link href="/projects">
                ALL PROJECTS <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills / Process Teaser */}
      <section className="w-full py-20 bg-muted/20 border-t border-b border-muted">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold">MY PROCESS</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1 min-w-[3rem]">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-sm font-bold border border-primary/20">01</div>
                    <div className="w-[1px] h-full bg-border" />
                  </div>
                  <div className="pb-8">
                    <h3 className="font-bold text-lg">Define & Analyze</h3>
                    <p className="text-muted-foreground">Understanding the core problem constraints, user needs, and operating environment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1 min-w-[3rem]">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-sm font-bold border border-primary/20">02</div>
                    <div className="w-[1px] h-full bg-border" />
                  </div>
                  <div className="pb-8">
                    <h3 className="font-bold text-lg">Design & Simulate</h3>
                    <p className="text-muted-foreground">Iterative CAD modeling and FEA/CFD simulation to validate performance before fabrication.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1 min-w-[3rem]">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-sm font-bold border border-primary/20">03</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Build & Test</h3>
                    <p className="text-muted-foreground">Prototyping, physical testing, and refinement to reach the final specification.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-square md:aspect-[4/3] bg-card border border-border/50 p-6 rounded-lg overflow-hidden">
              <TechGrid opacity={0.15} />
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-2">
                  <Box className="w-16 h-16 mx-auto text-primary/40" />
                  <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                    Prototyping Lab <br />
                    <span className="text-[10px] opacity-50">Currently Offline</span>
                  </p>
                </div>
              </div>
              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 p-4 font-mono text-xs text-muted-foreground/20">SYS.STATUS.OK</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 px-4 text-center">
        <div className="container max-w-[800px] space-y-6">
          <h2 className="font-heading text-4xl font-bold">READY TO COLLABORATE?</h2>
          <p className="text-muted-foreground text-lg">
            I am currently looking for full-time opportunities in mechanical design and product engineering.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-none px-8">
              CONTACT ME
            </Button>
            <Button variant="outline" size="lg" className="rounded-none px-8" asChild>
              <Link href="/resume.pdf">DOWNLOAD RESUME</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
