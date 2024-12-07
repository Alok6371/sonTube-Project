const asyncHandler =(reqHandler)=>{
    (req,res,next)=>{
        Promise.resolve(reqHandler(req,res,next)).catch((err)=>{
            next(err)
        })
    }
}

export {asyncHandler}





////////////////////////////////////////Try catch Wise
// const asyncHandler=()=>{}
// const asyncHandler=(func)=>()=>{}
// const asyncHandler=(func)=> async()=>{}


// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(err){
//         console.log(err.code || 500).json({
//             success:false,
//             message:err.message
//         });
        
//     }
// }