addEventListener('DOMContentLoaded', function() {
    // active class header links
    let nav = document.querySelector('.navigation').children;
    for (let i = 0; i < nav.length; i++) {
        let link = nav[i].querySelector('a')
        link.addEventListener('click', addActiveClass)
    }

    function addActiveClass() {
        let li = event.target.parentNode;
    
        for (let j = 0; j < nav.length; j++) {
            nav[j].classList.remove('active-nav');
        }
    
        li.classList.add('active-nav')
    }




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
        firstSlideRight.style.left = '1020px';
        firstSlideRight.style.display = 'block';
        sliderContainer.append(firstSlideRight);
    }
    function createLeftRed() {
        let firstSlideLeft = firstSlide.cloneNode(true);
        firstSlideLeft.style.position = 'absolute';
        firstSlideLeft.style.left = '-1020px';
        firstSlideLeft.style.display = 'block';
        sliderContainer.append(firstSlideLeft);
    }
    function createLeftBlue() {
        let secondSlideLeft = secondSlide.cloneNode(true);
        secondSlideLeft.style.left = '-1020px';
        secondSlideLeft.style.top = '0px';
        sliderContainer.append(secondSlideLeft)
    }
    function createRightBlue() {
        let secondSlideRight = secondSlide.cloneNode(true);
        secondSlideRight.style.left = '1020px';
        secondSlideRight.style.top = '0px';
        sliderContainer.append(secondSlideRight);
    }
    function createCenterBlue() {
        let secondSlideCenter = secondSlide.cloneNode(true);
        sliderContainer.prepend(secondSlideCenter);
    }
    function createCenterRed() {
        let firstSlideCenter = firstSlide.cloneNode(true);
        firstSlideCenter.style.display = 'block';
        sliderContainer.prepend(firstSlideCenter);
        addEvent();
    }
    createLeftBlue();
    createRightBlue();

    let flag = 1;
    turnRight.addEventListener('click', function() {
        let sliders = document.querySelectorAll('.sl')
                if (flag === 1) {
                sliders[0].style.transform = 'translateX(1020px)';
                sliders[1].style.transform = 'translateX(1020px)';
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
                    sliders[0].style.transform = 'translateX(1020px)';
                    sliders[1].style.transform = 'translateX(1020px)';
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
                sliders[0].style.transform = 'translateX(-1020px)';
                sliders[2].style.transform = 'translateX(-1020px)';
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
                    sliders[0].style.transform = 'translateX(-1020px)';
                    sliders[2].style.transform = 'translateX(-1020px)';
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

    ( () => {
    for( let i = 0; i < images.length; i++) {
        images[i].style.order = i + 1;
    }}
    )()

    let tabs = document.querySelector('.portfolio__list');
    tabs.addEventListener('click', pictureSwitching)
    
    
    
    function pictureSwitching() {
        if(event.target.classList.contains('link') && !(event.target.classList.contains('selected'))) {
            let arr = [...tabs.children]
            arr.forEach( (li) => {
                li.classList.remove('selected');
            });
            event.target.classList.add('selected');
        for (let i = 0; i < images.length; i++) {
            let temp = +images[i].style.order;
            images[i].style.order = temp + 1;
            if (images[i].style.order > 12) images[i].style.order = 1 ;
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



    
    



});