/*
 * Animation & Interaction Scripts
 * Smooth Scrolling | Scroll Animations | Carousel | Form Validation
 */

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================

const scrollAnimationConfig = {
  root: null,
  rootMargin: '0px 0px -100px 0px', // Trigger 100px before viewport
  threshold: 0.1
};

const scrollAnimationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: Unobserve after animation to improve performance
      // scrollAnimationObserver.unobserve(entry.target);
    }
  });
}, scrollAnimationConfig);

// Observe all animatable elements
function initScrollAnimations() {
  const animatableElements = document.querySelectorAll(
    '.animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale, ' +
    '.service-card, .property-card, .testimonial-card'
  );

  animatableElements.forEach((el, index) => {
    // Add stagger index for child elements
    if (el.closest('.stagger-children')) {
      el.style.setProperty('--stagger-index', index);
    }
    scrollAnimationObserver.observe(el);
  });
}

// ============================================
// HERO CAROUSEL
// ============================================

class HeroCarousel {
  constructor(element) {
    this.carousel = element;
    this.slides = Array.from(element.querySelectorAll('.carousel-slide'));
    this.dots = Array.from(element.querySelectorAll('.carousel-dot'));
    this.prevBtn = element.querySelector('.carousel-arrow-prev');
    this.nextBtn = element.querySelector('.carousel-arrow-next');
    this.currentIndex = 0;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000; // 5 seconds

    this.init();
  }

  init() {
    // Set first slide as active
    this.showSlide(0);

    // Add event listeners
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.previousSlide());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.showSlide(index));
    });

    // Start autoplay
    this.startAutoPlay();

    // Pause on hover
    this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.previousSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });

    // Touch support
    this.addTouchSupport();
  }

  showSlide(index) {
    // Remove active class from all slides and dots
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide and dot
    this.slides[index].classList.add('active');
    this.dots[index].classList.add('active');

    this.currentIndex = index;
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(nextIndex);
  }

  previousSlide() {
    const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(prevIndex);
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  addTouchSupport() {
    let touchStartX = 0;
    let touchEndX = 0;

    this.carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    this.carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    });

    this.handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          this.nextSlide();
        } else {
          this.previousSlide();
        }
      }
    };
  }
}

// ============================================
// PROPERTY FILTERS
// ============================================

class PropertyFilter {
  constructor(element) {
    this.container = element;
    this.filterBtns = Array.from(element.querySelectorAll('.filter-btn'));
    this.propertyCards = Array.from(document.querySelectorAll('.property-card'));

    this.init();
  }

  init() {
    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => this.filter(btn));
    });
  }

  filter(btn) {
    const category = btn.dataset.category;

    // Update active button
    this.filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter properties
    this.propertyCards.forEach(card => {
      const cardCategory = card.dataset.category;

      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
        // Re-trigger animation
        card.classList.remove('visible');
        setTimeout(() => card.classList.add('visible'), 50);
      } else {
        card.style.display = 'none';
      }
    });
  }
}

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================

class TestimonialsCarousel {
  constructor(element) {
    this.carousel = element;
    this.track = element.querySelector('.testimonials-track');
    this.cards = Array.from(element.querySelectorAll('.testimonial-card'));
    this.prevBtn = element.querySelector('.testimonials-prev');
    this.nextBtn = element.querySelector('.testimonials-next');
    this.currentIndex = 0;
    this.cardsToShow = this.getCardsToShow();

    this.init();
  }

  init() {
    this.updateCarousel();

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.previous());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    // Update on resize
    window.addEventListener('resize', () => {
      this.cardsToShow = this.getCardsToShow();
      this.updateCarousel();
    });
  }

  getCardsToShow() {
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
  }

  updateCarousel() {
    const cardWidth = 100 / this.cardsToShow;
    const offset = -(this.currentIndex * cardWidth);

    this.track.style.transform = `translateX(${offset}%)`;

    // Update button states
    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentIndex === 0;
    }

    if (this.nextBtn) {
      const maxIndex = Math.max(0, this.cards.length - this.cardsToShow);
      this.nextBtn.disabled = this.currentIndex >= maxIndex;
    }
  }

  next() {
    const maxIndex = Math.max(0, this.cards.length - this.cardsToShow);
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }
}

