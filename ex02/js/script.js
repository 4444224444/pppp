//1. HTML DOM엘리먼트를 불러오기
const links = document.querySelectorAll(".link-tree li")

//2. 랜덤 포지션 값을 구하기
// console.log(Math.round(random() * (window.innerWidth - 0) + 0));

//3. HTML DOM엘리먼트 스타일에 랜덤 포지션 적용하기
links[0].style.left = `${Math.round(Math.random() * (window.innerWidth - 0) + 0)}`