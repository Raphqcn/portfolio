//  types/tiles.ts
export interface tile{
    id: string;
    title: string;
    desc: string;
    type: string;
    icon?: string;
    icons?: string[];
    link?: string;
    links?: Array<{ url: string; icon: string, name:string }>;
    thumbnail: string;
    api_url: string;
}