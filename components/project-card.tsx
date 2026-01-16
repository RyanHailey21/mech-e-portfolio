import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    slug: string;
    category: string;
    className?: string;
}

export function ProjectCard({
    title,
    description,
    tags,
    image,
    slug,
    category,
    className,
}: ProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`}>
            <Card
                className={cn(
                    "group relative overflow-hidden h-full border-muted/40 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300",
                    className
                )}
            >
                {/* Hover Highlight Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    {/* Fallback pattern if no image (real app would use Next Image) */}
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                            <div className="text-muted-foreground text-xs font-mono uppercase tracking-widest">No Preview</div>
                        </div>
                    )}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <Badge
                        variant="secondary"
                        className="absolute top-3 right-3 font-mono text-[10px] tracking-widest uppercase rounded-sm bg-background/80 backdrop-blur-sm border-primary/20"
                    >
                        {category}
                    </Badge>
                </div>

                <CardHeader className="p-4 pb-2">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="font-heading font-bold text-xl tracking-wide group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                </CardHeader>

                <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {description}
                    </p>
                </CardContent>

                <CardFooter className="p-4 pt-0 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-secondary text-secondary-foreground border border-transparent group-hover:border-primary/20 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardFooter>

                {/* Technical Corner Markers */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary/0 group-hover:border-primary/50 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-primary/0 group-hover:border-primary/50 transition-colors" />
            </Card>
        </Link>
    );
}
