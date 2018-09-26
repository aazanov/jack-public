export declare namespace Common {

    export type IMethod = "POST" | "PUT" | "GET" | "DELETE";

    export interface IQuestionVariant {
        id: string;
        content: string;
    }

    export type IQuestionType = "RADIO" | "CHECKBOX" | "GENERAL";

    export type IDuration = "SHORT" | "MEDIUM" | "LONG";

}