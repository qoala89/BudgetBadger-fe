import { User } from './user'

export class Group {
    admins:         User[];
    users:          User[];
    label:          string;
    description:    string;
}