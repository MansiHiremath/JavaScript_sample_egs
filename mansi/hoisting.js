//undefined console.log(productId)
//var productId=123

/*var productId=456
console.log(productId)
var productId=123*/      

/*var productId=456
console.log(productId)
let productId=123*/

showProductId()
function showProductId(){
    let productId=1234
    console.log(productId)
}

function addNums(a,b){
    return a+b
}
console.log(addNums(4,5)+'both number')
console.log(addNums('Lets','break'+'both strings'))
console.log(addNums(4)+'only one numeric paarmeter')
console.log(addNums('break',4)+'one strinmg and one numeric')
console.log(addNums()+'no parameter')


const vars={
num1:10,
str:'Hello'
}

let res=100
delete res
res=res+1
console.log(res)