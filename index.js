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
const lis = document
  .getElementById("app")
  .querySelectorAll("ul.ranked-list li");
 
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString();
}*/