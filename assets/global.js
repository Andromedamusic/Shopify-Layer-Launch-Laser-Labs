/* LayerLaunch Laser Labs - Global JavaScript */

(function() {
  'use strict';

  // Utility functions
  const debounce = (fn, wait) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  };

  // Fetch configuration for AJAX requests
  const fetchConfig = (type = 'json') => {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': `application/${type}`
      }
    };
  };

  // Add to cart function
  window.addToCart = async (formData) => {
    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  };

  // Get cart
  window.getCart = async () => {
    try {
      const response = await fetch('/cart.js');
      return await response.json();
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw error;
    }
  };

  // Format money
  window.formatMoney = (cents, format = '${{amount}}') => {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }

    const value = (cents / 100).toFixed(2);
    return format.replace('{{amount}}', value);
  };

  // Mobile menu functionality
  const initMobileMenu = () => {
    const mobileToggle = document.querySelector('.header__mobile-toggle');
    const mobileDrawer = document.querySelector('.header__mobile-drawer');
    const mobileOverlay = document.querySelector('.header__mobile-overlay');
    const mobileClose = document.querySelector('.header__mobile-close');

    if (!mobileToggle || !mobileDrawer) return;

    const openMenu = () => {
      mobileDrawer.classList.add('is-open');
      mobileOverlay?.classList.add('is-visible');
      mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      mobileDrawer.classList.remove('is-open');
      mobileOverlay?.classList.remove('is-visible');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
    });

    mobileClose?.addEventListener('click', closeMenu);
    mobileOverlay?.addEventListener('click', closeMenu);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        closeMenu();
      }
    });
  };

  // Scroll Animation Observer
  const initScrollAnimations = () => {
    // Skip if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Make all animated elements visible immediately
      document.querySelectorAll('.animate-on-scroll, .section-reveal').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    const animatedElements = document.querySelectorAll('.animate-on-scroll, .section-reveal');

    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optionally unobserve after animation (improves performance)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    animatedElements.forEach(el => observer.observe(el));
  };

  // Smooth scroll for anchor links
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  // Header scroll behavior (hide on scroll down, show on scroll up)
  const initHeaderScroll = () => {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;

      // Add background when scrolled
      if (currentScrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }

      // Hide/show on scroll direction (optional - uncomment if desired)
      // if (currentScrollY > lastScrollY && currentScrollY > 200) {
      //   header.classList.add('header--hidden');
      // } else {
      //   header.classList.remove('header--hidden');
      // }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });
  };

  // Lazy load images with fade-in effect
  const initLazyImages = () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(img => {
      if (img.complete) {
        img.classList.add('is-loaded');
      } else {
        img.addEventListener('load', () => {
          img.classList.add('is-loaded');
        });
      }
    });
  };

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu
    initMobileMenu();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize smooth scroll
    initSmoothScroll();

    // Initialize header scroll behavior
    initHeaderScroll();

    // Initialize lazy image loading
    initLazyImages();

    console.log('LayerLaunch Laser Labs - Theme initialized');
  });

})();
