let str='This is immutable'
let res='Hello' + str
console.log(res)

let num=10
num=num+1
console.log(num)

let nums=[2,4,6]
let arr=new Array(1,3,5)
let arrs=Array.of(10,20,30)
console.log(arrs)


nums.push(8)
console.log(nums)

let chars=['a','b','c']
let newValues=chars.slice(1,2)
console.log(newValues)

let newVal=chars.slice()
console.log(newVal)

let newVal1=chars.slice(1)
console.log(newVal1)


let newValues1=chars.splice(1,2)
console.log(newValues1)

let newVal2=chars.splice()
console.log(newVal2)

let newVal3=chars.splice(1)
console.log(newVal3)





