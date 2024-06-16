import { MinnaTransClass } from './minnaTransClass.js';
import * as dotenv from 'dotenv'
dotenv.config()


let exercise_key = process.env.exercise_key;
let trans_key = process.env.trans_api_key;
let trans_secret = process.env.trans_api_secret;
let trans_name = process.env.trans_login_id;

const minnaTrans = new MinnaTransClass(trans_key, trans_secret, trans_name);




const params = { // 渡したいパラメータをJSON形式で書く
  muscle: "biceps",
};

const query_params = new URLSearchParams(params); 

const response = await fetch('https://api.api-ninjas.com/v1/exercises?' + query_params, {
  headers: {
    'X-Api-Key': exercise_key,
  }
});

const data = await response.json();

console.log(data);


const resource = data[0]["instructions"];
console.log(`原文：${resource}`);
const result = await minnaTrans.translateEn2Ja(resource);
console.log(result);