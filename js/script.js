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


const optArticleSelector ='.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';
const optArticleAuthorSelector = '.post-author';
const optTagsListSelector = '.tags.list';
const optCloudClassCount = '5';
const optCloudClassPrefix = 'tag-size-';


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
    html += linkHTML;
  }
  
  titleList.innerHTML = html;
  
  const links = document.querySelectorAll('.titles a');
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();


function calculateTagsParams (tags) {
  const params = {max: 0, min: 999999};

  for(let tag in tags) {
    console.log(tag + ' is used ' + tags[tag] + ' times');

    if(tags[tag] > params.max){
      params.max = tags[tag];
    } if(tags[tag] < params.min) {
      params.min = tags[tag];
    }
  }
  return params;
}

function calculateTagClass(count, params) {
  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );

return optCloudClassPrefix + classNumber;
}




function generateTags() {
  /* [NEW] create a new variable allTags with an empty array */
  let allTags = {};

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
     
      /* [ Done ] Generate HTML of the link */
      const tagLinkHTML = `<li><a href="#tag-${tag}"><span> ${tag} </span></a></li> `;
     
      /* [ Done ] Add generated code to html variable */
      html += tagLinkHTML;
     
       /* [NEW] check if this link is NOT already in allTags */
      if(!allTags[tag]) {
      /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++
        
    /* [ Done ] END LOOP: for each tag */
    }

  }
  tagsWrapper.innerHTML = html;

  /* [ Done ] END LOOP: for each article */
  }

    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector(optTagsListSelector);

    const tagsParams = calculateTagsParams(allTags);

    console.log('tagsParams:', tagsParams)

    /* [NEW] create variable for all links HTML code */
    let allTagsHTML = '';

    /* [NEW] START LOOP: for each tag in allTags: */
    for(let tag in allTags){
    /* [NEW] generate code of a link and add it to allTagsHTML */
   
  const tagLinkHTML = '<li><a class="' + calculateTagClass(allTags[tag], tagsParams) + '" href="#tag-' + tag + '">' + tag + '</a></li>';

  allTagsHTML += tagLinkHTML;

  console.log('tagLinkHTML:', tagLinkHTML)
}
/* [NEW] END LOOP: for each tag in allTags: */

/*[NEW] add HTML from allTagsHTML to tagList */
tagList.innerHTML = allTagsHTML;
 
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

  /* [ Done ] find all tag links with "href" attribute equal to the "href" constant */
  const selectedLinks = document.querySelectorAll(`a[href="${href}]`);

  /* [ Done ] START LOOP: for each found tag link */
  for (let selectedLink of selectedLinks) {

    /* [ Done ] add class active */
    selectedLink.classList.add('active');

  /* [ Done ] END LOOP: for each found tag link */
  }

  /* [ Done ] execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks(`[data-tags~="${tag}"]`);
 
}

function addClickListenersToTags() {
/* [ Done ] Take all links */
  const allLinksToTags = document.querySelectorAll('a[href^="#tag-"]');

/* [ Done ] Start Loop */
  for(let link of allLinksToTags){

    link.addEventListener('click', tagClickHandler);
/* [ Done ] End lopp */
  }
}

addClickListenersToTags();


function generateAuthors() {

  /* [ Done ] Take Articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* [ Done ] Start Loop */
  for(let article of articles) {

  /* [ Done ] Take titlelists */
    const titleList = article.querySelector(optArticleAuthorSelector);

  /* [ Done ] Create variable html */
    let html = '';

  /* [ Done ] Create variable html */
    const authorTags = article.getAttribute('data-author');

  /* [ Done ] Create Authorlink */
    const authorLinkHTML = `<li><a href="#author-${authorTags}"><span>${authorTags}</span></a></li>`;
      
  /* [ Done ] Add generated code to html variable */
    html += authorLinkHTML;

    titleList.innerHTML = html;
  }

}

generateAuthors();


function authorClickHandler(event) {

 /* [ Done ] prevent default action for this event */
  event.preventDefault();

  const clickedElement = this;
  
  /* [ Done ] Create constant href */
  const href = clickedElement.getAttribute('href');

  /* [ Done ] Make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#author-', '');

  /* [ Done ] Create constance authorLinks */
  const authorLinks = document.querySelectorAll('a.active[href^="#author-"]');

  /* [ Done ] Start loop */
  for(let authorLink of authorLinks) {
    authorLink.classList.remove('active');
  }

  /* [ Done ] Create constance authorLinkshref */
  const authorLinksHref = document.querySelectorAll(`a[href="${href}"]`);

    /* [ Done ] Start loop*/
  for(let authorLinkHref of authorLinksHref) {
    authorLinkHref.classList.add('active');
  }

  generateTitleLinks(`[data-author="${tag}"]`);

}


function addClickListenersToAuthors() {

  const allLinksToAuthors = document.querySelectorAll('a[href^="#author-"]');

  for(let link of allLinksToAuthors){

    link.addEventListener('click', authorClickHandler);

  }

}

addClickListenersToAuthors();
  

// Start new module

// function generateTags(){
//   /* [NEW] create a new variable allTags with an empty array */
//   let allTags = [];

//   /* find all articles */

//   /* START LOOP: for every article: */

//     /* find tags wrapper */

//     /* make html variable with empty string */

//     /* get tags from data-tags attribute */

//     /* split tags into array */

//     /* START LOOP: for each tag */

//       /* generate HTML of the link */

//       /* add generated code to html variable */

//       /* [NEW] check if this link is NOT already in allTags */
//       if(allTags.indexOf(linkHTML) == -1){
//         /* [NEW] add generated code to allTags array */
//         allTags.push(linkHTML);
//       }

//     /* END LOOP: for each tag */

//     /* insert HTML of all the links into the tags wrapper */

//   /* END LOOP: for every article: */

//   /* [NEW] find list of tags in right column */
//   const tagList = document.querySelector(optTagsListSelector);

//   /* [NEW] add html from allTags to tagList */
//   tagList.innerHTML = allTags.join(' ');
// }
