//                                                    OBJECT


const student = {    //here student is object 
    fullname: "ankush pal",
    Marks: 93.33,
    printmarks: function () {
        console.log("marks =",this.Marks);
    },
}
console.log(student);  
console.log(student.fullname);
console.log(student.Marks);
student.printmarks()


//we can also inhrete the 1 object from another object
const employee= {
    caltax(){
        console.log("tax rate is 10% ");
    },
}
const emp1={
    salary: 100000,
}
//for inharite the object we use __proto__
emp1.__proto__=employee;                             //this is known as inharitence
emp1.caltax();
console.log(emp1.salary);

//let suppose there more employee then
const emp2={
    salary: 100000,
}
const emp3={
    salary: 100000,
}
const emp4={
    salary: 100000,
}

emp2.__proto__=employee;
emp3.__proto__=employee;
emp4.__proto__=employee;

emp2.caltax();
emp3.caltax();
emp4.caltax();

//if the object and prototype having the same function then the prototype's funtion will be execute// its like method overriding


//for eg...,
const emp5={
    salary: 200000,
    caltax(){
        console.log("tax rate is 20%");
    }
}
emp5.__proto__=employee;
console.log(emp5.salary);
emp5.caltax();





//                                    CLASS    = all the concept of the class for javascript is similar to the java 


class Toyotacar{           //Toyotacar is class
    constructor(){                            // for creating constructor we use constructor() not the name of class
        console.log("welcome to the TOYOTA group")
    }
    brandname;

    start(){
        console.log("start");
    }
    
    stop(){
        console.log("stop");
    }
    setbrand(brand){
        this.brandname = brand;
    }
    getbrand(){
        console.log(this.brandname);
    }
}

let fortuner = new Toyotacar();             // fortuner is object of the car
fortuner.start();
fortuner.stop(); 

let lexus = new Toyotacar();
lexus.start();

lexus.setbrand("lexus");
lexus.getbrand();
fortuner.setbrand("fortuner");
fortuner.getbrand();







//                inheritance    



class person{
    constructor(){
        console.log("homosepian")
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work()
    {
        console.log("having nothing work");             //both person and engineer having the same function which knows as overriding
    }
}
class engineer extends person{    
    constructor(){
        super();
        console.log("engineer homosepian")
                                              //to accessing the constructor of the parent class we use super()
    }              
    work(){                                    // if child and parent both class having the same function then child class's function will run
        console.log("solving the problems");
    }
}
class doctor extends person{
    treatment(){
        console.log("doing treatment");
    }
}

let obj = new engineer();

obj.work();
obj.eat();

let obj1 = new doctor();
obj1.treatment();
obj1.sleep();

