 window.onload = function () {
//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: 35.1793, lng: 129.1996 },
//       zoom: 10
//     });
  
//     const malls = [
//       { label: "A", name: "송정서핑학교", lat: 35.1812, lng: 129.2031 },
//       { label: "B", name: "서프홀릭", lat: 35.18, lng: 129.2006 },
//       { label: "C", name: "써피써피", lat: 35.1801, lng: 129.2009 },

//     ];
  
//     const bounds = new google.maps.LatLngBounds();
//     const infowindow = new google.maps.InfoWindow();
  
//     malls.forEach(({ label, name, lat, lng }) => {
//       const marker = new google.maps.Marker({
//         position: { lat, lng },
//         label,
//         map: map
//       });
//       bounds.extend(marker.position);
  
//       marker.addListener("click", () => {
//         map.panTo(marker.position);
//         infowindow.setContent(name);
//         infowindow.open({
//           anchor: marker,
//           map
//         });
//       });
//     });
  
//     map.fitBounds(bounds);
 // 버튼들 불러와서 변수에 담아주고
 var btn1 = document.getElementById("btn1");
 var btn2 = document.getElementById("btn2");
 // 각각 버튼에 이벤트 추가
 btn1.addEventListener("click", changeMap1);
 btn2.addEventListener("click", changeMap2);
 

 var map;
 // 지도 출력
//  function initMap(){
     // 위치데이터 경도, 위도로 구성된 jso 파일은 항상 이런식으로 구성되어있다.
     var ll = {lat: 35.1793, lng: 129.1996};
     map = new google.maps.Map(
             document.getElementById("map"),
             {zoom: 17, center: ll}
             );
     new google.maps.Marker(
         {position: ll,
             map: map,
             label: "현재 위치"}        
     );
//  var map1;
//      // 지도 출력
//     //  function initMap(){
//          // 위치데이터 경도, 위도로 구성된 jso 파일은 항상 이런식으로 구성되어있다.
//          var ll = {lat: 38.0579, lng: 128.68};
//          map1 = new google.maps.Map(
//                  document.getElementById("map"),
//                  {zoom: 17, center: ll}
//                  );
//          new google.maps.Marker(
//              {position: ll,
//                  map1: map,
//                  label: "현재 위치"}        
//          );
 //}
//  initMap(); // 맵 생성
 
 // 지도의 중심을 변경하는 작업
 function changeMap1(){
     var ll = {lat: 35.1793, lng: 129.1996};
     map.panTo(ll);
     map.setZoom(16);
     // const malls = [
//     { label: "A", name: "송정서핑학교", lat: 35.1812, lng: 129.2031 },
//     { label: "B", name: "서프홀릭", lat: 35.18, lng: 129.2006 },
//     { label: "C", name: "써피써피", lat: 35.1801, lng: 129.2009 },

//   ];

//   const bounds = new google.maps.LatLngBounds();
//   const infowindow = new google.maps.InfoWindow();

//   malls.forEach(({ label, name, lat, lng }) => {
//     const marker = new google.maps.Marker({
//       position: { lat, lng },
//       label,
//       map: map
//     });
//     bounds.extend(marker.position);
 } 
 // 새로운 지도를 여는 작업 -> 마커 지워짐
 function changeMap2(){
     var ll = {lat: 38.0579, lng: 128.68};
     map = new google.maps.Map(
             document.getElementById("map"),
             {zoom:17, center: ll}
             );
 }
   };

 
   window.initMap = function (self) {
    console.log(self)
    if(self === 'seoul'){
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.1793, lng: 129.1996 },
      zoom: 10,
    });
  
  
  const malls = [
    { label: "A", name: "송정서핑학교", lat: 35.1812, lng: 129.2031 },
    { label: "B", name: "서프홀릭", lat: 35.18, lng: 129.2006 },
    { label: "C", name: "써피써피", lat: 35.1801, lng: 129.2009 },

  ]; 
  detailMap(map,malls);
  
  } else {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 38.0321, lng: 128.7085 },
      zoom: 10,
    });
  
    const malls = [
      { label: "A", name: "서피비치", lat: 38.029, lng: 128.7175 },
      { label: "B", name: "와이키키서프", lat: 38.0584, lng: 128.683},
      { label: "C", name: "양양서프", lat: 38.0066, lng: 128.7302 },
        ];
  
        detailMap(map,malls);
  }
  
  function detailMap(map, malls) {
    const bounds = new google.maps.LatLngBounds();
  const infowindow = new google.maps.InfoWindow();
  
  malls.forEach(({ label, name, lat, lng }) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      label,
      map: map,
    });
    bounds.extend(marker.position);
  
    marker.addListener("click", () => {
      map.panTo(marker.position);
      infowindow.setContent(name);
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  });
  map.fitBounds(bounds);
  }
  
  
  
  };