// const {handleError, two} = require('./Import_export') 

// es6 

import two from './Import_export.js'


two()

async function getData() {
  try {
    // undefined.find(); 
    const emailError =  new Error('Email is all ready exist')
    throw emailError 

  } catch (error) {
    // console.log(error);
    // handleError(error); 
  }
}

getData();

/* function handleError(error) {
  const {name, message, stack } = error ;
  console.log(name, message);


// logger.error({
//     name, message, stack
// })
// console.log('Internaly server error');

} */


// module.exports = handleError; 

console.log("ok done ");
