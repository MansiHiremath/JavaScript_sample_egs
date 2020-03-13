/*function tryCatch(){
    let result
    try{
        result=x/10
        console.log("this statement is after the error in try")
    }
    catch(error){
        console.log(error.message)
    }
    finally{
        console.log('will always get executed')
    }
}*/
//tryCatch()


//custom errors

function throwError(){
    try{
        attemptDiv()

    }catch(error){
console.log(`${error.message}:Error type:${error.name}`)
    }
}

function attemptDiv(){
    let result 
    try{
        result=x/10

    }catch(error){
        throw{
            "message":"attemptdiv method x is not defined"+error.message,"name":"my custome error"
        }
    }
}