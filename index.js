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
    li[i].innerHTML = parseInt(i, n);
  }
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list');
  const firstList = rankedList[0]
  const secondList = rankedList[2]
  let children = firstList.children
  let start = 1;
  
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = parseInt(i, n) + start
  }
  
  children = secondList.children
  start = 12;
  
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = parseInt(i, n) + start
  }
  return children.innerHTML;
}

/* <ul class="ranked-list">
        <li>1</li>
        <li>2</li>
      <ul class="ranked-list">
        <li>12</li>
        <li>11</li>
        <li>10</li>

      let children = firstList.children
      let start = 1
      for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).to.equal(start + i + 3)
      }

      children = secondList.children
      start = 12

      for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).to.equal(start - i + 3)
      }
}*/