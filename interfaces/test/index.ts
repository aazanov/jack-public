import {Common} from "../common/index";

export declare namespace Test {
    export interface ITestDetails {
        post: {
            reward: number;
            duration: Common.IDuration;
        };
        questions: ITestQuestion[];
    }

    // test comment

    export interface ITestQuestion {
        id: string;
        content: string;
        type: Common.IQuestionType;
        variants: Common.IQuestionVariant[];
    }
    
    export interface ITestAnswer {
        answer: string[];
        question: string;
    }

    export interface ICheckedAnswer {
        question: string;
        answer: string[];
        correct?: string[];
        reward?: number;
    }

    export interface ICheckedTest {
        questions: ICheckedAnswer[];
        totalReward: number;
    }
    
    export interface ITestCheck {
        _id: string;
        questions: ITestCorrectAnswer[];
        reward: number;
        postId: string;
        completed: boolean;
    }

    interface ITestCorrectAnswer {
        _id: string;
        correct: string[];
        question: string;
        weight?: number;
    }

}