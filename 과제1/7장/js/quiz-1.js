// HTML 요소를 가져오기
const usernameInput = document.getElementById('username');
const majorInput = document.getElementById('major');
const tbody = document.querySelector('#attendant tbody');
const form = document.querySelector('form');

// 폼 제출 이벤트 리스너 추가
form.addEventListener('submit', function (e) {
  e.preventDefault(); // 폼 제출의 기본 동작 막기

  // 입력된 이름과 전공 가져오기
  const username = usernameInput.value;
  const major = majorInput.value;

  // 빈 값 확인
  if (!username || !major) {
    alert('이름과 전공을 모두 입력하세요.');
    return;
  }

  // 새로운 <tr> 요소 생성
  const newRow = document.createElement('tr');

  // <td> 요소들을 생성하고 값을 설정
  const nameCell = document.createElement('td');
  nameCell.textContent = username;
  const majorCell = document.createElement('td');
  majorCell.textContent = major;

  // <td> 요소들을 <tr>에 추가
  newRow.appendChild(nameCell);
  newRow.appendChild(majorCell);

  // <tr> 요소를 <tbody>에 추가
  tbody.appendChild(newRow);

  // 입력 필드 초기화
  usernameInput.value = '';
  majorInput.value = '';
});