addEventListener('DOMContentLoaded', function() {
    // active class header links
    let nav = document.querySelector('.navigation').children;
    
    window.addEventListener('scroll', () => {
        for (let i = 0; i < nav.length; i++) {
                    nav[i].classList.remove('active-nav');
                }
        
        if (document.documentElement.clientWidth > 900) {
            if (pageYOffset >= 0 && pageYOffset < 600) {
                nav[0].classList.add('active-nav')
            }
            if (pageYOffset >= 600 && pageYOffset < 1100) {
                nav[1].classList.add('active-nav')
            }
            if (pageYOffset >= 1100 && pageYOffset < 1965) {
                nav[2].classList.add('active-nav')
            }
            if (pageYOffset >= 1965 && pageYOffset < 2670) {
                nav[3].classList.add('active-nav')
            }
            if (pageYOffset >= 2670) {
                nav[4].classList.add('active-nav')
            }
        } else if (document.documentElement.clientWidth > 700) {
            if (pageYOffset >= 0 && pageYOffset < 465) {
                nav[0].classList.add('active-nav')
            }
            if (pageYOffset >= 465 && pageYOffset < 1100) {
                nav[1].classList.add('active-nav')
            }
            if (pageYOffset >= 1100 && pageYOffset < 1800) {
                nav[2].classList.add('active-nav')
            }
            if (pageYOffset >= 1800 && pageYOffset < 2500) {
                nav[3].classList.add('active-nav')
            }
            if (pageYOffset >= 2500) {
                nav[4].classList.add('active-nav')
            }
        } else if(document.documentElement.clientWidth > 470) {
            if (pageYOffset >= 0 && pageYOffset < 350) {
                nav[0].classList.add('active-nav')
            }
            if (pageYOffset >= 350 && pageYOffset < 1250) {
                nav[1].classList.add('active-nav')
            }
            if (pageYOffset >= 1250 && pageYOffset < 2777) {
                nav[2].classList.add('active-nav')
            }
            if (pageYOffset >= 2777 && pageYOffset < 4437) {
                nav[3].classList.add('active-nav')
            }
            if (pageYOffset >= 4437) {
                nav[4].classList.add('active-nav')
            }
        } else {
            if (pageYOffset >= 0 && pageYOffset < 180) {
                nav[0].classList.add('active-nav')
            }
            if (pageYOffset >= 180 && pageYOffset < 1300) {
                nav[1].classList.add('active-nav')
            }
            if (pageYOffset >= 1300 && pageYOffset < 2100) {
                nav[2].classList.add('active-nav')
            }
            if (pageYOffset >= 2100 && pageYOffset < 3700) {
                nav[3].classList.add('active-nav')
            }
            if (pageYOffset >= 3700) {
                nav[4].classList.add('active-nav')
        }
        
    }
})




    // turn off the phone
    function addEvent() {
    let firstPhone = document.querySelector('.slider__iphone-vertical').children[0];
    let secondPhone = document.querySelector('.slider__iphone-horizontal').children[0];

    firstPhone.addEventListener('click', offScreenFirst);
    secondPhone.addEventListener('click', offScreenSecond);

    function offScreenFirst() {
        if (firstPhone.getAttribute('src') === './assets/img/iPhone-Vertical.png') {
            firstPhone.setAttribute('src', './assets/img/iPhone-Vertical-off.png')
        } else firstPhone.setAttribute('src', './assets/img/iPhone-Vertical.png')
    }

    function offScreenSecond() {
        if (secondPhone.getAttribute('src') === './assets/img/iPhone-Horizontal.png') {
            secondPhone.setAttribute('src', './assets/img/iPhone-Horizontal-off.png')
        } else secondPhone.setAttribute('src', './assets/img/iPhone-Horizontal.png')
    }
    }

    addEvent();


    

    // создание слайдов слева и справа за областью видимости

    let sliderContainer = document.querySelector('.slider-container');
    let turnRight = document.querySelector('.slider__right-button');
    let turnLeft = document.querySelector('.slider__left-button');
    let firstSlide = document.getElementById('2');
    let secondSlide = document.createElement('div');
    secondSlide.classList.add('slider2', 'sl');


    function createRightRed() {
        let firstSlideRight = firstSlide.cloneNode(true);
        firstSlideRight.style.position = 'absolute';
        firstSlideRight.style.left = '-100%';
        firstSlideRight.style.display = 'flex';
        sliderContainer.append(firstSlideRight);
    }
    function createLeftRed() {
        let firstSlideLeft = firstSlide.cloneNode(true);
        firstSlideLeft.style.position = 'absolute';
        firstSlideLeft.style.left = '100%';
        firstSlideLeft.style.display = 'flex';
        sliderContainer.append(firstSlideLeft);
    }
    function createLeftBlue() {
        let secondSlideLeft = secondSlide.cloneNode(true);
        secondSlideLeft.style.left = '100%';
        secondSlideLeft.style.top = '0px';
        sliderContainer.append(secondSlideLeft)
    }
    function createRightBlue() {
        let secondSlideRight = secondSlide.cloneNode(true);
        secondSlideRight.style.left = '-100%';
        secondSlideRight.style.top = '0px';
        sliderContainer.append(secondSlideRight);
    }
    function createCenterBlue() {
        let secondSlideCenter = secondSlide.cloneNode(true);
        sliderContainer.prepend(secondSlideCenter);
    }
    function createCenterRed() {
        let firstSlideCenter = firstSlide.cloneNode(true);
        firstSlideCenter.style.display = 'flex';
        sliderContainer.prepend(firstSlideCenter);
        addEvent();
    }
    createLeftBlue();
    createRightBlue();

    let flag = 1;
    turnRight.addEventListener('click', function() {
        let sliders = document.querySelectorAll('.sl')
                if (flag === 1) {
                sliders[0].style.transform = 'translateX(-100%)';
                sliders[1].style.transform = 'translateX(-100%)';
                flag = 0;
                turnRight.style.display = 'none';
                turnLeft.style.display = 'none';
                setTimeout( function() {
                    sliders[0].remove();
                    sliders[1].remove();
                    sliders[2].remove();
                    createLeftRed();
                    createRightRed();
                    createCenterBlue();
                    turnRight.style.display = 'block';
                    turnLeft.style.display = 'block';
                }, 1000);
                return
            }
                if (flag === 0) {
                    sliders[0].style.transform = 'translateX(-100%)';
                    sliders[1].style.transform = 'translateX(-100%)';
                    flag = 1;
                    turnRight.style.display = 'none';
                    turnLeft.style.display = 'none';
                    setTimeout( function() {
                        sliders[0].remove();
                        sliders[1].remove();
                        sliders[2].remove();
                        createLeftBlue();
                        createRightBlue();
                        createCenterRed();
                        turnRight.style.display = 'block';
                        turnLeft.style.display = 'block';
                        }, 1000);
                        return
                }
    });

    turnLeft.addEventListener('click', function() {
        let sliders = document.querySelectorAll('.sl')
                if (flag === 1) {
                sliders[0].style.transform = 'translateX(100%)';
                sliders[2].style.transform = 'translateX(100%)';
                flag = 0;
                turnRight.style.display = 'none';
                turnLeft.style.display = 'none';
                setTimeout( function() {
                    sliders[0].remove();
                    sliders[1].remove();
                    sliders[2].remove();
                    createLeftRed();
                    createRightRed();
                    createCenterBlue();
                    turnRight.style.display = 'block';
                    turnLeft.style.display = 'block';
                }, 1000);
                return
            }
                if (flag === 0) {
                    sliders[0].style.transform = 'translateX(100%)';
                    sliders[2].style.transform = 'translateX(100%)';
                    flag = 1;
                    turnRight.style.display = 'none';
                    turnLeft.style.display = 'none';
                    setTimeout( function() {
                        sliders[0].remove();
                        sliders[1].remove();
                        sliders[2].remove();
                        createLeftBlue();
                        createRightBlue();
                        createCenterRed();
                        turnRight.style.display = 'block';
                        turnLeft.style.display = 'block';
                        }, 1000);
                        return
                }



            });
                
            
            
    let imagesContainer = document.querySelector('.pictures-container');
    let images = imagesContainer.children;

    let tabs = document.querySelector('.portfolio__list');
    tabs.addEventListener('click', pictureSwitching)
    
    
    
    function pictureSwitching() {
        if(event.target.classList.contains('link') && !(event.target.classList.contains('selected'))) {
            let arr = [...tabs.children]
            arr.forEach( (li) => {
                li.classList.remove('selected');
            });
            event.target.classList.add('selected');

            let arrPictures = [...images];
            while (imagesContainer.firstChild) {
                imagesContainer.removeChild(imagesContainer.firstChild);
            }
            for ( let i = 0; i < arrPictures.length; i++) {
                (i === 11) ? imagesContainer.prepend(arrPictures[i]) : imagesContainer.append(arrPictures[i]);
            }

            }
}

    

    imagesContainer.addEventListener('click', setBorderToPicture);
    
    function setBorderToPicture() {
        if (event.target.tagName === 'IMG') {
        let arr = [...images]
        arr.forEach( (img) => {
            img.classList.remove('selected-picture');
        });
        event.target.classList.add('selected-picture')
    }}


    let form = document.querySelector('.contacts-column__form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let modal = document.createElement('div');
        let modalMessage = document.createElement('div');
        let modalBtn = document.createElement('button');
        let spanFirst = document.createElement('span');
        let spanSecond = document.createElement('span');
        let spanThird = document.createElement('span');

        modal.className = 'modal-wrapper';
        modalMessage.className = 'modal';
        modalBtn.className = 'modal-btn';

        spanFirst.innerHTML = 'Письмо отправлено';
        modalBtn.innerHTML = 'ОК';
        
        if (form.article.value.toLowerCase() === 'singolo') {
            spanSecond.innerHTML = 'Тема: Singolo';
        } else if (form.article.value) {
            spanSecond.innerHTML = `Тема: ${form.article.value}`;
        } else spanSecond.innerHTML = 'Без темы';

        if (form.text.value.toLowerCase() === 'portfolio project') {
            spanThird.innerHTML = 'Описание: Portfolio project';
        } else if (form.text.value) {
            spanThird.innerHTML = `Описание: ${form.text.value} `;
        } else  spanThird.innerHTML = 'Без описания';

        modalMessage.append(spanFirst, spanSecond, spanThird, modalBtn);
        modal.append(modalMessage);
        document.body.append(modal);

        setTimeout(() => document.body.addEventListener('click', closeModal), 10);

        function closeModal() {
            if (
                event.target.classList.contains('modal-wrapper') ||
                event.target.classList.contains('modal-btn')
            ) {
                document.querySelector('.modal-wrapper').remove();
                document.body.removeEventListener('click', closeModal);
                form.reset();
            }
        }
    })


    document.querySelector('.burger').addEventListener('click', (e) => {
        document.querySelector('.header__navigation').classList.toggle('header__navigation-active');
        document.querySelector('.burger').classList.toggle('active-burger');
        if (document.documentElement.clientWidth < 400) document.querySelector('.logo').classList.toggle('active-logo');
        createShadow()
        document.querySelector('.header__navigation').addEventListener('click', closeMenu);
        document.body.classList.toggle('overflow-hidden');
        function closeMenu() {
            if (event.target.classList.contains('close-menu')) {
                document.querySelector('.burger').classList.toggle('active-burger');
                document.querySelector('.header__navigation').classList.toggle('header__navigation-active');
                if (document.documentElement.clientWidth < 400) document.querySelector('.logo').classList.toggle('active-logo');
                createShadow();
                document.body.classList.toggle('overflow-hidden');
                document.querySelector('.header__navigation').removeEventListener('click', closeMenu);

            }
        }
    });

    function createShadow() {
        if (document.querySelector('.shadow')) {
            document.querySelector('.shadow').remove();
        } else {
        let shadow = document.createElement('div');
        shadow.classList.add('shadow');
        document.body.append(shadow);
        }
       
    }


    
    



});