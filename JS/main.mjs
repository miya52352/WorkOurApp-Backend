import { MinnaTransClass } from './minnaTransClass.js';


let exercise_key = "KkHBDdhaF0sYyFSVba2FGQ==RXU731Fltx4dcRhc";
let trans_key = "754f99bb94f2d89520b659a85bbf74ef0666da4cb";
let trans_secret = "ec7afb168fbc69055c37e1a28e16448b";
let trans_name = "harusame777";

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


const resource = data[0]["instructions"];
console.log(`原文：${resource}`);
const result = await minnaTrans.translateEn2Ja(resource);
console.log(result);