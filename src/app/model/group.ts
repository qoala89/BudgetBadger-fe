import { User } from './user'

export class Group {
    id:             number;
    adminIds:       number[];
    userIds:        number[];
    label:          string;
    description:    string;
}