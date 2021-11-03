
class Student
{
    //Properties part of the class that goes in setup
    //arguements are passed inside the round brackets of function
    constructor(name,grade,age){
        //to create properties or call them use keyword this.
        this.name=name;
        this.grade=grade;
        this.age=age;
    }
    
    //function part of the class that goes in draw
    display(){
        console.log(this.name);
        console.log(this.grade);
        console.log(this.age);
    }
}



