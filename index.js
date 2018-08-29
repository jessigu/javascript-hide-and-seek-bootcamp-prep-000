const getFirstSelector = selector => document.querySelector(selector);

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function deepestChild() {
  return document.getElementById('grand-node').querySelectorAll('div')[3];
}

function increaseRankBy(n) {
  const li = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML = parseInt(li[i].innerHTML) + n;
  }
}
