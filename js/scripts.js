const webShortcut = document.getElementById("Logo");
const colorchange = document.getElementById("color-change");

function shortcut() {
  alert("You have found a shortcut. You may now go to the home page");
}
webShortcut.addEventListener("click", shortcut);

function pink(){
  console.log("The body of the webpage is now the colour of Leicester's Away Kit")
  document.body.style.backgroundColor="pink"
}
colorchange.addEventListener("click",pink);
