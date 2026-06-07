// Map() Practice
// task 1
// let nums: number[] = [1,2,3,4,5];
// let newArr = nums.map((elem)=>{
//     return elem.toLocaleUpperCase()
// })
// console.log(newArr);

// task 2

// let names: string[] = ["ali", "sara", "usman"];
// let newArr1 = names.map((elem)=>{
//     return elem.toLocaleUpperCase()
// })
// console.log(newArr1);

// task 3 

// let users = [
//   { id: 1, name: "Fatima", age: 22 },
//   { id: 2, name: "Bilal",  age: 25 },
//   { id: 3, name: "Hina",   age: 19 },
// ];

// let usersNames = users.map((elem)=>{
//     return elem.name
// });
// console.log(usersNames);

// task 4
// add tax in prices 
// let products = [
//   { name: "tea",    price: 100 },
//   { name: "Biscuit", price: 50  },
//   { name: "Samosa",  price: 30  },
// ];

// let productTax = products.map((elem)=>{
//     return {
//         Name: elem.name,
//         Price: elem.price * 1.17
//     }
// })
// console.log(productTax);


// task 5 
// let fruits: string[] = ["mango", "banana", "apple"];

// let indexOfFruits = fruits.map((elem , i)=>{
//     return i+elem
// });
// console.log(indexOfFruits);

// Filter 

// task 1 

// let num = [1, 2, 3, 4, 5, 6, 7, 8];

// let nums = num.filter((elem)=>{
//     return elem % 2 === 0
// });
// console.log(nums);

// task 2 

// let fruit = ["cat", "mango", "hi", "banana", "ok", "apple"];
// let fruits = fruit.filter((elem)=>{
//     return elem.length > 4
// });
// console.log(fruits);



// task 3

// let user = [
//   { name: "Ali",   age: 15 },
//   { name: "Sara",  age: 22 },
//   { name: "Usman", age: 17 },
//   { name: "Hina",  age: 25 },
// ];

// let users = user.filter((elem)=>{
//     return elem.age > 18
// });
// console.log(users);

// task 4 

// const products = [
//   { name: "Chai",      price: 50  },
//   { name: "Laptop",    price: 150000 },
//   { name: "Biscuit",   price: 30  },
//   { name: "Phone",     price: 80000 },
//   { name: "Samosa",    price: 40  },
// ];

// let product = products.filter((elem)=> {return elem.price > 100}).map((elem)=>{return elem.name})
// console.log(product);

// task 5 

// const names: string[] = ["Ali", "Fatima", "Bilal", "Alina", "Hamza"];
// let result = names.filter((name)=>{
//     return name.toLowerCase().includes(`ali`)
// })

// console.log(result);

// reduce 

// task 1 

// const nums: number[] = [10, 20, 30, 40, 50];

// let result = nums.reduce((total , currentval)=>{
//     console.log(`total: ${total} currentval: ${currentval}`);
    
//     return currentval + total
// },0);

// console.log(result);

// task 2 

// const nums: number[] = [3, 7, 2, 9, 4, 1];

// let result = nums.reduce((total,currentval)=>{ return total < currentval ? currentval: total},0)

// console.log(result);

//  task 3




// const products = [
//   { name: "Chai",    price: 100 },
//   { name: "Biscuit", price: 50  },
//   { name: "Samosa",  price: 30  },
// ];

// let result = products.reduce((total , currentval)=>{
//     return total + currentval.price
// },0)
// console.log(result);


// task 5

// const words: string[] = ["Mera", "naam", "Ali", "hai"];
// let result = words.reduce((total , elem , index)=>{
//     return index == 0 ? elem: `${total} ${elem}`
    
// },``)

// console.log(result);


// task 1 

// const nums: number[] = [10, 20, 30, 40, 50];
// let result = nums.reduce((sum , elem)=>{
//     return sum + elem
// },0)
// console.log(result);


// task 2 

// const nums: number[] = [3, 7, 2, 9, 4, 1,124];
// let result = nums.reduce((sum , elem)=>{
//     return sum < elem ? elem: sum
// },0)
// console.log(result);

