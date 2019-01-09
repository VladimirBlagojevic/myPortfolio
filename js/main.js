
//****** NAVIGATION LOGIC ******//

//Selectors for side cards
const sectionAbout=document.querySelector('.side-card--about');
const sectionWorks=document.querySelector('.side-card--works');
const sectionContacts=document.querySelector('.side-card--contacts');
// Nav buttons selektors
const btnAbout=document.querySelector('.about--js');
const btnWorks=document.querySelector('.works--js');
const btnContact=document.querySelector('.contact--js');

// Remove current card and show clicked one
function changeSection(remFirst,remSec,showClicked){
    remFirst.classList.remove('fadeInLeft');
    remFirst.classList.add('fadeOutLeft');
    setTimeout(() => {
        remFirst.style.display='none';
    }, 500);

    remSec.classList.remove('fadeInLeft');
    remSec.classList.add('fadeOutLeft');
    setTimeout(() => {
        remSec.style.display='none';
    }, 500);

    showClicked.classList.remove('fadeOutLeft');
    showClicked.classList.add('fadeInLeft');
    setTimeout(() => {
        showClicked.style.display='flex';
    }, 500);

};

// Remove active class from current card and add it to the clicked one
function switchActiveBtn(remFirst,remSec,showClicked){
    remFirst.classList.remove('header__link--active');                                                                    
    remSec.classList.remove('header__link--active');
    showClicked.classList.add('header__link--active');        
};
                                                                                  

btnAbout.addEventListener('click', (e) => {
    e.preventDefault();
    changeSection(sectionWorks,sectionContacts,sectionAbout);
    switchActiveBtn(btnWorks,btnContact,btnAbout);
});

btnWorks.addEventListener('click',(e) => {
    e.preventDefault();
    changeSection(sectionAbout,sectionContacts,sectionWorks);
    switchActiveBtn(btnAbout,btnContact,btnWorks);
});

btnContact.addEventListener('click', (e) => {
    e.preventDefault();
    changeSection(sectionAbout,sectionWorks,sectionContacts);
    switchActiveBtn(btnWorks,btnAbout,btnContact);
});




