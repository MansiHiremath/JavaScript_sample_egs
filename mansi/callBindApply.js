var stud={
    rollNo:200,
    fname:'David',
    lname:'Smith',
    getStudName:function(){
        return this.fname + ' '+this.lname
    }
}
/*var logName=function(lang1,lang2){
    console.log(`Logged :${this.getStudName()}`)
}
logName()
let logStudName=logName.bind(stud)
console.log(logStudName)*/


var logName=function(lang1,lang2){
    console.log(`Logged :${this.getStudName()}`)
    console.log(`Arguments :${lang1}and ${lang2} `)
}.bind(stud)
logName('en','de')

console.log('---call to execte the function')

//call
logName.call(stud,'es','en-gb')
logName.apply(stud,['de','es'])


//function borrowing

var stud2={
     rollNo:200,
    fname:'David',
    lname:'Smith'

}
let newName=stud.getStudName.apply(stud2)
console.log(newName)
console.log(stud.getStudName.call(stud2 ))

//function currying
function multiply(a,b){
    return a*b
}
var multiplyBytwo=multiply.bind(this,2) 

//argument object in js
function add(){
    var sum=0
    for (let i=0;i<arguments.length;i++){
        sum=sum+arguments[i]
        console.log(arguments)
    }
    console.log(sum)
}
add(2,4,6)