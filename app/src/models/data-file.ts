import { entry } from "./entry";
import * as fs from 'fs';
import * as path from 'path';

//TODO this needs to require a password hash to build.
export default class DataFile {
    public hash: string = '';
    public contents: entry[] = [];
}