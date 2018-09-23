import { Common } from "../common";
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
        duration: Common.IDuration;
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
        duration: Common.IDuration;
        owner: IPostDetailsOwner;
        preview: IPostPreviewData;
        details: IDetailsCommon[];
    }
    interface IPostDetailsOwner {
        name: string;
        about: string;
        logo: string;
    }
    interface IDetailsCommon {
        id: string;
        type: string;
    }
    interface IDetailsHTML extends IDetailsCommon {
        type: "HTML";
        data: {
            content: string;
        };
    }
    interface IDetailsImage extends IDetailsCommon {
        type: "IMAGE";
        data: {
            url: string;
            caption?: string;
        };
    }
    interface IDetailsLine extends IDetailsCommon {
        type: "LINE";
    }
    interface IDetailsInterview extends IDetailsCommon {
        type: "INTERVIEW";
        data: {
            content: string;
            type: Common.IQuestionType;
            variants: Common.IQuestionVariant[];
        };
        answer?: string[];
    }
}
