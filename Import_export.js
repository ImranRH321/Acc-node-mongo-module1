function handleError(error) {
  const { name, message, stack } = error;
  console.log(name, message);

  // logger.error({
  //     name, message, stack
  // })
  // console.log('Internaly server error');
}

// module.exports = handleError; 

export function two () {
    console.log('This is two ');
}

// module.exports = handleError; 
// module.exports = one; 


// module.exports.person = [{}, {}, {}]

// module.exports = {
//     handleError,  two 
// }  



export default two 
