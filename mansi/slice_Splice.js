//splice it returns the removed items from an array
//it will change the original array


//slice:it returns the selected items from an array
var arr1=[1,2,3,4,5]
var res1=arr1.splice(2) 
for(let r of res1){
    console.log(r)
}
console.log(arr1)
console.log('-------splice with 2 param')
var arr2=[1,2,3,4,5,6]
var res2=arr2.splice(2,2)
for(let r of res2)
{
    console.log(r)
}
console.log(arr2)


console.log('----------splice with no parameter')
var arr3=[1,2,3,4,5,6]
var res3=arr3.splice()
for(let r of res3)
{
    console.log(r)
}
console.log(arr3)


console.log('------slice-------')
var per={}
var arr4=[1,2,3,4,5,6]
var res4=arr4.slice(2)

for(let r of res4)
{
    console.log(r)
}
console.log(arr4)


console.log('----------slice with two parameter')
var arr5=[1,2,3,4,5,6]
var res5=arr5.slice(2,2)
for(let r of res5)
{
    console.log(r)
}
console.log(arr5)


console.log('------filter,find')
const values=['one','two','three','four']
/*const ans=values.filter(function(e){
    return e.length!==3
})
console.log(ans)*/

const ans=values.filter((e)=>e.startsWith('t'))
console.log(ans)

console.log('-----find-----')
const found=values.find((item)=>item.substr(2))
console.log(found)

console.log('----index')
var ind=['a','b','c','d']
console.log(ind.indexOf('d',1))

console.log('---------map----s')
arrMap=[10,2,5,6,88,9,-1,'a']
let resMap=arrMap.map(e=>e*2)
resMap.forEach(element=>console.log(element))
console.log(arrMap)