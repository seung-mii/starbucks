var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* onYouTubeIframeAPIReady 함수 이름은 바꾸면 안됨 -> API에서 지정한 함수 이름이기 때문 */
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: "An6LvWQuj_8",   // 최초 재생할 유튜브 영상 ID
    /* 
      유튜브를 삽입하는 소스코드 복사를 사용하지 않고 아이디만 가져오는 이유 
      소스코드를 가져오면 영상이 잘 나오기는 하지만 
      음소거 처리나 연속재생 처리를 할 수 없고 무엇보다 제어를 할 수 없음 
    */
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true,     // 반복 재생 유무
      playlist: "An6LvWQuj_8" // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function(event) {
        event.target.mute()   // 음소거
        /* playVars에 음소거 이벤트를 지원해주지 않기 때문에 따로 events 처리함 */    
      }
    }
  });
}