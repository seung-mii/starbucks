// SEARCH
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

// BADGES
const badgeEl = document.querySelector('header .badges');

// _.throttle(함수, 시간);
window.addEventListener('scroll', _.throttle(function() {
  if(window.scrollY > 500) { 
    // 배지 숨기기
    // gsap : JS 애니메이션을 처리하는 라이브러리
    // gsap.to(적용시킬 해당 요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else { 
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle 없이 하면 화면이 스크롤 한 번할 때 몇 십번이나 함수가 실행됨
// 300 : 0.3s를 의미 -> 일정 시간에 한 번씩만 함수가 실행되도록 하여 여러 번 우르르 실행되는 것을 방지

// FADE
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, 
    // 0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
})