/* Pending */

/* resolve */

/* reject */

/*
 console.log('I am  Synchronous -1 ');

const promise = new Promise((resolve, reject) => {
  const user = { id: 1, name: "kutob" };
  if (!user) {
    reject("I am Reject");
  } else {
    setTimeout(() => {
      resolve("I have done Successfull Data");
    }, 5000);
  }
});
console.log(promise);

promise.then(resolve => console.log(resolve)).catch(reject => console.log(reject));

console.log('I am  Synchronous -2 ');
 */




console.log("I am  Synchronous -1");

const myPromise = new Promise((resolve, reject) => {
  const user = { id: 1 };
  if (user) {
    setInterval(() => {
      resolve({ name: "jhon", age: 25 });
    }, 3000);
  } else {
    reject("I am Reject error ");
  }
});

const usersId = [1, 2, 3, 4, 5];
let userData = [];

for (let i = 0; i < usersId.length; i++) {
  const id = usersId[i];

  /*  setTimeout(()=> {
      userData.push(id)
     }, 1000) */
  //
  userData.push(myPromise);
}

// Multiple / data load Promise all method user / then/ data
Promise.all(userData).then(res => {
  console.log("userData ---> ", res);
});

console.log("I am  Synchronous  done  ");

myPromise.then(res => console.log("found then", res));
