$(document).ready(function() {

//2a793cc57b61ac02fe9ef69d7f44e4f9

var city ="London"

$.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=2a793cc57b61ac02fe9ef69d7f44e4f9", function(data) {
    $('#temp').text(Math.round((data.main.temp)-273.15));
    var icon = data.weather[0].icon;
    var url = 'http://openweathermap.org/img/w/' + icon + '.png';
    $("#icon").html("<img src= " + url + ">");
  });
















})
