export interface IPostPreview {
    id: string;
    views: number;
    viewed: boolean;
    type: string;
    reward: number;
    preview: IPostPreviewData;
    permission: number;
    owner: IPostOwner;
    duration: string;
    date: string;
}

export interface IPostOwner {
    name: string;
}

export interface IPostPreviewData {
    article: string;
    header: string;
    image: string;
}