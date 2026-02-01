/**
 * Contact Form Validation - Real-time feedback with accessibility support
 */
(function() {
  'use strict';

  const RULES = {
    name: { required: true, minLength: 2, message: 'Please enter at least 2 characters' },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' },
    phone: { required: false, pattern: /^[\d\s\-\(\)\+\.]*$/, message: 'Please enter a valid phone number' },
    subject: { required: true, message: 'Please select a subject' },
    message: { required: true, minLength: 10, message: 'Please enter at least 10 characters' }
  };

  const PATTERNS = [
    { re: /^contact-name$|^ContactForm-name-/, type: 'name' },
    { re: /^contact-email$|^ContactForm-email-/, type: 'email' },
    { re: /^contact-phone$|^ContactForm-phone-/, type: 'phone' },
    { re: /^contact-subject$|^ContactForm-subject-/, type: 'subject' },
    { re: /^contact-message$|^ContactForm-body-/, type: 'message' }
  ];

  let isSubmitting = false;

  function getType(field) {
    const id = field.id || '';
    for (const p of PATTERNS) if (p.re.test(id)) return p.type;
    return null;
  }

  function validate(field) {
    const type = getType(field);
    if (!type) return true;

    const rules = RULES[type], value = field.value.trim();

    if (rules.required && !value) return showError(field, rules.message);
    if (!rules.required && !value) return showValid(field), true;
    if (rules.minLength && value.length < rules.minLength) return showError(field, rules.message);
    if (rules.pattern && !rules.pattern.test(value)) return showError(field, rules.message);

    return showValid(field), true;
  }

  function showError(field, msg) {
    clearState(field);
    const wrap = field.closest('.contact-form__field');
    if (!wrap) return false;

    field.setAttribute('aria-invalid', 'true');
    field.style.borderColor = '#c62828';

    const err = document.createElement('span');
    err.id = `${field.id}-error`;
    err.className = 'contact-form__field-error';
    err.textContent = msg;
    err.setAttribute('role', 'alert');
    Object.assign(err.style, { display: 'block', color: '#c62828', fontSize: '1.3rem', marginTop: '0.4rem' });

    field.setAttribute('aria-describedby', err.id);
    wrap.appendChild(err);
    return false;
  }

  function showValid(field) {
    clearState(field);
    field.setAttribute('aria-invalid', 'false');
    field.style.borderColor = '#2e7d32';

    const wrap = field.closest('.contact-form__field');
    if (!wrap || wrap.querySelector('.contact-form__field-valid')) return;
    if (field.tagName === 'TEXTAREA' || field.tagName === 'SELECT') return;

    const chk = document.createElement('span');
    chk.className = 'contact-form__field-valid';
    chk.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
    Object.assign(chk.style, { position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' });

    wrap.style.position = 'relative';
    wrap.appendChild(chk);
  }

  function clearState(field) {
    const wrap = field.closest('.contact-form__field');
    if (!wrap) return;

    const err = wrap.querySelector('.contact-form__field-error');
    const chk = wrap.querySelector('.contact-form__field-valid');
    if (err) err.remove();
    if (chk) chk.remove();

    field.removeAttribute('aria-describedby');
    field.removeAttribute('aria-invalid');
    field.style.borderColor = '';
  }

  function handleSubmit(e) {
    if (isSubmitting) { e.preventDefault(); return; }

    const form = e.target;
    let firstInvalid = null;

    form.querySelectorAll('input, select, textarea').forEach(field => {
      if (getType(field) && !validate(field) && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      e.preventDefault();
      firstInvalid.focus();
      firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    isSubmitting = true;
    const btn = form.querySelector('.contact-form__submit');
    if (btn) {
      btn.disabled = true;
      btn.dataset.originalText = btn.textContent;
      btn.innerHTML = '<span class="contact-form__spinner"></span> Sending...';
      injectSpinnerCSS();
    }
  }

  function injectSpinnerCSS() {
    if (document.getElementById('cf-spinner-css')) return;
    const s = document.createElement('style');
    s.id = 'cf-spinner-css';
    s.textContent = `.contact-form__spinner{display:inline-block;width:16px;height:16px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:cf-spin .8s linear infinite;vertical-align:middle;margin-right:8px}@keyframes cf-spin{to{transform:rotate(360deg)}}`;
    document.head.appendChild(s);
  }

  function setupForm(form) {
    form.querySelectorAll('input, select, textarea').forEach(field => {
      if (getType(field)) {
        field.addEventListener('blur', () => validate(field));
        field.addEventListener('input', () => clearState(field));
      }
    });
    form.addEventListener('submit', handleSubmit);
  }

  function init() {
    document.querySelectorAll('.contact-form').forEach(setupForm);
    // Scroll to success message if present
    const success = document.querySelector('.contact-form__success');
    if (success) {
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      success.setAttribute('tabindex', '-1');
      success.focus();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
