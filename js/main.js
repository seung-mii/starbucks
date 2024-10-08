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
const toTopEl = document.querySelector('#to-top');

// _.throttle(함수, 시간);
window.addEventListener('scroll', _.throttle(function() {
  if(window.scrollY > 500) { 
    // gsap : JS 애니메이션을 처리하는 라이브러리
    // gsap.to(적용시킬 해당 요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, { // 배지 숨기기
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, .2, { // 스크롤 버튼 보이기
      x: 0
    });
  } else { 
    gsap.to(badgeEl, .6, { // 배지 보이기
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, .2, { // 스크롤 버튼 숨기기
      x: 100
    });
  }
}, 300));
// _.throttle 없이 하면 화면이 스크롤 한 번할 때 몇 십번이나 함수가 실행됨
// 300 : 0.3s를 의미 -> 일정 시간에 한 번씩만 함수가 실행되도록 하여 여러 번 우르르 실행되는 것을 방지

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, { // 페이지 위치를 최상단으로 0.7초 동안 이동
    scrollTo: 0
  })
})

// FADE
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // dalay: gsap 효과임 
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
})

// SWIPER
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,     // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,     // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소
    clickable: true     // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});

// 이미 span 태그는 인라인 요소라 수평정렬이 default이므로 수평정렬 요소를 따로 설정 안해줘도 됨 
new Swiper('.awards .swiper-container', {
  autoplay: true,   // 자동 재생 여부
  loop: true,       // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { 
    prevEl: '.awards .swiper-prev', 
    nextEl: '.awards .swiper-next' 
  }
})

// PROMOTION
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion)  // 숨김 처리
    promotionEl.classList.add('hide');
  else  // 보임 처리
    promotionEl.classList.remove('hide');
  
})

// FLOATING
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(적용시킬 해당 요소, 지속시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    // selector : 선택자, random(1.5, 2.5) : 애니메이션 동작 시간
    // 옵션들
    y: size,     // y축으로 얼마만큼 내려가느냐 
    repeat: -1,  // -1 이 무한반복 
    yoyo: true,  // 반복할 요소를 다시 돌아와서 다시 시작할 수 있도록 함
    ease: Power1.easeInOut,  // ease 함수를 통해 더 자연스럽고 원하는 움직임으로 제어 가능
    delay: random(0, delay)
  })
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 특정한 요소를 감시하는 옵션을 지정해주는 메소드 -> 메소드체이닝 형태
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 뷰포트의 0.8 지점에 해당 요소가 걸리면 setClassToggle() 메소드 실행
    })
    .setClassToggle(spyEl, 'show')       // 클래스 속성을 지정, Toggle(넣었다가 뺐다가)
    .addTo(new ScrollMagic.Controller()) // controller 내용 추가
})

// 올해가 몇 년도인지 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();