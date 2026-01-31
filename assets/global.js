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

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu
    initMobileMenu();

    console.log('LayerLaunch Laser Labs - Theme initialized');
  });

})();
