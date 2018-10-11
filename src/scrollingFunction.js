const scrollingFunction = function() {
  window.onload = function(e) {
      const inView =  'Card--is-in-view';
      const CardYList  = document.getElementsByClassName('Card');
      CardYList[0].classList.add(inView);
      const CardCount = document.querySelectorAll('.Card').length;

      for (let i = 0;  i < CardCount; i++) {
          setTimeout( function() {
          window.addEventListener('scroll', (e) => {
            const windowScroll = window.scrollY;
              const CardYListTop = Math.round(CardYList[i].getBoundingClientRect().top + windowScroll);
/*               const CardYListHeight = CardYList[i].clientHeight;
              const CardYListBottom = CardYListTop + CardYListHeight; */

            const whenToAnimate = function (Btm, nTop, nBtm, Top) {
              if (windowScroll <=  Btm + nTop  && windowScroll >= Top - nBtm ) {
              // if (windowScroll <=  CardYListTop + 500 &&  windowScroll >= CardYListTop - 400) {
            // if (windowScroll <=  CardYListBottom &&  windowScroll >= CardYListTop - (CardYListHeight) + 80) {
                CardYList[i].classList.add(inView);

                const hideUnseenSub = function(number, classname) {
                if(CardYList[i-number] === undefined) {
                  return;
                } else {
                  CardYList[i-number].classList.remove(classname);
                }
              }
                
                const hideUnseenAdd = function(number, classname) {
                if(CardYList[i+number] === undefined) {
                  return;
                } else {
                  CardYList[i+number].classList.remove(classname);
                }
              }

                hideUnseenSub(1,inView);
                hideUnseenSub(2,inView);
                hideUnseenAdd(1,inView);
                hideUnseenAdd(2,inView);
            }
          }

          if(window.width <= 768) {
            console.log('Yup');
            whenToAnimate(CardYListTop, 500, 400, CardYListTop);
/*             if(CardYListBottom <= windowScroll + 80 && CardYListBottom >= windowScroll - 80) {
                CardYList[i].classList.add(inView);
            } */
          } else {
            whenToAnimate(CardYListTop, 500, 400, CardYListTop);
          }
          }); 
      }, 250);
      } 
  };
};

export default scrollingFunction;

// window.addEventListener('scroll', (e) => {
//     const windowScroll = window.scrollY;
//     const windowScrollOffset = window.scrollY + 70;
//     const SummaryY = document.getElementsByName(`section-${navContent[0].listItem[0].replace(/\s/g, "")}`)[0];
//     const ExperienceY = document.getElementsByName(`section-${navContent[0].listItem[1].replace(/\s/g, "")}`)[0];
//     const EducationY = document.getElementsByName(`section-${navContent[0].listItem[2].replace(/\s/g, "")}`)[0];
   
//     const SummaryYHeight = SummaryY.clientHeight;
//     const ExperienceYHeight = ExperienceY.clientHeight;
//     const EducationYHeight = EducationY.clientHeight;
    
//     const SummaryYTop = Math.round(SummaryY.getBoundingClientRect().top + windowScroll);
//     const ExperienceYTop = Math.round(ExperienceY.getBoundingClientRect().top + windowScroll);
//     const EducationYTop = Math.round(EducationY.getBoundingClientRect().top + windowScroll);
  
//     const SummaryYBottom = SummaryYTop + SummaryYHeight;
//     const ExperienceYBottom = ExperienceYTop + ExperienceYHeight;
//     const EducationYBottom = EducationYTop + EducationYHeight;
  
//     setTimeout( function() {
//     const checkPos = function (elementTop, elementBtm, elementName) {
//       if(windowScrollOffset <=  elementBtm && windowScrollOffset >=  elementTop) {
//         console.log('==> Scrolled to the top of ' + elementName.className);
//         elementName.classList.add('section--is-in-view');
  
//         if(elementName.previousElementSibling === null) {
//           elementName.nextElementSibling.classList.remove('section--is-in-view');
//           return;
//         } else {
//           elementName.previousElementSibling.classList.remove('section--is-in-view');
//           elementName.nextElementSibling.classList.remove('section--is-in-view');
//         }
//         if(elementName.nextElementSibling === null) {
//           elementName.previousElementSibling.classList.remove('section--is-in-view');
//           return;
//         }
//       } 
  
//       if(windowScrollOffset ===  elementBtm) {
//         console.log('==> Scrolled to the bottom of ' + elementName.className);
//       }
//     };
//      checkPos(SummaryYTop, SummaryYBottom, SummaryY);
//      checkPos(ExperienceYTop, ExperienceYBottom, ExperienceY);
//      checkPos(EducationYTop, EducationYBottom,  EducationY);
  
//   /*    console.log(SummaryY.className + ' ==> ' + SummaryYTop + ' Height: ' + SummaryYHeight + ' || Bottom point:' + SummaryYBottom);
//     console.log(ExperienceY.className + ' ==> ' + ExperienceYTop + ' Height: ' + ExperienceYHeight + ' || Bottom point:' + ExperienceYBottom + ' || Siblings: ' + ExperienceY.previousElementSibling.className);
//     console.log(EducationY.className + ' ==> ' + EducationYTop + ' Height: ' + EducationYHeight + ' || Bottom point:' + EducationYBottom); */
//     }, 200);

//   });