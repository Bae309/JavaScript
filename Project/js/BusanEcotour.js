var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
var mapOption = {
    center: new kakao.maps.LatLng(35.08986, 128.9650319), // 지도의 중심좌표
    level: 8 // 지도의 확대 레벨
};

// 지도 생성
var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커 클러스터러 생성
var clusterer = new kakao.maps.MarkerClusterer({
    map: map,
    averageCenter: true,
    minLevel: 10
});

// 몰운대 위치 마커 생성
var marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(35.0417138, 128.9688264),
    title: '몰운대'
});

// 마커 클릭 시 인포윈도우 표시
var infowindow = new kakao.maps.InfoWindow({
    content: '<div style="padding:5px;font-size:0.9rem;">몰운대</div>'
});
kakao.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
});

// 두송반도 마커 생성
var marker2 = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(35.04499, 128.9984),
    title: '두송반도'
});

// 마커 클릭 시 인포윈도우 표시
var infowindow2 = new kakao.maps.InfoWindow({
    content: '<div style="padding:5px;font-size:0.9rem;">두송반도</div>'
});
kakao.maps.event.addListener(marker2, 'click', function () {
    infowindow2.open(map, marker2);
});

// 낙동강하구 에코센터 마커 생성
var marker3 = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(35.10462, 128.9465),
    title: '낙동강하구 에코센터'
});

// 마커 클릭 시 인포윈도우 표시
var infowindow3 = new kakao.maps.InfoWindow({
    content: '<div style="padding:5px;font-size:0.9rem;">낙동강하구 에코센터</div>'
});
kakao.maps.event.addListener(marker3, 'click', function () {
    infowindow3.open(map, marker3);
});


// 다대포해수욕장 소개 데이터(json)
const infoData = {
    title : "몰운대",
    addr: "부산광역시 사하구 몰운대1길 14",
    tel: "051-220-4127",
    telname: "다대포해변공원관리센터",
    summary: "약 8천만 년 전 백악기 말에 쌓인 하부다대포층과 그 후 부산지역 지각의 변형과정을 한눈에 볼 수 있는 명소입니다. 과거 ‘몰운도(沒雲島)’라는 섬이었으나 낙동강에서 공급된 모래가 쌓이면서 육지와 연결된 육계도의 독특한 지형을 나타냅니다. 다양한 단층과 단층암, 암맥, 광맥, 마그마성 및 쇄설성 암맥, 쳐트편, 사층리, 흔적화석, 과거 지진기록 등의 다양한 지질특성을 간직한 지질학의 교과서라 불릴만한 명소입니다.",
    website: "https://www.visitbusan.net/kr/index.do?menuCd=DOM_000000201001001000" + "\n" + "&uc_seq=366&lang_cd=ko",
    image: "http://tong.visitkorea.or.kr/cms/resource/95/2675495_image2_1.jpg"
};

// 두송반도 소개 데이터
var data2 = {
    addr: "부산광역시 사하구 다대동 일대",
    tel: "051-888-3636",
    telname: "부산광역시 환경보전과",
    title: "두송반도",
    summary: "공룡의 전성시대였던 백악기 말의 부산지역 지질의 모습을 한눈에 보여주는 으뜸 명소입니다. 특히 과거 지진이 기록된 다양한 산출 상태의 쇄설성 암맥과 고지진암이 절경이다. 퇴적층에서는 공룡알둥지와 파편화석이 나타나고, 이회암, 석화목, 환원점, 석회질고토양등의 흥미로운 지질특성들은 높은 학술적 가치를 가진다.",
    website: "http://www.busan.go.kr/geopark/index/",
    image: "http://tong.visitkorea.or.kr/cms/resource/68/2547068_image2_1.jpg"
};

// 낙동강하구 소개 데이터
var data3 = {
    addr: "부산광역시 사하구 낙동남로 1240",
    tel: "051-888-3636",
    telname: "부산광역시 환경보전과",
    title: "낙동강하구(을숙도)",
    summary: "낙동강이 남해바다와 만나 만들어진 현생 삼각주로 모래들이 쌓여 만들어진 사주, 사구, 석호 등 아름다운 지형의 명소들이 압권이다. 습지와 철새도래지 명소에는 독특하고 다양한 동식물들이 서식하며, 에코센터에서 아미산 전망대로 이어지는 지오트레일코스가 개발되어 있다.",
    website: "http://www.busan.go.kr/geopark/index/",
    image: "http://tong.visitkorea.or.kr/cms/resource/57/2547057_image2_1.jpg"
};

// 페이지에 정보 추가
function addInfoToPage(data, containerId) {
    var content = `
        <div class="info-card">
            <h1><strong></strong> ${data.title}</h1>
            <p><strong>주소:</strong> ${data.addr}</p>
            <p><strong>전화번호:</strong> ${data.tel} (${data.telname})</p>
            <p><strong>소개:</strong> ${data.summary}</p>
            <p><strong>웹사이트:</strong> <a href="${data.website}" target="_blank">${data.website}</a></p>
            <img src="${data.image}" alt="${data.title} 이미지" style="max-width: 100%; height: auto;">
        </div>
    `;

    // 정보를 표시할 div에 내용 추가
    var infoDiv = document.getElementById(containerId);
    infoDiv.innerHTML += content;
}

// 페이지에 정보 추가
addInfoToPage(infoData, 'infoContainer'); // 몰운대 정보 추가
addInfoToPage(data2, 'infoContainer'); // 두송반도 정보 추가
addInfoToPage(data3, 'infoContainer'); // 낙동강하구 정보 추가