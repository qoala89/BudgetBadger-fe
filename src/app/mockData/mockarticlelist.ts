import { Article } from '../model/article';

export const MockArticleList: Article[] = [
    {
        id:                 0,
        label:              'Tomaten',
        description:        'Bio',
        tagIds:             [0, 4],
    }, 
    {
        id:                 1,
        label:              'DB MÜ-DÜ',
        description:        'Fahrt von München nach Düsseldorf',
        tagIds:             [3, 2],
    }, 
    {
        id:                 2,
        label:              'Wein Gläser',
        description:        'Schön',
        tagIds:             [1],
    }, 
];