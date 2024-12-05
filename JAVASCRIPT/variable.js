// // for loop
// counter = 0;
// for(let i=1; i<20; i++){
//     if(i%2==0){
//         counter ++;
//     console.log("FIZZ");
//     }
// else {
//     console.log("BUZZ");
//     }
// }

// let count = 0
// for(let i = 1; i<100; i++){
//     if(i%2===0){
//         count++
//     }
// }
// console.log(`there are ${count} even numbers between 1 to 100`);

// function Name(name, age, soo){
//   console.log('my name is' + " " + name);
//   console.log('i am' + " " + age + " " + ' years old');
//   console.log('i am from' + " " + soo + " "+ 'state, Nigeria');
// }
// Name('Tobi', 20, 'Ogun')

// let count = 0
// function Number(a, y){
//     for(i=0; i<=y; i++)

//  console.log(a*i);
//  }
// Number(2, 10)


// function multiplicationtable(num1, num2){
//     for (let index = 0; index<=num2; index++)
//         console.log(`${num1} X ${index} = ${num1*index}`);
        
// }
// multiplicationtable(2, 10)



// alphabet = ['a','b','c','d', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// function reverse(alpha) {
//         rIndex = 25 - alphabet.indexOf(alpha)
//         return alphabet[rIndex]
//     }
   
// function reverseWord(word){
//     wordoutput=""
//     for (const element of word){
//         if(alphabet.includes(element)){
//             wordoutput+=reverse(element)
//         }
//         else wordoutput += element
//     }
//     return wordoutput;
// }
// console.log(reverseWord("sld ziv blf"));

// console.log(reverseWord("how are you"));



// number = 0;
// for (const element of `oladipupo`) {
//     if(element=="p") number++
//     }
// console.log(number);

// number = 0;
// for (const element of `oladipupo`) {
//      number++
//     }
// console.log(number);

// number = 0;
// for (const element of `missisipi`) {
//      number++
//     }
// console.log(number);
// count = 0
// setInterval(() => {
//     count ++
//     console.log(count);
    
// }, 1000);

// let name;
// setTimeout(() => {
//     name = "Tobi"
// }, 5000);

// setInterval(() => {
//     console.log(name);
    
// }, 1000);

// let p = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("Tobi")
//     }, 500);
// })
// console.log();


// let page = document.getElementsByClassName('page')

// let newName = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Oluwatobi")
//     }, 3000);
// })

// const greeting = async () => {
//     page[0].textContent = "...loading"
//     page[0].style = "text-align:center"
//     let yourName = await newName;
//     page[0].textContent = "welcome " + yourName;
// }
// console.log(greeting);


// const req = new XMLHttpRequest()

// req.open("Get","https://catfact.ninja/facts?limit=15&max_length=50")
// req.send()
// console.log(req.response);
// req.responseType ="json"
// req.onload = ()=> console.log(req.response);
// ;

// const getFacts = new Promise((resolve, reject) => {
//     req.open("Get", "https://catfact.ninja/facts?limit=15&max_length=50")
//     req.send()
//     req.responseType = "json"
//     req.onload = () => resolve(req.response);
//     req.onerror = () => reject(req.statusText)

// })

// getFacts
// .then(result=>result.data
// )
// .then(result=>console.log(result)
// ).catch(error=>console.log(error)
// )

let a, b, c;
a = "John";
b = "Doe";
c = a + " " + b;
console.log(c);
