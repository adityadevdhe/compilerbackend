const express=require("express");
const app=express();
const {generateFile} =require('./generateFile')
const {executeCpp}=require("./executeCpp")
const {executePy}=require("./executePy")
const cors=require("cors")
const PORT= 5000 || process.env.PORT
app.use(cors())
app.get('/',(req,res)=>{
    return res.json({hello:"World"})

})
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.post("/run",async(req,res)=>{
    const {language="py",code}=req.body;
    if(code===undefined)
    {
        return res.status(400).json({success:false,error:"Empty code"})
    }
    try{
        const filepath= await generateFile(language,code)
        const output=await executePy(filepath)
        console.log(filepath)
        return res.json({filepath,output})
    }catch(err){
        res.status(500).json({err})
    }
})

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})