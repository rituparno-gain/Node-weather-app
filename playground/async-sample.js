console.log('Starting app.');

setTimeout(() => {
  console.log('Inside 1st timeout of 2 sec.');
},2000);

setTimeout(() => {
  console.log('Inside 2nd timeout of 0 ms.');
},0);

console.log('Finishing up.');
