function getFirstSelector (selector) {
  return document.querySelector('div#nested');
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

//parseInt?
function increaseRankBy(n) {
  const li = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML = i + n;
  }
  return li;
}

function deepestChild() {
  return document.getElementById('grand-node').querySelectorAll('div')[3];
}
