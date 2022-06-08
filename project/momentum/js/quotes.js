const quotes = [
  {
    quote:
      "우리가 괴물의 심연을 들여다본다면, 그 심연 또한 우리를 들여다보게 될 것이다.",
    author: "니체 - 선악을 넘어서",
  },
  {
    quote:
      "좋은 책이 있어도 읽지 못하는 사람은 그 책을 읽지 못하는 사람보다 나을것이 없다.",
    author: "마크 트웨인",
  },
  {
    quote: "사람은 자신의 진가를 깨닫지 못하면 스스로에게 만족할 수 없다.",
    author: "마크 트웨인",
  },
  {
    quote: "사랑이 없을때, 모든 일은 공허한 것이다.",
    author: "칼릴 지브란",
  },
  {
    quote: "한 나라의 가치는 결국 그 나라를 구성하고 있는 개인들의 가치이다.",
    author: "밀",
  },
];
const phrase = document.querySelector("#wrapper > .quote > span:nth-child(1)");
const author = document.querySelector("#wrapper > .quote > span:nth-child(2)");

const getRandomQuotes = () => {
  const num = Math.floor(Math.random() * 4);
  phrase.innerText = quotes[num].quote;
  author.innerText = quotes[num].author;
};

getRandomQuotes();
