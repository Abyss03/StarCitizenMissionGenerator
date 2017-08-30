window.addEventListener('load', Main);

function Main()
{
  console.log("Start");
  var data = "a";
  readTextFile("/data/planets.json")
}

function addText(stringToAdd)
{
  document.body.innerHTML += stringToAdd;
}

function addTextAndIdDiv(stringToAdd, divName)
{
  document.body.innerHTML += "<div id=" + divName + ">" + stringToAdd;
}



function readTextFile(path)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", path, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                console.log(allText);
                //data = rawFile.responseText;
                //alert(allText);
            }
        }
    }
    rawFile.send(null);
}
