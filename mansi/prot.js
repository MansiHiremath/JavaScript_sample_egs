function Student(name,rollNo){
    this.name=name
    this.rollNo=rollNo
}
Student.prototype.age=22
var s1=new Student('s1',1)
s1.age=12
var s2=new Student('s2',2)
console.log(s2.age)

var arr=[2,3,4]
arr.