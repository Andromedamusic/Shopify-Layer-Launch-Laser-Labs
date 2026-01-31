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

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize any global components here
    console.log('LayerLaunch Laser Labs - Theme initialized');
  });

})();
