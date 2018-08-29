const getFirstSelector = selector => document.querySelector(selector);

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const li = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML = parseInt(i, n);
  }
}

function deepestChild() {
  return document.getElementById('grand-node').querySelectorAll('div')[3];
}


/*
<body>
    <main id="app">
      <ul class="unranked-list">
        <li>2</li>
        <li>5</li>
        <li>4</li>
      </ul>

      <ul class="ranked-list">
        <li>1</li>
        <li>2</li>
      </ul>

      <ul class="ranked-list">
        <li>12</li>
        <li>11</li>
        <li>10</li>
      </ul>

const lis = document
  .getElementById("app")
  .querySelectorAll("ul.ranked-list li");
 
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString();
}*/