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

  // ============================================
  // Toast Notification System
  // ============================================
  const initToastSystem = () => {
    // Create toast container if it doesn't exist
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      container.setAttribute('aria-live', 'polite');
      container.setAttribute('aria-atomic', 'true');
      document.body.appendChild(container);
    }

    // Toast function available globally
    window.LLL = window.LLL || {};
    window.LLL.toast = {
      show: (message, options = {}) => {
        const defaults = {
          type: 'success', // success, error, warning, info
          duration: 4000,
          showProgress: true
        };
        const settings = { ...defaults, ...options };

        const toast = document.createElement('div');
        toast.className = `toast toast--${settings.type}`;
        toast.innerHTML = `
          <div class="toast__icon">
            ${getToastIcon(settings.type)}
          </div>
          <div class="toast__content">
            <p class="toast__message">${message}</p>
          </div>
          <button class="toast__close" aria-label="Dismiss notification">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          ${settings.showProgress ? `<div class="toast__progress" style="animation-duration: ${settings.duration}ms"></div>` : ''}
        `;

        container.appendChild(toast);

        // Trigger entrance animation
        requestAnimationFrame(() => {
          toast.classList.add('toast--visible');
        });

        // Close button
        toast.querySelector('.toast__close').addEventListener('click', () => {
          dismissToast(toast);
        });

        // Auto dismiss
        if (settings.duration > 0) {
          setTimeout(() => dismissToast(toast), settings.duration);
        }

        return toast;
      }
    };

    function dismissToast(toast) {
      toast.classList.add('toast--exiting');
      toast.addEventListener('animationend', () => {
        toast.remove();
      }, { once: true });
    }

    function getToastIcon(type) {
      const icons = {
        success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
        warning: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
        info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
      };
      return icons[type] || icons.info;
    }
  };

  // ============================================
  // Cart Badge Bounce Animation
  // ============================================
  const initCartBadgeBounce = () => {
    // Listen for cart updates
    document.addEventListener('cart:updated', (e) => {
      const badges = document.querySelectorAll('.header__cart-count');
      badges.forEach(badge => {
        // Update count
        if (e.detail && typeof e.detail.item_count !== 'undefined') {
          badge.textContent = e.detail.item_count;
        }
        // Trigger bounce animation
        badge.classList.remove('cart-badge-bounce');
        void badge.offsetWidth; // Force reflow
        badge.classList.add('cart-badge-bounce');
      });
    });

    // Override addToCart to dispatch event
    const originalAddToCart = window.addToCart;
    if (originalAddToCart) {
      window.addToCart = async (formData) => {
        const result = await originalAddToCart(formData);
        // Fetch updated cart and dispatch event
        const cart = await window.getCart();
        document.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }));
        // Show toast notification
        if (window.LLL && window.LLL.toast) {
          window.LLL.toast.show('Added to cart!', { type: 'success', duration: 3000 });
        }
        return result;
      };
    }
  };

  // ============================================
  // Enhanced Header Scroll (Hide/Show)
  // ============================================
  const initEnhancedHeaderScroll = () => {
    const header = document.querySelector('.header');
    if (!header) return;

    header.classList.add('header--animated');

    let lastScrollY = window.scrollY;
    let scrollDelta = 0;
    const scrollThreshold = 10;
    const hideThreshold = 200;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      scrollDelta = currentScrollY - lastScrollY;

      // Add background when scrolled
      if (currentScrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }

      // Hide/show based on scroll direction
      if (currentScrollY > hideThreshold) {
        if (scrollDelta > scrollThreshold) {
          // Scrolling down - hide header
          header.classList.add('header--hidden');
        } else if (scrollDelta < -scrollThreshold) {
          // Scrolling up - show header
          header.classList.remove('header--hidden');
        }
      } else {
        // Near top - always show
        header.classList.remove('header--hidden');
      }

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

  // ============================================
  // Grid Stagger Animation
  // ============================================
  const initGridStagger = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const grids = document.querySelectorAll('.grid, .collection-grid, .product-grid');

    if (grids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('grid-stagger-animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    grids.forEach(grid => observer.observe(grid));
  };

  // ============================================
  // 3D Card Tilt Effect
  // ============================================
  const init3DTilt = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if ('ontouchstart' in window) return; // Skip on touch devices

    const cards = document.querySelectorAll('.product-card, .collection-card');

    cards.forEach(card => {
      card.classList.add('card-3d-tilt');

      // Add shine overlay
      const shine = document.createElement('div');
      shine.className = 'card-3d-tilt__shine';
      card.appendChild(shine);

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const tiltX = (y - centerY) / centerY * -5;
        const tiltY = (x - centerX) / centerX * 5;
        const shineAngle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;

        card.style.setProperty('--tilt-x', `${tiltX}deg`);
        card.style.setProperty('--tilt-y', `${tiltY}deg`);
        card.style.setProperty('--shine-angle', `${shineAngle}deg`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      });
    });
  };

  // ============================================
  // Text Splitter Utility
  // ============================================
  window.LLL = window.LLL || {};
  window.LLL.textSplitter = {
    split: (element, options = {}) => {
      const defaults = { type: 'chars', staggerDelay: 30 };
      const settings = { ...defaults, ...options };

      const text = element.textContent;
      element.innerHTML = '';
      element.classList.add('text-reveal-chars');

      [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${i * settings.staggerDelay}ms`;
        element.appendChild(span);
      });
    }
  };

  // ============================================
  // Button Loading State
  // ============================================
  const initButtonLoading = () => {
    document.addEventListener('click', (e) => {
      const button = e.target.closest('[data-loading-on-click]');
      if (button && !button.classList.contains('button--loading')) {
        button.classList.add('button--loading');
        // Remove after timeout or can be manually removed
        setTimeout(() => {
          button.classList.remove('button--loading');
        }, 5000);
      }
    });

    // Expose loading function globally
    window.LLL = window.LLL || {};
    window.LLL.setButtonLoading = (button, isLoading) => {
      if (isLoading) {
        button.classList.add('button--loading');
      } else {
        button.classList.remove('button--loading');
      }
    };
  };

  // ============================================
  // Laser Reveal Animation Trigger
  // ============================================
  const initLaserReveal = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const laserElements = document.querySelectorAll('.laser-reveal');

    if (laserElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('laser-reveal--active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    laserElements.forEach(el => observer.observe(el));
  };

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu
    initMobileMenu();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize smooth scroll
    initSmoothScroll();

    // Initialize enhanced header scroll (replaces basic version)
    initEnhancedHeaderScroll();

    // Initialize lazy image loading
    initLazyImages();

    // Initialize toast notification system
    initToastSystem();

    // Initialize cart badge bounce
    initCartBadgeBounce();

    // Initialize grid stagger animations
    initGridStagger();

    // Initialize 3D tilt effect
    init3DTilt();

    // Initialize button loading states
    initButtonLoading();

    // Initialize laser reveal animations
    initLaserReveal();

    console.log('LayerLaunch Laser Labs - Theme initialized with premium animations');
  });

})();
