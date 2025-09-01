import { CarouselItem } from "@/components/ui/Carousel/Carousel";

export interface Project {
    title: string;
    description: string;
    role: string;
    tags: string[];
    videoSrc?: string;
    carousel?: CarouselItem[];
    website?: string;
    github?: string;
    color: string;
}
