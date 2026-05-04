import { Sparkles, Coffee, Zap } from 'lucide-react';

export const categories = [
  {
    name: "Chocolate Series",
    description: "Dark, moody, and ultra-premium designs tailored for luxury artisan brands. Features deep cinematic vignettes and slow-melt scroll dynamics.",
    templates: [
      {
        id: "03",
        name: "VELVET",
        description: "The Dark Art of Chocolate",
        href: "/template3",
        accent: "text-[#c8922a]",
        icon: Sparkles
      },
      {
        id: "04",
        name: "NOIR",
        description: "The Essence of Dark",
        href: "/template4",
        accent: "text-[#a67c52]",
        icon: Sparkles
      },
      {
        id: "05",
        name: "OBSIDIAN",
        description: "Pure 100% Cacao Experience",
        href: "/template5",
        accent: "text-white",
        icon: Sparkles
      },
      {
        id: "06",
        name: "SILK",
        description: "Smooth. Decadent. Pure.",
        href: "/template6",
        accent: "text-[#c8a97e]",
        icon: Sparkles
      }
    ]
  },
  {
    name: "Fresh Series",
    description: "Vibrant, high-energy interfaces designed for cold-pressed juices and organic fruit brands. Features refreshing color palettes and dynamic fluid motion.",
    templates: [
      {
        id: "07",
        name: "VITALITY",
        description: "Pure Organic Energy",
        href: "/template7",
        accent: "text-green-400",
        icon: Sparkles
      },
      {
        id: "08",
        name: "NECTAR",
        description: "The Essence of Fruit",
        href: "/template8",
        accent: "text-red-400",
        icon: Sparkles
      },
      {
        id: "09",
        name: "BOTANICA",
        description: "Wildcrafted Elixirs",
        href: "/template9",
        accent: "text-emerald-400",
        icon: Sparkles
      },
      {
        id: "10",
        name: "OASIS",
        description: "Liquid Gold Bottled",
        href: "/template10",
        accent: "text-orange-400",
        icon: Sparkles
      },
      {
        id: "11",
        name: "AURORA",
        description: "The Citrus Dawn",
        href: "/template11",
        accent: "text-yellow-400",
        icon: Sparkles
      }
    ]
  },
  {
    name: "Coffee Series",
    description: "Warm, sophisticated scrolling experiences designed for craft roasters. Incorporates organic fluid transitions and earthy color palettes.",
    templates: [
      {
        id: "01",
        name: "AURA",
        description: "The Art of Coffee",
        href: "/template1",
        accent: "text-amber-500",
        icon: Coffee
      }
    ]
  },
  {
    name: "Performance Series",
    description: "High-octane, neon-accented interfaces built for energy products and tech hardware. Features sharp, aggressive scroll velocity.",
    templates: [
      {
        id: "02",
        name: "VOLT.OS",
        description: "High-Voltage Energy",
        href: "/template2",
        accent: "text-[#ccff00]",
        icon: Zap
      }
    ]
  }
];
