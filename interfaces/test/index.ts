import {Common} from "../common/index";

export declare namespace Test {
    export interface ITestDetails {
        post: {
            reward: number;
            duration: Common.IDuration;
        };
        questions: ITestQuestion[]
    }

    // test comment

    export interface ITestQuestion {
        id: string;
        content: string;
        type: Common.IQuestionType;
        variants: Common.IQuestionVariant[];
    }
}