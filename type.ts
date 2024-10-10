// type User = {
//   readonly name: string; //change nahi hoga
//   salary: number;
//   workingHours?: number[]; // ? optional hoga
//   print?: () => void;
// };

// const rizwan: User = {
//   name: "rizwan",
//   salary: 10000,
// workingHours:[1,2,3],
// print:()=>{console.log("i am function");
// };

// rizwan.name="aditya"
// console.log(rizwan);

// interface Admin {
//   readonly name: string; //change nahi hoga
//   salary: number;
//   workingHours?: number[]; // ? optional hoga
//   print?: () => void;
// }

// interface Admin{
//     marks:number,
// }

// const admin: Admin = {
//   name: "admin",
//   salary: 12345,
//   marks:36,
// };

// console.log(admin);

// type vs interface
// interface me baad me add kar sakte hain like hum ko bahar ka interface use kar rahe hai toh alag se property add kar sakte hain isse interface reopening kehte hain

//inheritance
// interface User{
//     name:string,
//     marks:number[],
//     salary:number,
// }

// interface Student extends User{
//     age:number,

// }

// const rizwan:Student={
//     name:"rizwan",
//     marks:[23,45,67],
//     salary: 102733,
//     age:23,
// }

// type User ={
//     readonly name: string,
//     salary: number,
// }

// type Student = User & {
//     marks: number,
// }

// const rizwan:Student={
//     name:"rizwan",
//     salary:1234,
//     marks:234,
// }
