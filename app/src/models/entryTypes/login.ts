import { entry } from '../entry';

export default class Login implements entry {
    public name: string;
    public readonly type: string = 'login';
    public icon: string;
    public parent: string;
    public data: [{ key: string, value: string }];
}