// task 3 
// const products = [
//   { name: "Chai",    price: 100 },
//   { name: "Biscuit", price: 50  },
//   { name: "Samosa",  price: 30  },
// ];
// let result = products.reduce((sum,product)=>{
//     return sum + product.price
// },0)

// console.log(result);

// task 4 

// const words: string[] = ["Mera", "naam", "Ali", "hai"];
// let result = words.reduce((sum , word , index)=>{
//     return index == 0 ? word: `${sum} ${word}`
// }, "")

// console.log(result);

// Task 5 

// const products = [
//   { name: "Chai",    price: 100 },
//   { name: "Biscuit", price: 30  },
//   { name: "Samosa",  price: 50  },
//   { name: "Juice",   price: 20  },
//   { name: "Burger",  price: 200 },
// ];
// const totalBill: number = products
//   .filter((product) => product.price > 40)                 // Price > 40 wale products filter kiye
//   .map((product) => product.price * 0.9)                   // 10% discount lagaya (baki bacha 90%)
//   .reduce((sum, discountedPrice) => sum + discountedPrice, 0); // Sab discounted prices ka total nikala

// console.log(totalBill);



// task 1 

// const nums: number[] = [10, 20, 30, 40, 50];

// let result = nums.reduce((sum , elem)=>{
//     return sum + elem
// }, 0)

// console.log(result);

// // task 2 
// const nums: number[] = [3, 7, 2, 9, 4, 1];

// let result = nums.reduce((sum,biggest)=>{
//     return sum > biggest ? sum: biggest
// },0)
// console.log(result);

// task 3 
// const products = [
//   { name: "Chai",    price: 100 },
//   { name: "Biscuit", price: 50  },
//   { name: "Samosa",  price: 30  },
// ];

// let result = products.reduce((sum , total)=>{
//     return total.price + sum
// },0)

// console.log(result);

// task 4

// const words: string[] = ["Mera", "naam", "Ali", "hai"];

// let result = words.reduce((sum , word, index)=>{
//     return index == 0 ? word:`${sum} ${word}`
// },``)
// console.log(result);

// task 5 

// const products = [
//   { name: "Chai",    price: 100 },
//   { name: "Biscuit", price: 30  },
//   { name: "Samosa",  price: 50  },
//   { name: "Juice",   price: 20  },
//   { name: "Burger",  price: 200 },
// ];

// let result = products.filter((product)=>{
//     return product.price > 40
// }).map((product)=>{
    
//     return {
//         name: product.name,
//         price: product.price * 0.9
//     }
// }).reduce((sum, product) => {
//     return sum + product.price
// },0)
    
// console.log(result);


// again tasks 
// task 1 
// const nums: number[] = [10, 20, 30, 40, 50];
// let result = nums.reduce((sum,elem)=>{
//     return sum + elem
// },0)

// console.log(result);

// task 2 

// const nums: number[] = [3, 7, 2, 9, 4, 1];
// let result = nums.reduce((sum , highest )=>{
//     return sum > highest ? sum : highest
// },0)

// console.log(result);


// task 3 
// const products = [
//   { name: "Chai",    price: 100 },
//   { name: "Biscuit", price: 50  },
//   { name: "Samosa",  price: 30  },
// ];
// let result = products.reduce((sum,product)=>{
//     return product.price + sum
// },0)

// console.log(result);

// task 4 
// const words: string[] = ["Mera", "naam", "Ali", "hai"];
// let result = words.reduce((sum, word)=>{
//     return sum + ` ` + word
// },``)

// console.log(result);

// task 5 

// const products = [
//   { name: "Chai",    price: 100 },
//   { name: "Biscuit", price: 30  },
//   { name: "Samosa",  price: 50  },
//   { name: "Juice",   price: 20  },
//   { name: "Burger",  price: 200 },
// ];

// let result = products.filter((p)=>{
//     return p.price > 40
// }).map((p)=>{
//     return p.price * 0.9
// }).reduce((sum , p)=>{
//     return sum + p
// })

// console.log(result);

























































































// Objects 

// let object = {
//     name: `Abdullah`,
//     age: 17,
//     city: `Jhang city`
// }

// console.log(object);

// object 2
// const car = {
//     brand:`Honda`,
//     model: `Civic Type-R`,
//     year: 2026
// }
// console.log(car.model);

