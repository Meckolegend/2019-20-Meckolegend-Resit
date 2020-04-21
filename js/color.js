function pink()
{
  console.log("The body of the webpage is now the colour of Leicester's Away Kit")
  document.body.style.backgroundColor = "pink"
}
colorchange.addEventListener("click", pink);

function blue()
{
  console.log("The body of the webpage is now the colour of Leicester's Home Kit")
  document.body.style.backgroundColor = "teal"
}
colorchange2.addEventListener("click", blue);
