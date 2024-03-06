const usernameInput = document.querySelector('#username'); // 이름 가져오기
const idInput =document.querySelector('#userid'); // 전공 가져오기
const scoreInput = document.querySelector("#score"); // 점수 가져오기
const tbody = document.querySelector('tbody'); // tbody 가져오기
const btn = document.querySelector("form > button"); // '등록하기' 버튼 가져오기

//버튼을 클릭하면...
btn.addEventListener("click",(e)=>{
    e.preventDefault(); //버튼을 누르면 서버로 보내지 않는다.

    //이름,학번,점수중 하나라도 입력했으면 실행
    if( username.value && userid.value && score.value){
        
    //tr 요소 만들기
    const tr=document.createElement("tr")
    //tr안에서 쓸 이름td,전공td 요소 만들기
    const td_username=document.createElement("td");
    const td_userid=document.createElement("td");
    const td_score=document.createElement("td");
    //학점 td요소 만들기
    const td_avg=document.createElement("td");
    //td요소에 내용 넣기
    td_username.innerHTML=`${username.value}`;
    td_userid.innerHTML=`${userid.value}`;
    td_score.innerHTML=`${score.value}`;
    //학점 td요소에 내용 넣기
    let User_avg=score.value;
    if(User_avg>=90&& User_avg<=100){
        td_avg.innerHTML=`A학점`;
    }
    else if(User_avg>=80&& User_avg<90){
        td_avg.innerHTML=`B학점`;
    }

    else if(User_avg>=70&& User_avg<80){
        td_avg.innerHTML=`C학점`;
    }
    else if(User_avg>=60&& User_avg<70){
        td_avg.innerHTML=`D학점`;
    }
    else if(User_avg>=50&& User_avg<=60){
        td_avg.innerHTML=`F학점`;
    }
    else{
        alert("잘못된 점수입니다.");
        //연결 후 (이름/학번, 점수) 입력 값 초기화하기 
        username.value="";
        score.value="";
        userid.value="";   
        return;

    }

    //tr요소를 tbody요소에 연결하기
    tbody.appendChild(tr);
    //2개의 td요소를 tr요소에 연결하기
    tr.appendChild(td_username);
    tr.appendChild(td_userid);
    tr.appendChild(td_score);
    tr.appendChild(td_avg);
    //연결 후 (이름/학번, 점수) 입력 값 초기화하기 
    username.value="";
    score.value="";
    userid.value="";
}

else{
    //이름,학번,점수중 하나라도 입력하지 않으면...
        alert("모든 내용을 입력해주세요.");
    }

});

