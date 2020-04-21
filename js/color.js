const colorchange = document.getElementById("color-change");
const colorchange2 = document.getElementById("color-change2");

function pink()
{
  console.log("The body of the webpage is now the colour of Leicester's Away Kit")
  document.body.style.backgroundColor = "pink"
  index.style.background = "hotpink"
  index.style.borderColor = "hotpink"
  contacts.style.background = "hotpink"
  contacts.style.borderColor = "hotpink"
  current.style.background = "hotpink"
  current.style.borderColor = "hotpink"
  future.style.background = "hotpink"
  future.style.borderColor = "hotpink"
}
colorchange.addEventListener("click", pink);

function blue()
{
  console.log("The body of the webpage is now the colour of Leicester's Home Kit")
  document.body.style.backgroundColor = "teal"
  index.style.background = "mediumslateblue"
  index.style.borderColor = "mediumslateblue"
  contacts.style.background = "mediumslateblue"
  contacts.style.borderColor = "mediumslateblue"
  current.style.background = "mediumslateblue"
  current.style.borderColor = "mediumslateblue"
  future.style.background = "mediumslateblue"
  future.style.borderColor = "mediumslateblue"

}
colorchange2.addEventListener("click", blue);
