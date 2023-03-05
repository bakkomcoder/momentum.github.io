const quotes = [
  {
    quote: "되든 안되든 일단 열심히 해본다. 결과에 대한 강박관념을 버린다.",
    author: "wi_see",
  },
  {
    quote:
      "일단 열심히 해보고 안 되도 실망하기 보단 '아님 말고' 하며 털어버리고 금방 새로운 걸 한다.",
    author: "wi_see",
  },
  {
    quote: "거창하지 않아도 꾸준히 좋은 습관을 유지하려고 부지런히 노력한다.",
    author: "wi_see",
  },
  {
    quote:
      "너무 잘하려고 하는 부담감을 갖지 말고, 서투르더라도 일단 해볼 것. 사람이 뭐라도 하면 무슨 일이라도 생긴다는 것",
    author: "wi_see",
  },
  {
    quote: "내가 지금 할 수 있는게 무엇인지를 생각해보고, 그 일을 할 것.",
    author: "wi_see",
  },
  {
    quote: "'성공'이라는 거창하고 막연한 목표보단 자신의 '성장'에 집중할 것.",
    author: "wi_see",
  },
  {
    quote:
      "감정에 굴하지 않고 참을 수만 있다면 즉각적인 반응을 지체하고 이성적으로 생각할 수 있게 된다.",
    author: "빅터 프랭큰",
  },
  {
    quote: "망가진 일상을 치유하는 유일한 방법은 행동하는 것이다.",
    author: "wi_see",
  },
  {
    quote:
      "우리는 늘 두려움과 욕망이라는 감정을 품고 산다. 중요한 건 그런 감정들을 자신에게 유리하게, 유용하게 사용하는 것이다.",
    author: "빅터 프랭큰",
  },
  {
    quote: "걱정을 치료하는 일은 건설적인 일에 몰두하는 것이다.",
    author: "데일 카네기",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
// author.innerText = todaysQuote.author;
