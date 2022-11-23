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
  
  } 
  
  if(self === 'busan'){
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
  if(self === 'jeju'){
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 33.2513, lng: 126.4158 },
      zoom: 10,
    });
  
    const malls = [
      { label: "A", name: "서퍼스서핑스쿨", lat: 33.2535, lng: 126.4231 },
      { label: "B", name: "코코넛서프", lat: 33.2443, lng: 126.4211},
      { label: "B", name: "중문서핑스쿨", lat: 33.2502, lng: 126.4129},
     
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

  
  // 날씨 api - fontawesome 아이콘
var weatherIcon = {
  '01' : 'fas fa-sun',
  '02' : 'fas fa-cloud-sun',
  '03' : 'fas fa-cloud',
  '04' : 'fas fa-cloud-meatball',
  '09' : 'fas fa-cloud-sun-rain',
  '10' : 'fas fa-cloud-showers-heavy',
  '11' : 'fas fa-poo-storm',
  '13' : 'far fa-snowflake',
  '50' : 'fas fa-smog'
};

// 날씨 api - 서울
// var apiURI = "http://api.openweathermap.org/data/2.5/weather?q="+'jeju'+"&appid="+"d45806b4e056c1f0aea6f49d4ff16dc8";
  var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat="+'35.1793'+"&lon="+"128.7085"+"&appid="+"d45806b4e056c1f0aea6f49d4ff16dc8";
$.ajax({
  url: apiURI,
  dataType: "json",
  type: "GET",
  async: "false",
  success: function(resp) {

      var $Icon = (resp.weather[0].icon).substr(0,2);
      var $weather_description = resp.weather[0].main;
      var $Temp = Math.floor(resp.main.temp- 273.15) + 'º';
      var $humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + resp.main.humidity+ ' %';
      var $wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +resp.wind.speed + ' m/s';
      var $city = '송정';
      var $cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + resp.clouds.all +"%";
      var $temp_min = '최저 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_min- 273.15) + 'º';
      var $temp_max = '최고 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_max- 273.15) + 'º';
      

      $('.weather_icon').append('<i class="' + weatherIcon[$Icon] +' fa-5x" style="height : 150px; width : 150px;"></i>');
      $('.weather_description').prepend($weather_description);
      $('.current_temp').prepend($Temp);
      $('.humidity').prepend($humidity);
      $('.wind').prepend($wind);
      $('.city').append($city);
      $('.cloud').append($cloud);
      $('.temp_min').append($temp_min);
      $('.temp_max').append($temp_max);               
  }
})


// 날씨 api - 경기도

var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat="+'38.0321'+"&lon="+"128.70857"+"&appid="+"d45806b4e056c1f0aea6f49d4ff16dc8";
$.ajax({
  url: apiURI,
  dataType: "json",
  type: "GET",
  async: "false",
  success: function(resp) {

      var $g_Icon = (resp.weather[0].icon).substr(0,2);
      var $g_weather_description = resp.weather[0].main;
      var $g_Temp = Math.floor(resp.main.temp- 273.15) + 'º';
      var $g_humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + resp.main.humidity+ ' %';
      var $g_wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +resp.wind.speed + ' m/s';
      var $g_city = '양양';
      var $g_cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + resp.clouds.all +"%";
      var $g_temp_min = '최저 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_min- 273.15) + 'º';
      var $g_temp_max = '최고 온도&nbsp;&nbsp;&nbsp;&nbsp;' + Math.floor(resp.main.temp_max- 273.15) + 'º';
      

      $('.g_weather_icon').append('<i class="' + weatherIcon[$g_Icon] +' fa-5x" style="height : 150px; width : 150px;"></i>');
      $('.g_weather_description').prepend($g_weather_description);
      $('.g_current_temp').prepend($g_Temp);
      $('.g_humidity').prepend($g_humidity);
      $('.g_wind').prepend($g_wind);
      $('.g_city').append($g_city);
      $('.g_cloud').append($g_cloud);
      $('.g_temp_min').append($g_temp_min);
      $('.g_temp_max').append($g_temp_max);   
  }
})
