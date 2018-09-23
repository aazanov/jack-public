import { Common } from "../common";
export declare namespace Test {
    interface ITestDetails {
        post: {
            reward: number;
            duration: Common.IDuration;
        };
        questions: ITestQuestion[];
    }
    interface ITestQuestion {
        id: string;
        content: string;
        type: Common.IQuestionType;
        variants: Common.IQuestionVariant[];
    }
}
