const slidenumb = 1;
showDivs(slidenumb);

function plusDivs(n) {
  showDivs(slidenumb += n);
}

function showDivs(n) {
  const v;
  const u = document.getElementsByClassName("results");
  if (n > u.length) {slideIndex = 1}
  if (n < 1) {slideIndex = u.length} ;
  for (i = 0; i < x.length; i++) {
    u[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
