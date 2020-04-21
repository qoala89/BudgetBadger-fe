import { Tag } from './model/tag';
export interface ExpenseModel {
    articleLabel: string;
    price: string;
    tags: Tag[];
}
