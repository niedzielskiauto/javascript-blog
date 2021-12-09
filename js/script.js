"use strict";
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

const titleClickHandler = function (event) {
  console.log("Link was clicked!");
  console.log(event);

  /* [Done] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }
  event.preventDefault();

  /* [Done] add class 'active' to the clicked link */
  const clickedElement = this;

  clickedElement.classList.add("active");
  console.log("clickedElement (with plus): ", clickedElement);

  /* [Done] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(".posts .active");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* [Done] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute("href");

  console.log(articleSelector);

  /* [Done] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  console.log(targetArticle);

  /* [Done] add class 'active' to the correct article */
  targetArticle.classList.add("active");
}

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles";

function generateTitleLinks(){


  /* [in progress] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML='';



  /* for each article */

    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

}

generateTitleLinks();

