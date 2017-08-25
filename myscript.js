window.addEventListener('load', Main);

function Main()
{
  AddTextAndIdDiv("Hello","title")
  AddTextAndIdDiv("hello","subtitle")
}

function AddText(stringToAdd)
{
  document.body.innerHTML += stringToAdd
}

function AddTextAndIdDiv(stringToAdd, divName)
{
  document.body.innerHTML += "<div id=" + divName + ">" + stringToAdd
}
