import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
import DataFile from './models/data-file';

const writeFile = promisify(fs.writeFile);

//This will be used to manage the data file
//to initialize you need to pass in a path to the data file,
//if it recieves none then it will generate a new one.
export default class DataFileManager{

    public dataFile: DataFile;

    constructor(dataFilePath?:string){
        if(dataFilePath){

        }else{
            //TODO we need to log this
            this.generateNewFile().catch(error => console.log(error));
        }
    }

    //To generate a file we need a file path
    //if we don't have one then we'll just make one at our current path
    //I don't think this will work though and we should use appData possibly.
    async generateNewFile(directoryPath = __dirname) {
        let filePath: string = path.join(directoryPath, 'data.esdf');
        let dataFile: DataFile = new DataFile();

        await writeFile( filePath, JSON.stringify(dataFile));
    }
}