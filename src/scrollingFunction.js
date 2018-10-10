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
                  // const CardYListHeight = CardYList[i].clientHeight;
                  // const CardYListBottom = CardYListTop + CardYListHeight;

              if (windowScroll <=  CardYListTop + 500 &&  windowScroll >= CardYListTop - 400) {
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
/* 
              if(CardYListBottom <= windowScroll + 80 && CardYListBottom >= windowScroll - 80) {
                  CardYList[i].classList.add(inView);
              } */
          }); 
      }, 250);
      } 
  };
};

export default scrollingFunction;