import { Component, OnInit } from '@angular/core';
import * as Math from './ExternalJs/math';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'es6-features';
  hikedsalary: any;
  emp: { name: string; salary: string; }[];
  
  ngOnInit() {
    // 1. const keyword
    const PI = 3.14;
    console.log("----- Const keyword -------");
    console.log("PI value is ", PI);
    // 2. map operator and fatarrow function (Arrow Function)
    this.emp = [
      { name: "vishal", salary: "60000" },
      { name: "vikram", salary: "45000" },
      { name: "vinay", salary: "34000" },
      { name: "vijay", salary: "21000" },
      { name: "vineeth", salary: "20500" },
      { name: "vishwa", salary: "20000" },
      { name: "vikas", salary: "19000" },
      { name: "virat", salary: "18500" },
      { name: "vipin", salary: "18200" },
      { name: "vinod", salary: "18000" },
    ]
    this.emp.map(data => {
      let bonus = 1200;
      if (data.name == "vishal") {
        this.hikedsalary = parseInt(data.salary) + (bonus);
      }
    })
    console.log("------ Arrow Function and Map Operator ------");
    console.log("Hiked salary for Vishal", this.hikedsalary);
    // 3. Template Strings
    this.emp.map(data => {
      let bonus = 1200;
      if (data.name == "vishal") {
        this.hikedsalary = parseInt(data.salary) + (bonus);
      }
    })
    console.log(`---- Template Literals ----`)
    console.log(`The hiked salary ${this.hikedsalary}`)
    // 4. Default parameters
    this.addNumbers(10);
    // 5. Rest Parameters
    this.RestParameter(2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9)
    // 6. Spread Operator
    let params = ["others", 123, 678.67, true];
    this.arraySpread(1, 2, ...params)
    // 7. For Of
    this.getusers();
    // 8. Template Strings/Template Literals
    console.log(`Template Literals/ Template Strings
---------------------------
1. String Interpolation`);
    let name = "Sangepu srivishal";
    let age = 27;
    let gender = "Male"
    console.log(`My Name is Mr.${name}`);
    console.log(`2. Custom Interpolation`);
    console.log(`My age = ${age}
Gender = ${gender}`);
    console.log("Binary and Octal Literals");
    console.log("Comsparing the octal and binary values with decimal values");
    let binary = 0b111;
    let octal = 0o767;
    if (binary === 7) {
      console.log("Value is true");
    }
    else {
      console.log("value is false");
    }
    if (octal === 503) {
      console.log("value is true");
    }
    else {
      console.log("value is false");
    }
    console.log("Enhanced Object Properties");
    let Team= {
      name: "Trinity Entwicklers",
      ["pass"+this.year()]: this.year()+1
    }
    // 9. Destructuring Assignment
    console.log("The computed property names are", Team["pass"+this.year()]);
    console.log(`Destructuring Assignment
    -----------------------`);
    console.log("Array Matching");
    let array = [1,2,3];
    let [a,, b]=array;
    [b,a] = [a,b];
    console.log("let [a,, b] =array",[b,a]);
    // console.log("Object Matching and ShortHand Notation");
    // let {x,y,z}= this.getObjParameters();
    // console.log(x);
  // 10. Object and Array Matching, Default values
    console.log("Object and Array Matching, Default values");
    let Obj1:any = {v: 2};
    let Array1:any = [1];
    let {v,w=2} = Obj1;
    let [x,y=2]= Array1;
    console.log([x,y]);
    // 11. Parameter Context Matching
    console.log("Parameter Context Matching");
    this.getContextMatchingObj({a:10,b:20,c:45});
    this.getContextMatchingArr([1,2,3])
    // 12. import and export
    console.log(`External Js Import and Export
    -------------------`);
    this.getAdd(10,12);    
    console.log(`The sqrt is ${Math.sqrt(5)}`);
    // 13. Promises
    this.getCurrentDate(10000).then((msg)=>{
      console.log("Actual Time from Promise",msg)
    });
    // 14. Built In Methods
    
    this.emp.map(data=>{
      let x:any =[];x = data;
      if(x.find(data.name === "vikram")){
        return console.log("Usser from fin method",x);
      }
    })
  }
  getCurrentDate(timeout){
    return new Promise((resolve, reject)=>{
    let currDate = new Date();
    console.log("Current Time Before triggering promise",currDate);
      setTimeout(()=>resolve(`${Date()}`),timeout)
    })
  }
  getAdd(x,y){
    console.log("The sum is",Math.add(x,y));
  }
  getContextMatchingArr([a,b,c]){
    console.log("The sum is",a+b+c);
  }
  getContextMatchingObj({a,b,c}){
    console.log("The sum is",a+b+c);
  }
  getObjParameters(){
    let a:any=10,b:any=20,c:any=30;
    return a+b+c;
  }
  year(){
    let date = new Date();
    return date.getFullYear();
  }
  addNumbers(x, y = 10, z = 2) {
    let add = x + y + z;
    console.log(`---- Default Parameters -----`);
    console.log(`The sum is ${add}`);
  }
  RestParameter(x, y, ...a) {
    console.log(`---- Rest Parameters -----`);
    let variable1 = (x + y) * a.length;
    console.log(variable1);
  }

  arraySpread(x, y, ...a) {
    console.log("---- Spread Operator ----");
    let item = (x + y) * a.length;
    console.log(item);
  }
  getusers() {
    for (let e of this.emp) {
      let ename = `Mr. ${e.name}`;
      console.log(`Employees List - ${ename}`);
    }
  }
}
