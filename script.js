// Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.getAttribute('href') === '#') return;
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
          }
        }
      });
    });

    // Event Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        // Update active tab button
        tabBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        
        // Show corresponding content
        tabContents.forEach(content => {
          content.classList.remove('active');
          if (content.id === tabId) {
            content.classList.add('active');
          }
        });
      });
    });

    // Mystery Corner Quiz
    const options = document.querySelectorAll('.mystery-option');
    const resultDisplay = document.querySelector('.mystery-result');
    const nextBtn = document.getElementById('next-question');

    options.forEach(option => {
      option.addEventListener('click', () => {
        if (option.getAttribute('data-correct') === 'true') {
          resultDisplay.textContent = 'Correct! Well done.';
          resultDisplay.className = 'mystery-result correct';
        } else {
          resultDisplay.textContent = 'Incorrect. Try again!';
          resultDisplay.className = 'mystery-result incorrect';
        }
        resultDisplay.style.display = 'block';
      });
    });

    nextBtn.addEventListener('click', () => {
      // In a real implementation, this would fetch a new question
      resultDisplay.style.display = 'none';
      alert('Fetching next question... (This would be implemented with a proper backend)');
    });

    // Form Submissions
    const membershipForm = document.getElementById('membership-form');
    const contactForm = document.getElementById('contact-form');

    if (membershipForm) {
      membershipForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Application submitted successfully! We will contact you soon.');
        membershipForm.reset();
      });
    }

    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      });
    }