console.log(this)

let person={
    fname:'David',
    lname:'Smith',
    fullName:function(){
        return this.fname + ' '+this.lname
    
}
}
console.log(person.fullName())

//constructor function

function Emp(empId,ename){
    this.eid=empId
    this.name=ename
}
let e1=new Emp(100,'abc')
console.log('Using call')
console.log(person.fullName().call())