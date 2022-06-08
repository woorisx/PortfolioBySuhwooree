// // 비동기식 처리( 기다리지 않고 바로 싫행됨)
// const work = (callback) => {
//   setTimeout(() => {
//     const start = Date.now();
//     let count = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       count += 1;
//     }
//     const end = Date.now();
//     console.log(end - start + "ms");
//     callback(end - start);
//   }, 0);
// };

// console.log("작업시작");
// work((ms) => {
//   console.log("작업이 끝났어요.");
//   console.log(ms + "ms초 걸림");
// });
// console.log("작업 끝");

const url =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
  });
