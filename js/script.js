'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

const titleClickHandler = function (event) {
  console.log('Link was clicked!');
  console.log(event);

  /* [Done] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  event.preventDefault();

  /* [Done] add class 'active' to the clicked link */
  const clickedElement = this;

  clickedElement.classList.add('active');
  console.log('clickedElement (with plus): ', clickedElement);

  /* [Done] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [Done] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');

  console.log(articleSelector);

  /* [Done] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  console.log(targetArticle);

  /* [Done] add class 'active' to the correct article */
  targetArticle.classList.add('active');
};


const optArticleSelector ='.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks() {

  /* [Done] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML='';

  /* [Done] for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  
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
    // console.log(articleTags)

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){

      /* generate HTML of the link */
      const linkHTML = `<li><a href="#${articleTags}"></a></li>`;

      /* add generated code to html variable */
      html = html + linkHTML;
      console.log(html);
    /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;

  /* END LOOP: for every article: */
  }
}

generateTags();