function getData(){
    let city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1cfcd3e54eeb018b0acc09f1f71fb584`
     fetch(url)
     .then(function(res){
        return res.json();
     })

    .then(function(res){
        append(res)
        console.log(res)
    })
    .catch(function(error){
        console.log(error)
    });
}

function getDataLocation(lat,lon){
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1cfcd3e54eeb018b0acc09f1f71fb584`

   fetch(url)
   .then(function(res){
      return res.json();
   })
   .then(function(res){
    append(res);
    console.log(res)
   })
.catch(function(err){
    console.log(err)
})


}


function append(data){
    let container = document.getElementById("container");
    let map = document.getElementById("gmap_canvas");
    container.innerHTML = null;

   let city = document.createElement("h3");
   city.innerText =`City : ${data.name}`

   let min = document.createElement("p")
   min.innerText =`Min-temp: ${Math.floor(data.main.temp_min-273)}`+ "C"

   let max = document.createElement("p");
   max.innerText = `Max-temp : ${Math.floor(data.main.temp_max-273)}`+ "C"

   let current = document.createElement("p");
   current.innerText = `Current temp :${Math.floor(data.main.temp-273)}`+ "C"

   let humidity= document.createElement("p");
   humidity.innerText = `  Humidity : ${data.main.humidity}`

  container.append(city,min,max,current,humidity)
   map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    
}



function success(position){
        let crd = position.coords;
        console.log("your current position is: ");
        console.log(`Latitude:${crd.latitude}`)
        console.log(`longitude:${crd.longitude}`)
        console.log(`More or less ${crd.accuracy}meter.`)
        getDataLocation(crd.latitude, crd.longitude);
    }
    
function getWeather(){
    navigator.geolocation.getCurrentPosition(success);
}

