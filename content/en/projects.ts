
import { Project } from '../../types';

export const projects: Project[] = [
  {
    slug: "neom-genesis",
    featured: true,
    coverImage: "https://picsum.photos/seed/neom/800/600",
    title: "Neom Genesis",
    client: "FUTR Corp.",
    year: 2024,
    description: "A cinematic reveal for a futuristic architectural project. We utilized AI to generate procedural cityscapes and hyper-realistic environmental textures, integrated directly into Unreal Engine 5 for real-time ray tracing.",
    tools: ["Unreal Engine 5", "Houdini", "Substance Painter", "Nuke", "Python"],
    aiPipeline: ["SDXL Inpainting", "Custom LoRA Training", "ControlNet for Textures", "GAN for Skyboxes"],
    vimeoId: "59777392",
    images: [
      "https://picsum.photos/seed/neom1/1280/720",
      "https://picsum.photos/seed/neom2/1280/720",
      "https://picsum.photos/seed/neom3/1280/720"
    ],
    aiPrompts: "Prompt: `cinematic wide shot, futuristic desert city, organic architecture inspired by Zaha Hadid, golden hour lighting, hyperrealistic, octane render, 8k --ar 16:9 --style raw`\nNegative: `dystopian, ruins, pollution, cartoon`"
  },
  {
    slug: "project-chimera",
    featured: true,
    coverImage: "https://picsum.photos/seed/chimera/800/1000",
    title: "Project Chimera",
    client: "Starlight Interactive",
    year: 2024,
    description: "Creature design and animation for a next-gen game trailer. We developed a novel workflow using generative concept art as a base, then sculpted in ZBrush and rigged in Maya. AI-driven motion synthesis provided nuanced secondary animations.",
    tools: ["ZBrush", "Maya", "Substance Painter", "RunwayML", "ComfyUI"],
    aiPipeline: ["Generative Concept Art", "Style Transfer", "Motion Synthesis", "Texture Upscaling"],
    vimeoId: "76979871",
    images: [
      "https://picsum.photos/seed/chimera1/1280/720",
      "https://picsum.photos/seed/chimera2/1280/720"
    ]
  },
  {
    slug: "echoes-of-sylva",
    featured: false,
    coverImage: "https://picsum.photos/seed/sylva/800/600",
    title: "Echoes of Sylva",
    client: "Greenlight Films",
    year: 2023,
    description: "We created a fully procedural, enchanted forest environment for a short film. AI was used to generate unique flora variations, atmospheric effects, and matte paintings for distant landscapes, significantly reducing manual modeling time.",
    tools: ["Houdini", "SpeedTree", "Unreal Engine 5", "Nuke", "FFmpeg"],
    aiPipeline: ["Procedural Content Generation (PCG)", "AI Matte Painting", "Volumetric Cloud Generation"],
    vimeoId: "59777392",
    images: [
      "https://picsum.photos/seed/sylva1/1280/720",
      "https://picsum.photos/seed/sylva2/1280/720",
      "https://picsum.photos/seed/sylva3/1280/720",
      "https://picsum.photos/seed/sylva4/1280/720"
    ]
  },
  {
    slug: "aether-drift",
    featured: false,
    coverImage: "https://picsum.photos/seed/aether/800/1200",
    title: "Aether Drift",
    client: "Quantum Dynamics",
    year: 2023,
    description: "Visual effects for a product launch video. We generated complex particle simulations and fluid dynamics using a custom AI model trained on real-world physics data, delivering abstract yet believable visuals.",
    tools: ["Houdini", "Blender", "After Effects", "Python", "PyTorch"],
    aiPipeline: ["Physics-Informed Neural Networks (PINNs)", "StyleGAN for abstract patterns"],
    vimeoId: "76979871",
    images: [
      "https://picsum.photos/seed/aether1/1280/720",
      "https://picsum.photos/seed/aether2/1280/720"
    ]
  },
  {
    slug: "volta-commercial",
    featured: true,
    coverImage: "https://picsum.photos/seed/volta/800/800",
    title: "Volta EV",
    client: "Momentum Motors",
    year: 2024,
    description: "A high-energy car commercial featuring extensive set extension and digital environments. Our AI pipeline allowed for rapid prototyping of virtual locations, from alpine roads to urban cityscapes, enabling the director to iterate on location scouts virtually.",
    tools: ["Unreal Engine 5", "Blender", "Nuke", "ComfyUI", "SDXL"],
    aiPipeline: ["AI Set Extension", "Virtual Location Scouting", "HDRI Generation", "Plate Inpainting"],
    vimeoId: "59777392",
    images: [
      "https://picsum.photos/seed/volta1/1280/720",
      "https://picsum.photos/seed/volta2/1280/720",
      "https://picsum.photos/seed/volta3/1280/720"
    ]
  },
  {
    slug: "umbra-protocol",
    featured: false,
    coverImage: "https://picsum.photos/seed/umbra/800/600",
    title: "Umbra Protocol",
    client: "Cygnus Entertainment",
    year: 2023,
    description: "UI and FUI (Futuristic User Interface) design for a sci-fi series. We used generative models to create complex, animated data visualizations and holographic displays that felt both futuristic and functional.",
    tools: ["After Effects", "Illustrator", "RunwayML", "Python"],
    aiPipeline: ["Generative FUI Elements", "Data-driven Animation", "Style Transfer for UI skins"],
    vimeoId: "76979871",
    images: [
      "https://picsum.photos/seed/umbra1/1280/720"
    ]
  }
];
