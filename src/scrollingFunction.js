import { navContent } from "./Nav/navContent";

const scrollingFunction = function() {

    window.onload = function(e) {
        const inView =  'Card--is-in-view';
        // const atBottom =  'js-at-bottom';
        const CardYList  = document.getElementsByClassName('Card');
        const firstInView =  CardYList[0];
        firstInView.classList.add(inView);
        CardYList[1].classList.add('second');
        const CardCount = document.querySelectorAll('.Card').length;
        console.log('CardCount: ' + CardCount);
   // const CardYTop  = CardY.getBoundingClientRect().top + windowScroll;

       for (let i = 0;  i < CardCount; i++) {
           // const CardYBottom = CardYTop + CardYHeight;
           console.log(CardYList[i]);
         
           // setTimeout( function() {
            window.addEventListener('scroll', (e) => {
                const windowScroll = window.scrollY;
                    const CardYListTop = Math.round(CardYList[i].getBoundingClientRect().top + windowScroll);
                    const CardYListHeight = CardYList[i].clientHeight;
                    const CardYListBottom = CardYListTop + CardYListHeight;

                    // console.log('||||| CardYListTop: ' + CardYList[i].className + ': ' + CardYListTop + ' windowScroll: ' + windowScroll);
                    console.log('||||| CardYListBtm: ' + CardYList[i].className + ': ' + CardYListBottom + ' windowScroll: ' + windowScroll);
                if (CardYListTop <=  windowScroll + 40 && CardYListTop >= windowScroll - 40) {
                    CardYList[i].classList.add('test');
                    console.log(' =======> TEST <====== ');
                }

                if(CardYListBottom <= windowScroll + 40 && CardYListBottom >= windowScroll - 40) {
                    console.log(' =======> You reached bottom');
                    // selectedCardInView.classList.add(atBottom);
                    CardYList[i].classList.remove('test');
                }
            }); 
       // }, );
       } 
    };

window.addEventListener('scroll', (e) => {
    const windowScroll = window.scrollY;
    const windowScrollOffset = window.scrollY + 70;
    const SummaryY = document.getElementsByName(`section-${navContent[0].listItem[0].replace(/\s/g, "")}`)[0];
    const ExperienceY = document.getElementsByName(`section-${navContent[0].listItem[1].replace(/\s/g, "")}`)[0];
    const EducationY = document.getElementsByName(`section-${navContent[0].listItem[2].replace(/\s/g, "")}`)[0];
   
    const SummaryYHeight = SummaryY.clientHeight;
    const ExperienceYHeight = ExperienceY.clientHeight;
    const EducationYHeight = EducationY.clientHeight;
    
    const SummaryYTop = Math.round(SummaryY.getBoundingClientRect().top + windowScroll);
    const ExperienceYTop = Math.round(ExperienceY.getBoundingClientRect().top + windowScroll);
    const EducationYTop = Math.round(EducationY.getBoundingClientRect().top + windowScroll);
  
    const SummaryYBottom = SummaryYTop + SummaryYHeight;
    const ExperienceYBottom = ExperienceYTop + ExperienceYHeight;
    const EducationYBottom = EducationYTop + EducationYHeight;
  
    setTimeout( function() {
    const checkPos = function (elementTop, elementBtm, elementName) {
      if(windowScrollOffset <=  elementBtm && windowScrollOffset >=  elementTop) {
        console.log('==> Scrolled to the top of ' + elementName.className);
        elementName.classList.add('section--is-in-view');
  
        if(elementName.previousElementSibling === null) {
          elementName.nextElementSibling.classList.remove('section--is-in-view');
          return;
        } else {
          elementName.previousElementSibling.classList.remove('section--is-in-view');
          elementName.nextElementSibling.classList.remove('section--is-in-view');
        }
        if(elementName.nextElementSibling === null) {
          elementName.previousElementSibling.classList.remove('section--is-in-view');
          return;
        }
      } 
  
      if(windowScrollOffset ===  elementBtm) {
        console.log('==> Scrolled to the bottom of ' + elementName.className);
      }
    };
     checkPos(SummaryYTop, SummaryYBottom, SummaryY);
     checkPos(ExperienceYTop, ExperienceYBottom, ExperienceY);
     checkPos(EducationYTop, EducationYBottom,  EducationY);
  
  /*    console.log(SummaryY.className + ' ==> ' + SummaryYTop + ' Height: ' + SummaryYHeight + ' || Bottom point:' + SummaryYBottom);
    console.log(ExperienceY.className + ' ==> ' + ExperienceYTop + ' Height: ' + ExperienceYHeight + ' || Bottom point:' + ExperienceYBottom + ' || Siblings: ' + ExperienceY.previousElementSibling.className);
    console.log(EducationY.className + ' ==> ' + EducationYTop + ' Height: ' + EducationYHeight + ' || Bottom point:' + EducationYBottom); */
    }, 200);

  });
};

export default scrollingFunction;