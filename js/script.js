'use strict';


const titleClickHandler = function (event) {
  event.preventDefault();

  /* [Done] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
 

  /* [Done] add class 'active' to the clicked link */
  const clickedElement = this;

  clickedElement.classList.add('active');


  /* [Done] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [Done] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');

  /* [Done] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  /* [Done] add class 'active' to the correct article */
  targetArticle.classList.add('active');
};


const optArticleSelector ='.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

  function generateTitleLinks(customSelector = '') {

  /* [Done] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML='';

  /* [Done] for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  let html = '';

  for(let article of articles) {
    /* [Done] get the article id */
    const articleId = article.getAttribute('id');

    /* [Done] find the title element */
    /* [Done] get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [Done] create HTML of the link */
    const linkHTML = `<li><a href="#${articleId}"><span>${articleTitle}</span></a></li>`;

    /* [Done] insert link into titleList */
    html = html + linkHTML;
  }
  
  titleList.innerHTML = html;
  
  const links = document.querySelectorAll('.titles a');
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();


function generateTags(){
  /* [Done] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* [ Done ] START LOOP: for every article: */
  for (let article of articles) {

    /* [ Done ] find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
  
    /* [ Done ] make html variable with empty string */
    let html = '';

    /* [ Done ] get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    

    /* [ Done ] split tags into array */
    const articleTagsArray = articleTags.split(' ');

    /* [ Done ] START LOOP: for each tag */
    for(let tag of articleTagsArray){
     
      /* [ Done ] generate HTML of the link */
      const tagLinkHTML = `<li><a href="#tag-${tag}"><span>${tag}</span></a></li>`;
     
      /* [ Done ] add generated code to html variable */
      html = html + tagLinkHTML;
     
    /* [ Done ] END LOOP: for each tag */
    }

    /* [ Done ] insert HTML of all the links into the tags wrapper */
   
  /* [ Done ] END LOOP: for every article: */
  tagsWrapper.innerHTML = html;
  }
 
}

generateTags();

function tagClickHandler(event){
  /* [ Done ] prevent default action for this event */
  event.preventDefault();

  /* [ Done ] make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* [ Done ] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* [ Done ] make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

  /* [ Done ] find all tag links with class active */
  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* [ Done ]START LOOP: for each active tag link */
  for (let tagLink of tagLinks) {

    /* [ Done ] remove class active */
    tagLink.classList.remove('active');

  
  /* [ Done ] END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  const selectedLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */
  for (let selectedLink of selectedLinks) {

    /* add class active */
    selectedLink.classList.add('active');

  /* END LOOP: for each found tag link */
  }
  
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
 
}

function addClickListenersToTags(){

  const allLinksToTags = document.querySelectorAll('a[href^="#tag-"]');
  console.log(allLinksToTags);

  for(let link of allLinksToTags){

    link.addEventListener('click', tagClickHandler);

  }

}

addClickListenersToTags();

