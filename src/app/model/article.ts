import { Tag } from './tag'

export class Article {
    label:              string;
    description:        string;
    tags:               Tag[];
    autocompleteHelper: string [];
}