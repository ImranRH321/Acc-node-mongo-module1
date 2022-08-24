
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    },3000)
})    



async function getData () {
//  const res = [] 
 const res = await promise
}

getData()

// 

/* fetch('')
.then(res => res.json())
.then(data => console.log(data))
 */

const getUser = async  () => {
 const res = await fetch('')
 const data = await data.json()

 const res2 =  await fetch('https://www.goggle.com')
 const product = await res2.json() 
 console.log(product);
  
}

getUser()