// object 3
// const student = {
//     Name:`Abdullah - falak`,
//     age:`27`,
//     Marks: 50
// }
// student.Marks +=  10
// console.log(student.Marks);

// task 4 
// const mobile = {
//     brand: `Apple`,
//     price: 70000
// }
// if(mobile.price > 50000){
//     console.log(`Expensive`);
// }else{
//     console.log(`Affordable`);   
// }

// object 5
// let book:{Title:string , Aurthor:string, pages:number} = {
//     Title: `The Six Pillar's Esteem`,
//     Aurthor: `Nathaniel Branden`,
//     pages: 348
// }

// console.log(`Book Title:`,book.Title);
// console.log(`Book Aurthor:`, book.Aurthor);
// console.log(`Total Pages:`, book.pages);

// objects with loop

// task 6 

// let student = [{
//     Name: `abdullah`,
//     Class: 8,
//     RollNo: 512830
// },{
//     Name: `abdullah Falak`,
//     Class: 8,
//     RollNo: 5128
// },{
//     Name: `Abdul-Rehman`,
//     Class: 8,
//     RollNo: 3254
// },{
//     Name: `Husnain`,
//     Class: 8,
//     RollNo: 453
// }]

// for(let i = 0 ; i < student.length; i++){
//     console.log(student[i].Name);
    
// }



// task 7

// let products:{Name:string , Price:number}[]  = [{
//     Name: `Sting`,
//     Price: 200
// },{
//     Name: `coca-cola`,
//     Price: 210
// },{
//     Name: `Fanta`,
//     Price: 250
// },{
//     Name: `Speaker`,
//     Price: 1300
// }]

// for(let i= 0 ; i < products.length; i++){
//     console.log(`Price is:`,products[i].Price);
    
// }

// task 8 
// interface Employee {
//   age: number;
//   Name: string;
//   Id: number;
// }


// const Employees:Employee[] = [{
//     Name: `saif`,
//     age: 20,
//     Id:5236
// },{
//     Name: `saif`,
//     age: 20,
//     Id:457
// },{
//     Name: `saif`,
//     age: 20,
//     Id:578
// },{
//     Name: `saif`,
//     age: 20,
//     Id:514
// }]

// let Total:number = 0;
// for(const Employee of Employees){
//         Total++
// }
// console.log(Total);

// task 9
// total of student age

// let student = [{
//     Name: `abdullah`,
//     age: 25,
//     Class: 8,
//     RollNo: 512830
// },{
//     Name: `abdullah Falak`,
//     Class: 8,
//     age: 27,
//     RollNo: 5128
// },{
//     Name: `Abdul-Rehman`,
//     Class: 8,
//     age: 20,
//     RollNo: 3254
// },{
//     Name: `Husnain`,
//     Class: 8,
//     age: 23,
//     RollNo: 453
// }]

    
//     let total:number = 0

//     for(let i = 0 ; i < student.length; i++){
//         total += student[i].age
//     }     
  
//     console.log(`Total Age is:`, total);
    
// task 10 

// let cars:{Brand:string,model:string,year:number}[] = [{
//     Brand: `Toyota`,
//     model: `Supra`,
//     year:2000
// },{
//     Brand: `Mazda`,
//     model: `RX-7`,
//     year:1999
// },{
//     Brand: `KIA`,
//     model: `Suportage`,
//     year:2025
// },{
//     Brand: `Mitsubishi`,
//     model: `Pajero-Evo`,
//     year:2000
// },{
//     Brand: `Mitsibishi`,
//     model: `Lancer-Evo`,
//     year:2000
// }]
// for(let i = 0; i < cars.length; i++){
//     console.log(`Car Brand Name is`, cars[i].Brand);
    
// }
    
    






















































































































// function highest(arr:number[]) {
//     if(arr.length === 0){return undefined};
//     let max:number = arr[0];
//     let i:number = 0;
//     while(i < arr.length){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//         i++
//     }
//     return max
// }

// let arr:number[] = [24,235,54,45745,54425,341]
// let result = highest(arr)
// console.log(result);

// function highest(arr:number[]) {
// if(arr.length === 0){return undefined}
// let max:number = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }

//     return max
// }

// let arr:number[] = [2,5,6,64,68598,4398987,90,80,60]
// let result = highest(arr)

