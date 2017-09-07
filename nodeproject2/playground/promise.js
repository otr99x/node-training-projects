var asyncAdd = (a,b) =>{
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }else{
        reject('Arguments must be numbers');
      }
    },1500);
  })
};

// asyncAdd(5,'2').then((res) => {
//   console.log(res);
//   return asyncAdd(res, 33);
// }, (error) => {
//   console.log(error);
// }).then((res) => {
//   console.log('success : ',res);
// }, (error) => {
//   console.log('error : ',error);
// });

asyncAdd(5,2).then((res) => {
  console.log(res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log(res);
}).catch((error) => {
  console.log(error);
});
