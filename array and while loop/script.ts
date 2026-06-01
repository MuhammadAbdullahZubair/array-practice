
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

let i:number = 1;
while(i <= 100){
    if(i % 2 == 0){
        console.log(`Even number is =`,i);
        
    }
    i++
}









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