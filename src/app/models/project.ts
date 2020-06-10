export interface Project {
    id: string;
    nameLong: string;
    nameShort: string;
    description: string;
    frontEnd?: string;
    backEnd?: string;
    githubUrl?: string;
    liveUrl?: string;
    thumbnailUrl: string;
    wip: boolean;
    github: boolean;
    live: boolean;
    pictures: any[];
}
