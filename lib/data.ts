export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription?: string;
    tags: string[];
    image: string; // URL path or empty string
    category: "Product Design" | "Systems Design" | "Simulation" | "Manufacturing";
    stats?: {
        label: string;
        value: string;
    }[];
    content?: string; // Markdown or HTML content mimic
}

export const projects: Project[] = [
    {
        title: "Autonomous Drone Chassis",
        description: "Lightweight carbon fiber chassis design for high-endurance surveillance missions. Optimized for aerodynamic efficiency and structural rigidity using FEA.",
        longDescription: "A comprehensive design project focused on minimizing weight while maximizing structural integrity for a 2-hour endurance surveillance drone. The chassis features a monocoque central fuselage with detachable boom arms for transportability.",
        tags: ["SolidWorks", "FEA", "Carbon Fiber", "Aerodynamics"],
        image: "",
        slug: "autonomous-drone-chassis",
        category: "Product Design",
        stats: [
            { label: "Weight Reduction", value: "35%" },
            { label: "Max Payload", value: "2.5 kg" },
            { label: "Factor of Safety", value: "4.2" }
        ]
    },
    {
        title: "Robotic Arm End-Effector",
        description: "Precision gripper mechanism for automated assembly lines. Features force feedback sensors and adaptive gripping fingers for handling delicate components.",
        longDescription: "Designed for a high-mix low-volume assembly line, this end-effector uses a compliant mechanism to handle objects with varying geometries without requiring tool changes. Integrated load cells provide closed-loop force control.",
        tags: ["Mechatronics", "Python", "Rapid Prototyping", "Arduino"],
        image: "",
        slug: "robotic-arm-end-effector",
        category: "Systems Design",
        stats: [
            { label: "Grip Force", value: "0.5 - 50 N" },
            { label: "Response Time", value: "< 20ms" },
            { label: "Part Variety", value: "15+ Types" }
        ]
    },
    {
        title: "Thermal Management System",
        description: "Passive cooling solution for high-power LED arrays. Utilized CFD simulations to maximize heat dissipation while maintaining a compact form factor.",
        longDescription: "This project addressed the thermal throttling issues of a 500W industrial LED array. Through iterative CFD analysis using ANSYS Fluent, a custom fin geometry was developed that increased convective heat transfer by 40% compared to off-the-shelf solutions.",
        tags: ["ANSYS Fluent", "Heat Transfer", "Thermal Design", "Aluminum"],
        image: "",
        slug: "thermal-management-system",
        category: "Simulation",
        stats: [
            { label: "Heat Dissipation", value: "500W" },
            { label: "Max Temp", value: "75°C" },
            { label: "Noise", value: "0dB" }
        ]
    },
    {
        title: "Injection Mold Tooling",
        description: "Multi-cavity mold design for high-volume consumer electronic housing. Designed with complex side-actions and optimized cooling channels.",
        tags: ["MoldFlow", "DFM", "Tooling Design", "SolidWorks"],
        image: "",
        slug: "injection-mold-tooling",
        category: "Manufacturing",
    },
    {
        title: "All-Terrain Suspension",
        description: "Double-wishbone suspension system for a Baja SAE off-road vehicle. Optimized kinematics for maximum travel and bump steer minimization.",
        tags: ["Kinematics", "Suspension Design", "MATLAB", "Lotus Shark"],
        image: "",
        slug: "baja-sae-suspension",
        category: "Systems Design",
    }
];
