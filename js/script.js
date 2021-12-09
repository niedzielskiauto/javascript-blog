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



  

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles";

function generateTitleLinks(){


  /* [Done] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML='';

  /* [Done[ for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  
  let html = '';

  for(let article of articles) {
    /* [In progress] get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML = `<li><a href="#"${articleId}><span>${articleTitle}</span></a></li>`;

    /* insert link into titleList */
    html = html + linkHTML;
  }
  

  titleList.innerHTML = html;

  const links = document.querySelectorAll(".titles a");
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();

