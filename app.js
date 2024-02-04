//import {readFileSync} from 'fs';
import fs from 'fs';



//import test from './test.txt';
const text = fs.readFileSync('test.txt', 'utf-8');
console.log(text);