// let arr=[5,10,15,20,25,30,35,40,50,40];
// let position=arr.indexOf(40);
// let positionLast=arr.lastIndexOf(40);
// console.log(position);
// console.log(positionLast);

// let numbers=[10,20,25,33,40,50];
// let found=numbers.find((number)=> number>33);
// console.log(found);

// let numbers=[10,20,25,33,40,50];
// let foundedIndex=numbers.findIndex((num)=> num>25);
// console.log(foundedIndex);

// let numbers=[10,20,25,33,40,50,70];
// let foundLast=numbers.findLast((num)=>num>40)
// console.log(foundLast);

// let numbers=[10,20,25,33,40,50,70];
// let foundedLastIndex=numbers.findLastIndex((num)=>num>50)
// console.log(foundedLastIndex);

// let fruits=["Apple","Banana","Mango"];
// let findFruit=fruits.includes("Apple");
// if(findFruit){
//     console.log("Var");
// }
// else{
//     console.log("Yoxdur");
// }

// let numbers=[10,20,25,33,40,50,70];
// let found=numbers.every((num)=>num>5);
// console.log(found);

// let numbers=[10,20,25,33,40,23,70];
// let found=numbers.some((num)=>num>40);
// console.log(found);

// let numbers=[10,20,25,33,40,23,70];
// numbers.forEach((number)=> console.log(number));

//! Task-1 //  Arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə
//! qalan elementlərin cəmini tapan function.
//  [2,1,3,4,6]     -> 9  
// function find (numbers){
//         let sum =0;
//         for (let i = 0; i < numbers.length; i++) {
//         if(numbers[i]>1 && numbers[i]<6)
//         sum+=numbers[i]
        
//      }
//      console.log(sum)
//      }
//      find([2,1,3,4,6]);

//? Task-3 Verilmis 47 ededinin array olub-olmadigini yoxlayin.
// let numbers=[12,32,43,54,65,34,54,47,35,60];
// let findNumber=numbers.includes(47);
// if(findNumber){
//     console.log("Var")
// }
// else{
//     console.log("Yoxdur");
// }


//! Task-4 Verilmis 35 ededinin array hansi indexde yerlesdiyini tapin.

// function customAt (arr,findIndex){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==findIndex){
//             console.log(i)
//         }
//     }
// }
// customAt([12,32,43,54,65,34,54,47,35,60],35);