// console.log(result);
// // finding the highest number in array
// function highest(arr:number[]) {
    //     if(arr.length === 0){return undefined}
    
    //     let max:number = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
        

//     }
// return max
    
// }
// let arr:number[] = [23,2,555,90292];
// let result = highest(arr);

// console.log(result);


// // if(age >= 18){
// mix tasks
// task 1 
// let age:number = 17;
    //     console.log(`Adult`);
    
// }else{
//     console.log(`minor`);
    
// }

// task 2
// function Highest(a:number,b:number){
//     if(a > b){
//         return a
//     }else{
//         return b
//     }
// }
// console.log(Highest(10,11));


// task 3

// for(let i = 1; i <= 10; i++){
//     console.log(i);
    
// }

// task 4
// only even number 
// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i);
        
//     }
// }

// task 5
// only odd number 
// for(let i = 1; i <= 20; i++){
//     if(i % 2 != 0){
//         console.log(i);
        
//     }
// }

// task 6
// sum from 1 to 100 number 
// for(let i = 1; i < 100; i++){
//     let sum:number = i + i
//     console.log(sum);
    

// }

// task 7
// for(let i = 1; i <= 10; i++){
//     let multiply:number = 12 * i
//     console.log(`12 x ${i}=`, multiply);
    
// }

// task 8
// let i:number = 50;
// let count:number = 2
// if(i / count == 25){
//     console.log(`There is 25 Even Numbers from 1 to 50`);
// }

// task 9 
// sum of all numbers of array
// let numbers = [10, 20, 30, 40, 50];
// let sum:number = 0;
// for(const nums of numbers){
//     sum += nums
// }
// console.log(sum);

// task 10 
// finding the biggest number in this array 
// function highest(arr:number[]){
//     if(arr.length === 0) {return undefined}
//     let max:number = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }

//     return max
// }

// let arr = [10, 20, 30, 40, 50];
// const result = highest(arr)

// console.log(result);




























// Mix tasks
// // task 1
// function Checker(i:number){
//     if(i % 2 == 0){
//         return `even`
//     }else{
//         return `odd`
//     }
// }
// console.log(Checker(3));

//task 2
// how many positive,negitive,zero numbers are in array
// let arr:number[] = [-2,3,4,-5,-6,-7,0,0,0]

// let positive:number  = 0;
// let negitive:number = 0;
// let zero:number = 0;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         positive++
//     }else if(arr[i] < 0){
//         negitive++
//     }else{
//         zero++
//     }
// }

// console.log(`Positive Numbers :`,positive);
// console.log(`Negitive Numbers :`,negitive);
// console.log(`Zero Numbers :`, zero);
///////////////////

// task 3
// finding largest number in array
// function highest(arr:number[]){
//     if(arr.length === 0) {return undefined}
//     let max:number = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }

//     return max
// }

// let arr:number[] = [2,256,235,3204,80,93]
// const result = highest(arr)

// console.log(result);

// task 4
// finding lowst number

// function lowest(arr:number[]){
//     if(arr.length === 0) {return undefined}
//     let low:number = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < low){
//             low = arr[i]
//         }
//     }

//     return low
// }

// let arr:number[] = [2,256,235,3204,80,93]
// const result = lowest(arr)

// console.log(result);

// task 5
// sum of all array element

// let arr:number[] =[2,3,4,6,7,77,888,999]
// let num:number = 0;
// for(const nums of arr){
//         num += nums

// }

// console.log(`sum of array all element:`,num);
























// FOR DO WHILE LOOPS



// // let sum:number = 0;
// let list:number[] = []
// for (let index = 1; index < 100; index++) {
//     if(index % 2 == 0){
//         // sum = sum + index
//         list.push(index)
//     }   
// }
// console.log(`list`, list);

//task 1
// let arr:number[] = []
// for (let index = 1; index <= 20; index++) {
    
//     console.log(arr.push(index));
    
// }
// task 2
// let i:number = 20
// while(i>0){
//     console.log(i);
//     i--
    
// }

// task 3
// let num:number = 0;
// do{
//     num++
//     console.log(num);
    
// }while(num < 10 )


