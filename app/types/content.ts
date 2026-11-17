export interface Social {
    name: string;
    url: string;
    icon: string;
}

export interface Site {
    name: string;
    role: string;
    location: string;
    timezone?: string;
    availability?: string;
    intro: string;
    about: string;
    stack: { name: string; icon: string }[];
    contact: { title: string; email?: string };
    socials: Social[];
}

export interface ProjectMeta {
    slug: string;
    title: string;
    summary: string;
    category: string;
    year: string;
    role?: string;
    order?: number;
    thumbnail?: string;
    link?: string;
    source?: string;
    stack?: string[];
    readingTime: number;
}

export interface Project extends ProjectMeta {
    html: string;
    next: { slug: string; title: string } | null;
}

export interface ArticleMeta {
    slug: string;
    title: string;
    description?: string;
    date: string;
    tags?: string[];
    thumbnail?: string;
    readingTime: number;
}

export interface Article extends ArticleMeta {
    html: string;
}
