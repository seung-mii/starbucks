const searchEl = document.querySelector('.search');
// document = HTML 그 자체라고 생각
const searchInputEl = searchEl.querySelector('input');
// searchEl.querySelector('input') = document.querySelector('.search input')
// 전자와 다르게 후자는 .search 클래스들을 찾고 또 input 요소를 찾는 코드이므로 
// 이미 .search 클래스 부분만 찾아놓은 searchEl를 활용하여 구현 

searchEl.addEventListener('click', function () {
  // Logic ..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); 
  // 속성을 지정하는 데 사용하는 메소드
})

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); 
})