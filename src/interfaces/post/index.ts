export declare namespace Post {
    export interface IPostPreview {
        id: string;
        views: number;
        viewed: boolean;
        type: string;
        reward: number;
        preview: IPostPreviewData;
        permission: number;
        owner: IPostPreviewOwner;
        duration: string;
        date: string;
    }

    export interface IPostPreviewOwner {
        name: string;
    }

    export interface IPostPreviewData {
        article: string;
        header: string;
        image: string;
    }
    
    // ------
    
    export interface IPostDetails {
        id: string;
        date: string;
        permission: number;
        reward: number;
        test: string;
        type: string;
        duration: string;
        owner: IPostDetailsOwner,
        preview: IPostPreviewData,
        details: (IDetailsHTML | IDetailsImage | IDetailsLine | IDetailsInterview)[]
    }

    export interface IPostDetailsOwner {
        name: string;
        about: string;
        logo: string;
    }

    export interface IDetailsHTML {
        id: string;
        type: "HTML";
        data: {
            content: string
        }
    }

    export interface IDetailsImage {
        id: string;
        type: "IMAGE";
        data: {
            url: string;
            caption?: string;
        }
    }

    export interface IDetailsLine {
        id: string;
        type: "LINE";
    }

    export interface  IDetailsInterview {
        id: string;
        type: "INTERVIEW";
        data: {
            content: string;
            type: "RADIO" | "CHECKBOX" | "GENERAL";
            variants: IQuestionVariant[];
        };
        answer?: string[];
    }

    export interface IQuestionVariant {
        id: string;
        content: string;
    }
}


