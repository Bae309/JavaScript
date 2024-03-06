const notiBox = document.getElementById('noti-box');
const button = document.getElementById('bttn');

button.addEventListener('click', function () {
  // 새로운 알림 요소 생성
  const newNoti = document.createElement('div');
  newNoti.classList.add('noti');
  newNoti.innerText = '알림 내용이 표시됩니다.';

  // 알림을 noti-box에 추가
  notiBox.appendChild(newNoti);

  // 3초 후에 알림을 삭제
  setTimeout(() => {
    notiBox.removeChild(newNoti);
  }, 3000);
});