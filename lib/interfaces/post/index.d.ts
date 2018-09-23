export declare namespace Post {
    interface IPostPreview {
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
    interface IPostPreviewOwner {
        name: string;
    }
    interface IPostPreviewData {
        article: string;
        header: string;
        image: string;
    }
    interface IPostDetails {
        id: string;
        date: string;
        permission: number;
        reward: number;
        test: string;
        type: string;
        duration: string;
        owner: IPostDetailsOwner;
        preview: IPostPreviewData;
        details: (IDetailsHTML | IDetailsImage | IDetailsLine | IDetailsInterview)[];
    }
    interface IPostDetailsOwner {
        name: string;
        about: string;
        logo: string;
    }
    interface IDetailsHTML {
        id: string;
        type: "HTML";
        data: {
            content: string;
        };
    }
    interface IDetailsImage {
        id: string;
        type: "IMAGE";
        data: {
            url: string;
            caption?: string;
        };
    }
    interface IDetailsLine {
        id: string;
        type: "LINE";
    }
    interface IDetailsInterview {
        id: string;
        type: "INTERVIEW";
        data: {
            content: string;
            type: "RADIO" | "CHECKBOX" | "GENERAL";
            variants: IQuestionVariant[];
        };
        answer?: string[];
    }
    interface IQuestionVariant {
        id: string;
        content: string;
    }
}
