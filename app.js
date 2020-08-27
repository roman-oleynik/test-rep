window.onload = () => {
    class Burger {
        constructor() {
            this._isBurgerButtonActive = false;
        }
        toggle() {
            this._isBurgerButtonActive = !this._isBurgerButtonActive;
            for (var i = 0; i < document.querySelectorAll('.burger-button__item').length; i++) {
                document.querySelectorAll('.burger-button__item')[i].classList.toggle(`burger-button__item_${i+1}_active`);
            }
            if (this._isBurgerButtonActive) {
                document.querySelector('.header__content').classList.remove("hidden");
                document.querySelector('.header__content').classList.add("header__content_visible");
            } else {
                document.querySelector('.header__content').classList.remove("header__content_visible");
                document.querySelector('.header__content').classList.add("hidden");
            }
        };
        close() {
            this._isBurgerButtonActive = false;
            document.querySelector('.header__content').classList.remove("header__content_visible");
            document.querySelector('.header__content').classList.add("hidden");
    
            for (var i = 0; i < document.querySelectorAll('.burger-button__item').length; i++) {
                document.querySelectorAll('.burger-button__item')[i].classList.remove(`burger-button__item_${i+1}_active`);
            }
        }
    }
    class Slider {
        constructor() {
            this._left = 0;
            this._slides = document.querySelector('.slides');
        }
        next() {
            if (this._left > -70 ) {
                this._left -= 35;
            } else {
                this._left = -70;
            }
            this._slides.style.left = this._left + "vw";
            this._slides.style.transition = "0.5s";
        };
        prev() {
            if (this._left < 0) {
                this._left += 35;
            } else {
                this._left = 0;
            }
            this._slides.style.left = this._left + "vw";
            this._slides.style.transition = "0.5s";
        }
        getLeft() {
            return this._left;
        }
    }

    const burgerButton = new Burger();

    document.querySelector('.burger-button').onclick = () => {
        burgerButton.toggle();
    };
    document.querySelectorAll('.menu__link').forEach(el => {
        el.onclick = () => {
            burgerButton.close();
        }
    });
    
    const slider = new Slider();
    document.querySelector('.slides__button_prev').onclick = () => {
        slider.prev();
        if (slider.getLeft() >= 0) {
            document.querySelector('.slides__button_prev').disabled = true;
        }
        document.querySelector('.slides__button_next').disabled = false;
    }
    document.querySelector('.slides__button_next').onclick = () => {
        slider.next();
        if (slider.getLeft() <= -70) {
            document.querySelector('.slides__button_next').disabled = true;
        } 
        document.querySelector('.slides__button_prev').disabled = false;
    }
}