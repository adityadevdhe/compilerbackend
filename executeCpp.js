/*const {exec} =require("child_process");
const { error } = require("console");
const fs=require('fs');
const path=require('path');
const outputpath=path.join(__dirname,"outputs");

const { stdout, stderr } = require("process");

if(!fs.existsSync(outputpath)){
    fs.mkdirSync(outputpath,{recursive:true});
}

const executeCpp=(filepath)=>{
    const jobId=path.basename(filepath).split(".")[0];
    const outpath=path.join(outputpath,`${jobId}.exe`);
    return new Promise((resolve,reject)=>{
        exec(`g++ ${filepath} -o ${outpath} && cd ${outputpath} && ./${jobId}.exe`,
        (error,stdout,stderr)=>{
            if(error){
              console.log(error)
                reject({error,stderr})
            }
            if(stderr){
              console.log(stderr)
                reject(stderr)
            }
            resolve(stdout);
        })

    })
}
module.exports={
    executeCpp,
};*/

const { exec } = require('child_process');
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filepath) => {
  console.log(`filep ${filepath}`);
  const jobId = path.basename(filepath).split(".")[0];
  console.log(`Jobid ${jobId}`)
  const outPath = path.join(outputPath, `${jobId}.exe`);
  console.log(`outpath :${outPath}`)
  console.log(`outputPath:${outputPath}`)
  console.log(`Jobid:${jobId}`)
  
 
  return new Promise((resolve, reject) => {
    exec(
      `g++ "${filepath}" -o "${outPath}" `,
      (error, stdout, stderr) => {
        error && reject({error,stderr})
        stderr && reject({stderr});
        resolve(stdout)
        
      }
    );
    console.log("sbnkibnasnano")
    exec(
      `cd "${outputPath}"`,
      (error, stdout, stderr) => {
        if(error){
          console.log(error)
          reject({error,stderr});
        }
        if(stderr){
          reject(stderr);
        }
        resolve(stdout);
      }
    );
    const exePath = `"${path.resolve(__dirname, 'b4141bf5-e144-43e0-8fa1-773fd921be15.exe')}"`;
    const executePath=`./${jobId}.exe`
    const execPath=`${executePath}`
    console.log(execPath)
   
    exec(
      exePath,
      (error, stdout, stderr) => {
        if(error){
          console.log(error)
          reject({error,stderr});
        }
        if(stderr){
          reject(stderr);
        }
        resolve(stdout);
      }
    );
  });
};

module.exports = {
  executeCpp,
};
