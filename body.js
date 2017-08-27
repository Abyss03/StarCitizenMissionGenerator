window.addEventListener('load', Main);

function Main()
{
  //AddTextAndIdDiv("Star Citizen 3.0 Mission Generator","title");
  //AddTextAndIdDiv("hello","subtitle");
}

function AddText(stringToAdd)
{
  document.body.innerHTML += stringToAdd;
}

function AddTextAndIdDiv(stringToAdd, divName)
{
  document.body.innerHTML += "<div id=" + divName + ">" + stringToAdd;
}
