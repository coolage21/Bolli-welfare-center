 /*map*/
 var mapContainer = document.getElementById('map'), // 지도를 표시할 위치
 mapOption = {
   center: new kakao.maps.LatLng(35.84111552836307, 128.54315567094355), // 지도의 중심좌표
   level: 3 // 지도의 확대 레벨
 };
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
var markerPosition = new kakao.maps.LatLng(35.84111552836307, 128.54315567094355);// 마커 표시
var marker = new kakao.maps.Marker({
 position: markerPosition
});// 마커 생성
marker.setMap(map);// 마커가 지도 위에 표시되도록 설정

// map영역에 area태그의 alt에 대체텍스트 추가! 
let mapArea = document.querySelector('#map');
let area = mapArea.querySelector('area');
area.alt = '달서구본리종합사회복지관 지도 영역'