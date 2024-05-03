const burger = document.getElementById('sidebarToggle'),
        sidebar = document.getElementById('sidebar'),
        page = document.getElementById('page'),
        main = document.getElementById('main'),
        body = document.body;

burger.addEventListener('click', (e) => {
    if (body.classList.contains('show-sidebar')) {
        closeSidebar ();
    } else {
        showSidebar ();
    }
})

function showSidebar () {
    sidebar.classList.add('show-sidebar');

    let mask = document.createElement('div');
    mask.classList.add('page__mask');
    mask.addEventListener('click', closeSidebar);
    main.appendChild(mask);

    body.classList.add('show-sidebar');
}

function closeSidebar () {
    body.classList.remove('show-sidebar');
    sidebar.classList.remove('show-sidebar');

}



// =================filter==================

const filter = document.querySelector('.filter'),
      blockFil = document.querySelectorAll('.block__filter');

if (filter) {
    blockFil.forEach(item => {
        item.addEventListener('click', event => {
            let blockDpd = item.querySelector('.block__filter-dropdown'),
                icon = item.querySelector('.block__filter-icon');
            blockDpd.classList.toggle('active');
            icon.classList.toggle('active');

            if (event.target.classList.contains('block__filter-item')) {
                item.querySelector('.block__filter-value').textContent = event.target.textContent;
            }
        })
    })
}

// =================Slider==================

const populerSlider = new Swiper('.popular__slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.popular__slider-next',
      prevEl: '.popular__slider-prev',
    },

    breakpoints: {
        992: {
            slidesPerView: 3,
        },

        660: {
            slidesPerView: 2,
        }
      }
});

const reviewsSlider = new Swiper('.reviews__slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    autoHeight: true,

    // Navigation arrows
    navigation: {
      nextEl: '.slider__reviews-next',
      prevEl: '.slider__reviews-prev',
    }
});

// ==========gallery====================

const galleryItem = document.querySelectorAll('.gallery__item');

if (galleryItem.length > 0) {
    galleryItem.forEach(item => {
        new Swiper(item, {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
            },
            effect: 'fade',
         })
    })
}