// task4
// for(let i = 1; i < 50;i++){
//     if(i % 2 == 0){
//         console.log(i);
        
//     }
// }

// task 5
// for(let i = 1; i < 50;i++){
//     if(i % 2 != 0){
//         console.log(i);
        
//     }
// }


// task 6
// for(let i = 1; i <= 10; i++){
//     let result:number = 7 * i;
//     console.log(`7 x ${i}`, result);
    
// }

// task 7
// let i:number = 1;
// while(i<10){
//     let result:number = 12 * i
//     console.log(`12 x ${i}=`,result);
//     i++
    
// }

// task 8
// let i:number = 1;
// do{
//     let result:number = 15 * i;
//     console.log(`15 x ${i}=`,result);
//     i++
// }while(i<=10)

//task 9

// let sum:number = 0
// for (let index = 1; index <= 100; index++) {

//     sum = sum + index
//     console.log(sum);
// }

// task 10

// let i:number = 1;
// while(i <= 100){
//     if(i % 2 == 0){
//         console.log(`Even number is =`,i);
        
//     }
//     i++
// }









// let names:string[] = [`ahmed`,`sye`,`falkii`, `zubair`]
// let check = ()=>{

//     let result:boolean ;

//     if (names.includes(`syed`)){
//         result = true;
//         return result;
//     }else{
//         result = false;
//         return result
//     }

// }


// let names:string[] = [`ahmed`,`syed`,`falkii`, `shagufta`] 
// let names:string[] = [`ahmed`,`syed`,`falkii`, `shagufta`] 
// let nums:number[] = [0,9,8,7,6,5,4,3,2,1]

// let names:string[] = ["Ali", "Ahmed", "Sara", "Usman"];

// names.unshift(`zain`);

// names.pop();
// ///////////////// checked sara exsit or Not
// if(names.includes(`Sara`)){
//     console.log(`yes`);
    
// }else{
//     console.log(`False`);
    
// }

// // names.slice(1,2)
// names.reverse()

// console.log(names.slice(0,2));

// let nums:number = [1,2,3];

// const juice = kaacheAam.map((aam,i) => i +aam + " ka juice");
// // juice = ["aam1 ka juice", "aam2 ka juice", "aam3 ka juice", ...]

// console.log(juice);

// let i:number = 1
// while(i <= 0){
//     console.log(i);
//     i += 2
// }

// let i:number = 1
// while(i <= 10){
//     let result:number = 5 * i
//     console.log(`5 x`+ i , result);
//     i += 1
    
// }
///////////


// let index:number = 1;
// let result:number = --index + --index;
// console.log(`index=` , index);
// console.log(`result =`, result);




// let i:number = 1;

// while(i <= 10){
//     let result:number = 2 * i;
//     console.log(`2x`+ i ,`${result}` );
//     i++
    
// }











// let i:number = 1;

// while(i <= 10){
//     let result:number = 10 * i;
//     console.log(`10 x`+ i , result);
//     i++
    
// }

// let i:number = 1
// while (i <= 50){
//     let result:number = i + i;
//     console.log(`${i}+${i}=${result}`);
//     i++
    
// }










// let i:number = 2;
// while(i <= 100){
//     console.log(`Even number =`, i);
//     i += 2
    
// }










// let i:number = 1;
// while(i <=100){
//     console.log(`odd Numbers =`, i);
//     i += 2
// }










// let i:number = 0;
// while(i <= 30){
//     i += 1
//     console.log(`Hello = ` + i);
    
// }

// let names:string[] = [`nano banana`,`claude`,`ai`,`lindy`,`fuck chatgpt`];
// let i:number= 0;
// while(i <1){
//     let newnames = names.map((newname)=>newname.toUpperCase());
//     console.log(newnames);
//     i++
// }










// let num:number[] = [2,3,4,5,6,7,8,9,10]
// let i:number = 0
// while(i <1){
//     let newNum = num.map((elem)=> elem + elem);
//     console.log(newNum);
//     i++
    
// }

// let arr:number [] = [1,2,3,4,5,6,7,8,9,0]
// let i:number = 0;
// while(i < 1){
//     console.log(arr.length);
//     i++
// }


