/*const fs=require('fs');
const path=require('path');
const dirCodes=path.join(__dirname,"codes");
const {v4:uuid}=require('uuid')

if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true});
}

const generateFile=async(format,content)=>{
    const jobId=uuid();
    const fileName=`${jobId}.${format}`
    const filePath=path.join(dirCodes,fileName);
    await fs.writeFileSync(filePath,content);
    return filePath;

};
module.exports={
    generateFile,
};*/
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const dirCodes = path.join(__dirname, "codes");

if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = async (format, content) => {
  const jobId = uuid();
  const filename = `${jobId}.${format}`;
  
  const filepath = path.join(dirCodes,filename);
    await fs.writeFileSync(filepath,content);
  
  return filepath;
};

module.exports = {
  generateFile,
};
