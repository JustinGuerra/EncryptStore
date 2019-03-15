import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
import DataFile from './models/data-file';

const writeFile = promisify(fs.writeFile);
const checkFile = promisify(fs.access);
const fsStat = promisify(fs.stat);

let dataFileName: string = 'data.esdf';

//This will be used to manage the data file
//to initialize you need to pass in a path to the data file,
//if it recieves none then it will generate a new one.
export default class DataFileManager{

    public dataFile: DataFile;

    constructor(hash: string, dataFilePath: string){

            this.getPathStats(dataFilePath)
                .then( statsSuccess => {
                    //There was no error codes and so we got a stat object
                    console.log(statsSuccess);
                })
                .catch( statsError =>{
                    //There was an error code
                    console.log(statsError);

                });
    }

    //To generate a file we need a file path
    //if we don't have one then we'll just make one at our current path
    //I don't think this will work though and we should use appData possibly.
    async generateNewFile(hash: string, directoryPath = __dirname) {
        let filePath: string = path.join(directoryPath, 'data.esdf');
        let dataFile: DataFile = new DataFile(hash);

        await writeFile( filePath, JSON.stringify(dataFile));
    }

    async getPathStats(filePath: string): Promise<fs.Stats> {
        return await fsStat(filePath);
    }
}