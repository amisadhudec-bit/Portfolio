const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');


const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioBoxs = document.querySelectorAll('.portfolio-box');

// navbar actions and all sectionn actions along with cube rotation when navbar is clicked
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');

        cube.style.transform = `rotateY(${idx * -90}deg)`;

        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');

        const array=Array.from(sections);
        const arrSecs = array.slice(1, -1);

        arrSecs.forEach(arrSec => {
            if (arrSec.classList.contains('active')) {
                sections[4].classList.add('action-conatct');
            }
        });
        if (sections[0].classList.contains('active')){
            sections[4].classList.remove('action-contact');
        }
    });
});

// resume section when clicking tab-list
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        const activeItem = document.querySelector('.resume-list.active');
        if(activeItem) activeItem.classList.remove('active'); 
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    });
});

// portfolio section when clicking tab-list
portfolioLists.forEach((list, idx) => { 
    list.addEventListener('click', () => {
         document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');
        
        }); 
});

//visibility for contact section when reloading (cube reloading animation)
setTimeout(() => {
    sections[4].classList.remove('active');
},1500);

//preview button
const previewBtns = document.querySelectorAll('.preview-btn');
const modal = document.getElementById('previewModal');
const modalImg = document.getElementById('previewImage');
const closeBtn = document.querySelector('.close-preview');

previewBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        modalImg.src = btn.dataset.image;
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImg.src = '';
});

modal.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modalImg.src = '';
    }
});
