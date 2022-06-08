// let arr = [];
// //arr = ['A', 'B', 'C', 'D', 'E'];
// //for문을 이용해서 데이터를 입력.

// for (let i = 65; i < 70; i++) {
//   arr.push(String.fromCharCode(i));
// }
// const pos = arr.indexOf("C");
// arr.splice(pos, 2);
// console.log(arr);

// {id: 123, name:'A'}
let arr = [];

// [{id:65, name:'A'},{id:66, name:'B'},{id:67, name:'C'}...]

for (let i = 65; i < 70; i++) {
  const obj = {
    id: i,
    name: String.fromCharCode(i),
  };
  arr.push(obj);
}
// console.log(arr);
arr = arr.filter((obj) => {
  return obj.id !== 67;
});
// console.log(arr);

localStorage.setItem("value", arr);
