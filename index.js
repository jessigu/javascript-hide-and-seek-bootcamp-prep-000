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
      <ul class="ranked-list">
        <li>1</li>
        <li>2</li>
      </ul>
      <ul class="ranked-list">
        <li>12</li>
        <li>11</li>
        <li>10</li>
      </ul>
      
      describe('increaseRankBy(n)', () => {
    it('increases ranks in .ranked-list by n', () => {
      increaseRankBy(3)

      const rankedLists = document.querySelectorAll('.ranked-list')
      const firstList = rankedLists[0]
      const secondList = rankedLists[1]

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