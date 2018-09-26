export declare namespace Common {

    export interface IQuestionVariant {
        id: string;
        content: string;
    }

    export type IQuestionType = "RADIO" | "CHECKBOX" | "GENERAL";

    export type IDuration = "SHORT" | "MEDIUM" | "LONG";

}