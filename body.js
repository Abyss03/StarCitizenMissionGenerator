window.addEventListener('load', Main);

function Main()
{
  var planets;
  var suggestions;
  var activities;

  readFiles()
}

function addText(stringToAdd)
{
  document.body.innerHTML += stringToAdd;
}

function addTextAndIdDiv(stringToAdd, divName)
{
  document.body.innerHTML += "<div id=" + divName + ">" + stringToAdd;
}

function readFiles()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "/data/planets.json", true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {

                var allText = rawFile.responseText;
                planets = JSON.parse(rawFile.responseText);

                var planetsClasses = document.getElementsByClassName("planets");
                var moonClasses = document.getElementsByClassName("moons");
                var stationClasses = document.getElementsByClassName("stations");

                for (var i = 0; i < planets.planets.length; i++)
                {
                  planetsClasses[i].innerHTML = planets.planets[i].name;

                  PopulateMoons(planets.planets[i].moons, moonClasses[i]);

                  PopulateStations(planets.planets[i].stations, stationClasses[i]);
                }
            }
        }
    }
    rawFile.send(null);

    var rawFile2 = new XMLHttpRequest();
    rawFile2.open("GET", "/data/activities.json", true);
    rawFile2.onreadystatechange = function ()
    {
        if(rawFile2.readyState === 4)
        {
            if(rawFile2.status === 200 || rawFile2.status == 0)
            {

                var allText = rawFile2.responseText;
                activities = JSON.parse(rawFile2.responseText);
                //console.log(activities);
            }
        }
    }
    rawFile2.send(null);

    var rawFile3 = new XMLHttpRequest();
    rawFile3.open("GET", "/data/suggestions.json", true);
    rawFile3.onreadystatechange = function ()
    {
        if(rawFile3.readyState === 4)
        {
            if(rawFile3.status === 200 || rawFile3.status == 0)
            {

                var allText = rawFile3.responseText;
                suggestions = JSON.parse(rawFile3.responseText);
                //console.log(suggestions);
            }
        }
    }
    rawFile3.send(null);
}

function PopulateMoons(moons, moonClass)
{
  var moonsList = "";
  if (moons.length == 0) {
    moonsList = "<ul><li>No Known Moons</li></ul>";
  }
  else {
    moonsList = "<ul>"
    for (var i = 0; i < moons.length; i++)
    {
      if (moons[i]) {
        moonsList += "<li>" + moons[i].name + "</li>";
      }
    }
    moonsList += "</ul>"
  }
  moonClass.innerHTML = moonsList
}

function PopulateStations(stations, stationClass)
{
  var stationsList = "";
  if (stations.length == 0) {
    stationsList = "<ul><li>No Known Stations</li></ul>";
  }
  else {
    stationsList = "<ul>"
    for (var i = 0; i < stations.length; i++)
    {
        stationsList += "<li>" + stations[i].name + "</li>";
    }
    stationsList += "</ul>"
  }
  stationClass.innerHTML = stationsList
}
