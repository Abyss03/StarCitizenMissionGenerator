window.addEventListener('load', Main);

function Main()
{
  console.log("Start");
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
                console.log(planets);
                console.log(planets.planets[0].name)
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
                console.log(activities);
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
                console.log(suggestions);
            }
        }
    }
    rawFile3.send(null);
}
