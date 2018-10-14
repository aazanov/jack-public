import {Common} from "../common/index";

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
        duration: Common.IDuration;
        date: string;
        amount: number;
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
        duration: Common.IDuration;
        owner: IPostDetailsOwner;
        preview: IPostPreviewData;
        details: IDetailsCommon[];
        amount: number;
    }

    export interface IPostDetailsOwner {
        name: string;
        about: string;
        logo: string;
    }

    export interface IDetailsCommon {
        id: string;
        type: string;
    }

    export interface IDetailsHTML extends IDetailsCommon {
        type: "HTML";
        data: {
            content: string
        }
    }

    export interface IDetailsImage extends IDetailsCommon {
        type: "IMAGE";
        data: {
            url: string;
            caption?: string;
        }
    }

    export interface IDetailsLine extends IDetailsCommon{
        type: "LINE";
    }

    export interface IDetailsInterview extends IDetailsCommon {
        type: "INTERVIEW";
        data: {
            content: string;
            type: Common.IQuestionType;
            variants: Common.IQuestionVariant[];
        };
        answer?: string[];
    }
}