// let arr:string [] = [`AI`,`CHAT-GPT`,`CLAUDE`,`LINDY`];
// let i:number = 0;
// while(i < 1){
//     let newArr = arr.map((elem)=> elem.length)
//     console.log(newArr);
//     i++
    
// }


// let i:number = 0;
// while(i <= 50){
//     if(i % 3 === 1 || i % 5 === 1){
//         console.log(i);
//     }
//     i++
// }

// let i:number = 1;
// while(i < 100){
//     if(i % 5 === 0){
//         console.log(i);
        
//     }
//     i++
// }

// let fruits:string[] = [`nothing`,`watermelon`,`banana`,`pine-apple`,`apple`]
// fruits.splice(2,1,`mango`)
// console.log(fruits);


// let shopingcart:string[] =[`a`,`b`,`c`,`d`]
// shopingcart.splice(1,2,`x`,`y`)
// console.log(shopingcart);


// let song:string[] = [`song1`,`song2`,`song3`,`song4`,`song5`]
// song.splice(0,1)
// song.splice(2,1,`replaced`)
// song.splice(5,0,`replaced2`)
// console.log(song);

// let password:string = `Abdullah`
// while(password ===`wrong password`){
//     console.log(`wrong password`);
//     password = `Abdullah`
    
// }

//////////////////////////
/////////////////
//////////////

// task 1
// let i:number = 0
// while(i < 10){
//     console.log(i);
//     i++
    
// }
// // task 2
// let i1:number = 10
// while(i1 > 0){
//     console.log(i1);
//     i1--
    
// }
// // task 3 
// let i2:number = 0
// while(i2 <= 20){
//     console.log(i2);
//     i2 += 2
    
// }
// // task4
// let i3:number = 1
// while(i3 <= 20){
//     console.log(i3);
//     i3 += 2
    
// }
// // task 5
// let i4:number = 0
// while(i4 <= 10){
//     console.log(i * i);
//     i4 += 1
    
// }
// // task6
// let i5:number = 1
// while(i5 <= 10){
//     let result:number = 5 * i5
//     console.log(`5 x`+ i5 , result);
//     i5 += 1
    
// }
// // task 7
// let i6:number = 1;

// while(i6 <= 10){
//     let result:number = 10 * i6;
//     console.log(`10 x`+ i6 , result);
//     i6++
    
// }
// // task  8

// let i7:number = 1
// while (i7 <= 50){
//     let result:number = i7 + i7;
//     console.log(`${i7}+${i7}=${result}`);
//     i7++
    
// }
// // task9
// let i8:number = 2;
// while(i8 <= 100){
//     console.log(`Even number =`, i8);
//     i8 += 2
    
// }
// // task 10 
// let i9:number = 0;
// while(i9 <= 30){
//     i9 += 1
//     console.log(`Hello = ` + i9);
    
// }
// // task 11 
// let names1:string[] = [`NANO BANANA`,`CLAUDE`,`AI`,`LINDY`,`CHAT-GPT`];
// let i10:number= 0;
// while(i10 <1){
//     let newnames = names1.map((newname)=>newname.length);
//     console.log(newnames);
    
//     i10++
// }
// // task 12
// let names11:string[] = [`nano banana`,`claude`,`ai`,`lindy`,`fuck chatgpt`];
// let i11:number= 0;
// while(i11 <1){
//     let newnames = names11.map((newname)=>newname.toUpperCase());
//     console.log(newnames);
//     i11++
// }
// // task 14
// let arr1:number [] = [1,2,3,4,5,6,7,8,9,0]
// let i12:number = 0;
// while(i12 < 1){
//     console.log(arr1.length);
//     i12++
// }
// // task 15

// let arr2:string [] = [`AI`,`CHAT-GPT`,`CLAUDE`,`LINDY`];
// let i13:number = 0;
// while(i13 < 1){
//     let newArr = arr2.map((elem)=> elem.length)
//     console.log(newArr);
//     i13++
    
// }

// // task 16
// let i14:number = 1;
// while(i14 < 100){
//     if(i14 % 5 === 0){
//         console.log(i14);
        
//     }
//     i14++
// }
// // task 17
// let i15:number = 0;
// while(i15 <= 50){
//     if(i15 % 3 === 1 || i15 % 5 === 1){
//         console.log(i);
//     }
//     i15++
// }