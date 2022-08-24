// ________________________________________
// Synchronous vs Asynchronous Node 


/* console.log('i ma Synchronous ');
let value = 0;
setInterval(() => {
    value++ 
    if(value == 10){
        value = 0
    }

console.log(value , ' * * *  ', 'hello I am ASynchronous');   
}, 3000);

console.log('I am third line Synchronous');
 */ 
// / Basic 


/* I am alone  */
// setTimeout(()=> console.log('I am ASynchronous'),  3000)

console.log('I am Synchronous 1');
setTimeout(()=> {
    const user = {id:1 }
    console.log(user);

    setTimeout( () => {
        const product = [{}, {}, {}] 
        console.log(product);  
        setTimeout(() => {
            const price = []
            console.log(price);
        }, 1000)
    }, 2000)
}, 4000) 
console.log('I am Synchronous 2');
console.log('I am Synchronous 3');

