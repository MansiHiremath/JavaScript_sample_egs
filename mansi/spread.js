/*function stringtoarr(){
    let productCode='LOG-MO-500-A'
    let values=[...productCode]
    console.log(values)
}
stringtoarr()*/

function copyArr(){
    let oldArr=[1,2,3]
    let newArr=[...oldArr,true,false,4,5,6]
    let newArr1=[true,false,...oldArr,'a','b']
    console.log(newArr)
    console.log(newArr1)
    console.log(oldArr)
}

copyArr()

//copy array with objects

let products=[
    {
        pid:100,
        pname:'pencikl',
        cost:234
    },
    {
 pid:101,
        pname:'scale',
        cost:34
    }
]

function copyObjectArrays(){
    let diff=[...products]
    diff[0].pid=110
    diff[0].cost=500
    console.log(`${products[0].cost} and Name is ${products[0].pid}`)
}
/*copyObjectArrays()*/


//spreadoperator to concatenate
let productsNew=[
    {
        pid:10,
        pname:'pencikl',
        cost:234
    },
    {
 pid:101,
        pname:'scale',
        cost:34
    }
]

let allProducts=products.concat(productsNew)
console.log(allProducts)


allProductsSpread=[...productsNew,...products]
console.log(allProductsSpread)

console.log('--------constructor function-----')
let dt=new Date(2020,03,13)
console.log(dt)

let x=[2020,11,31]
let chutti=new Date(...x)
console.log(chutti)

console.log('----------------spread in function parameters')
function funParams(){
    multipleParams(1,2,3)
    let args=[1,2,3]
    multipleParams(...args)
}
function multipleParams(arg1,arg2,arg3){
    console.log(` function parameters are ${arg1},${arg2},${arg3}`)
    console.log('')
}
funParams()

console.log('-------spread to shallow copy objects')
function objLiteral(){
    let product={
        pid:10,
        pName:'Pencil',
        cost:34
    }

    let prod2={...product}
    console.log(prod2)
}
objLiteral()