// ============================================
// FORM VALIDATION
// ============================================

class FormValidator {
  constructor(form) {
    this.form = form;
    this.inputs = Array.from(form.querySelectorAll('input, textarea, select'));
    this.submitBtn = form.querySelector('[type="submit"]');

    this.init();
  }

  init() {
    this.inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');

    // Clear previous error
    this.clearError(field);

    // Required field check
    if (required && !value) {
      this.showError(field, 'This field is required');
      return false;
    }

    // Email validation
    if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        this.showError(field, 'Please enter a valid email address');
        return false;
      }
    }

    // Phone validation
    if (type === 'tel' && value) {
      const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
      if (!phoneRegex.test(value)) {
        this.showError(field, 'Please enter a valid phone number');
        return false;
      }
    }

    // Min length
    if (field.hasAttribute('minlength') && value) {
      const minLength = parseInt(field.getAttribute('minlength'));
      if (value.length < minLength) {
        this.showError(field, `Minimum ${minLength} characters required`);
        return false;
      }
    }

    return true;
  }

  showError(field, message) {
    field.classList.add('error');

    const errorEl = document.createElement('div');
    errorEl.className = 'form-error';
    errorEl.textContent = message;

    field.parentNode.appendChild(errorEl);
  }

  clearError(field) {
    field.classList.remove('error');

    const errorEl = field.parentNode.querySelector('.form-error');
    if (errorEl) {
      errorEl.remove();
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let isValid = true;
    this.inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    if (isValid) {
      // Show loading state
      if (this.submitBtn) {
        this.submitBtn.disabled = true;
        this.submitBtn.textContent = 'Sending...';
      }

      // Submit form (you can add actual form submission here)
      console.log('Form is valid, submitting...');

      // Simulate API call
      setTimeout(() => {
        this.showSuccess();
        this.form.reset();

        if (this.submitBtn) {
          this.submitBtn.disabled = false;
          this.submitBtn.textContent = 'Send Message';
        }
      }, 2000);
    } else {
      // Focus first error field
      const firstError = this.form.querySelector('.error');
      if (firstError) {
        firstError.focus();
      }
    }
  }

  showSuccess() {
    const successEl = document.createElement('div');
    successEl.className = 'form-success';
    successEl.textContent = 'Thank you! Your message has been sent successfully.';

    this.form.prepend(successEl);

    setTimeout(() => {
      successEl.remove();
    }, 5000);
  }
}

// ============================================
// NAVBAR SCROLL BEHAVIOR
// ============================================

class StickyNavbar {
  constructor(navbar) {
    this.navbar = navbar;
    this.scrollThreshold = 100;
    this.lastScroll = 0;

    this.init();
  }

  init() {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Add shadow on scroll
      if (currentScroll > this.scrollThreshold) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }

      // Hide on scroll down, show on scroll up
      if (currentScroll > this.lastScroll && currentScroll > 200) {
        this.navbar.classList.add('hidden');
      } else {
        this.navbar.classList.remove('hidden');
      }

      this.lastScroll = currentScroll;
    });
  }
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize scroll animations
  initScrollAnimations();

  // Initialize hero carousel
  const heroCarousel = document.querySelector('.carousel');
  if (heroCarousel) {
    new HeroCarousel(heroCarousel);
  }

  // Initialize property filters
  const propertyFilters = document.querySelector('.property-filters');
  if (propertyFilters) {
    new PropertyFilter(propertyFilters);
  }

  // Initialize testimonials carousel
  const testimonialsCarousel = document.querySelector('.testimonials-carousel');
  if (testimonialsCarousel) {
    new TestimonialsCarousel(testimonialsCarousel);
  }

  // Initialize form validation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    new FormValidator(contactForm);
  }

  // Initialize sticky navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    new StickyNavbar(navbar);
  }

  // Initialize lazy loading
  initLazyLoading();

  // Log initialization
  console.log('All animations and interactions initialized successfully!');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    HeroCarousel,
    PropertyFilter,
    TestimonialsCarousel,
    FormValidator,
    StickyNavbar,
    initScrollAnimations,
    initLazyLoading,
    debounce,
    throttle
  };
}
