// Back to Top functionality
const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '↑';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Image Lightbox
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);

galleryItems.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.innerHTML = `
            <img src="${img.src}" alt="${img.alt}">
            <span class="lightbox-close">×</span>
        `;
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', (e) => {
    if (e.target.className === 'lightbox' || e.target.className === 'lightbox-close') {
        lightbox.classList.remove('active');
    }
});

// Active Navigation Link
const navLinks = document.querySelectorAll('.site-nav a');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});

// Image Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    const loading = document.createElement('div');
    loading.className = 'loading';
    document.body.appendChild(loading);

    let loadedImages = 0;
    const totalImages = images.length;

    function imageLoaded() {
        loadedImages++;
        if (loadedImages === totalImages) {
            loading.style.display = 'none';
        }
    }

    images.forEach(img => {
        if (img.complete) {
            imageLoaded();
        } else {
            img.addEventListener('load', imageLoaded);
            img.addEventListener('error', imageLoaded);
        }
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
