import { Question } from './question.model.client'

export class Quiz {
    _id: number
    title: string
    questions: Question[]
}