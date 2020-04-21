var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.button');
var humid=document.querySelector('.humidity');
var min=document.querySelector('.min');
var max=document.querySelector('.max');
var dataoffive=document.querySelector('.button1');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=a70eb54edbc725a58ac387d231ebab19')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humidvalue=data['main']['humidity'];
  var mintemp=data['main']['temp_min'];
  var maxtemp=data['main']['temp_max'];


  main.innerHTML = nameValue;
  desc.innerHTML = "Weather Description- "+descValue;
  temp.innerHTML = "Temperature- "+tempValue+" degree celsius";
  min.innerHTML="Minimum Temperature -"+mintemp+" degree celsius";
  max.innerHTML="Maximum Temperature- "+maxtemp+"degree celsius";
  humid.innerHTML="humidity-"+humidvalue+"%";
  input.value ="";



})

.catch(err => alert("Wrong city name!"));
})

