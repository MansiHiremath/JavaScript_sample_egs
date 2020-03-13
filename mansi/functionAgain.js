//let productId=1234
/*function showProductId(){
    let productId=4567
    console.log(`ProductId in showProduct() is : ${productId}`)
}
console.log(`productId after showProduct() is : ${productId}`)
showProductId()
console.log('...........')*/

let greeting=(function(){
    let message='Hello'
    let getMessage=function(){
        return message
    }
    return{
        getMessage
    }
})()
console.log(greeting().getMessage())

let a=10
function outer(b){
    let x=45
    b=20
    function middle(c){
function inner(){
    console.log('${a},${b},${c}')
}
inner()
    }
middle(30)
    }
    outer(20)
