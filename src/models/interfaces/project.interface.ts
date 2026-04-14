export interface Project {
    title: string;
    description: string;
    role: string;
    tags: string[];
    videoSrc?: string;
    imageSrc?: string;
    website?: string;
    github?: string;
    isNew?: boolean;
    color: string;
}
