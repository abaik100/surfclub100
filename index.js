window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.1793, lng: 129.1996 },
      zoom: 10
    });
  
    const malls = [
      { label: "A", name: "송정서핑학교", lat: 35.1812, lng: 129.2031 },
      { label: "B", name: "서프홀릭", lat: 35.18, lng: 129.2006 },
      { label: "C", name: "써피써피", lat: 35.1801, lng: 129.2009 },

    ];
  
    const bounds = new google.maps.LatLngBounds();
    const infowindow = new google.maps.InfoWindow();
  
    malls.forEach(({ label, name, lat, lng }) => {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        label,
        map: map
      });
      bounds.extend(marker.position);
  
      marker.addListener("click", () => {
        map.panTo(marker.position);
        infowindow.setContent(name);
        infowindow.open({
          anchor: marker,
          map
        });
      });
    });
  
    map.fitBounds(bounds);
  };
  