console.log(`${Date()}Starting app`);

setTimeout(() => {
  console.log(`${Date()}, inside of callback 2000`);
}, 2000);

setTimeout(() => {
  console.log(`inside zero timeout callback`)
}, 0);

console.log(`${Date()}Finishing up`);
;
