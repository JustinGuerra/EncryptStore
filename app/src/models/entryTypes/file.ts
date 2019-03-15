import { entry } from '../entry';

export default class File implements entry {
    public name: string;
    public type: string = 'folder';
    public icon: string;
    public parent: string;
}