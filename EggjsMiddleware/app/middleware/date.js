
module.exports = (options,app) => {
    
    return async function date(ctx,next){
        
        console.log(options);   //打印参数 
        console.log(new Date()); //打印时间
        await next();
    }
}


