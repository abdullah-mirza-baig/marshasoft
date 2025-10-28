/**
* Template Name: HeroBiz
* Template URL: https://bootstrapmade.com/herobiz-bootstrap-business-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
   window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
  }, 1500); // hide after 1.5s
});
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);








  
})();








//service detail page additions :
/**
 * Dynamic Service Details Section
 */
const services = {
  web: {
    heading: "Stunning & Responsive Website Designing",
    intro: "Your website is your digital storefront. We design responsive, modern websites that convert visitors into customers.",
    image: "assets/img/services-1.jpg",
    content: `
      <h3>Custom-built websites that reflect your brand</h3>
      <p>We design pixel-perfect layouts with an emphasis on usability, speed, and aesthetics. Whether it’s a landing page or full corporate site, we’ve got you.</p>
      <ul>
        <li><i class="bi bi-check-circle"></i> <span>Mobile-first, fast-loading design</span></li>
        <li><i class="bi bi-check-circle"></i> <span>SEO-friendly and scalable</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Customized to your business goals</span></li>
      </ul>
      <div class="btn-wrapper-cart">
          <a href="">Add To Cart</a>
      </div>
    `
  },
  app: {
    heading: "Application Design & Development",
    intro: "We develop intuitive web and mobile applications — from MVPs to full-scale platforms.",
    image: "assets/img/services-22.jpg",
    content: `
      <h3>From idea to scalable product</h3>
      <p>Using cutting-edge technologies and robust architecture, we build apps that scale with your users.</p>
      <ul>
        <li><i class="bi bi-check-circle"></i> <span>Clean UI/UX and smooth performance</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Cross-platform compatibility</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Secure and easy to maintain</span></li>
      </ul>
      <div class="btn-wrapper-cart">
          <a href="">Add To Cart</a>
        </div>
    `
  },
  smm: {
    heading: "Social Media Marketing",
    intro: "Grow your brand with strategic, creative, and result-driven social campaigns.",
    image: "assets/img/services-33.jpg",
    content: `
      <h3>Engage, grow and convert your audience</h3>
      <p>We craft strategies that speak directly to your audience on the right platforms.</p>
      <ul>
        <li><i class="bi bi-check-circle"></i> <span>Platform-specific content strategies</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Analytics and performance reporting</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Paid ad campaign setup & optimization</span></li>
      </ul>
      <div class="btn-wrapper-cart">
          <a href="">Add To Cart</a>
        </div>
    `
  },
  seo: {
    heading: "SEO Optimization",
    intro: "Boost your organic visibility with our proven SEO strategies.",
    image: "assets/img/services-44.jpg",
    content: `
      <h3>Rank higher. Get more traffic. Grow organically.</h3>
      <p>We improve your website’s structure, content, and authority to ensure you’re seen by the right audience.</p>
      <ul>
        <li><i class="bi bi-check-circle"></i> <span>On-page & off-page optimization</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Technical SEO audits</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Content strategy & keyword targeting</span></li>
      </ul>
      <div class="btn-wrapper-cart">
          <a href="">Add To Cart</a>
        </div>
    `
  },
  ads: {
    heading: "Google Ads Campaigns",
    intro: "Get instant visibility and drive high-quality traffic with expertly crafted PPC campaigns.",
    image: "assets/img/services-55.jpg",
    content: `
      <h3>Maximize ROI with targeted advertising</h3>
      <p>We handle setup, targeting, bidding, and reporting so you get the most out of your ad spend.</p>
      <ul>
        <li><i class="bi bi-check-circle"></i> <span>Search, Display & Video Ads</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Conversion tracking & reporting</span></li>
        <li><i class="bi bi-check-circle"></i> <span>A/B testing and campaign scaling</span></li>
      </ul>
      <div class="btn-wrapper-cart">
          <a href="">Add To Cart</a>
        </div>
    `
  },
  saas: {
    heading: "Software & SaaS Development",
    intro: "We build secure, scalable, and reliable SaaS platforms tailored to your market needs.",
    image: "assets/img/services-5.jpg",
    content: `
      <h3>Full-cycle software development services</h3>
      <p>We engineer powerful systems using modern tools and cloud-native solutions.</p>
      <ul>
        <li><i class="bi bi-check-circle"></i> <span>Modular architecture for flexibility</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Custom dashboards and APIs</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Ongoing maintenance & updates</span></li>
      </ul>
      <div class="btn-wrapper-cart">
          <a href="">Add To Cart</a>
        </div>
    `
  },
  chatbot: {
    heading: "AI-Powered Chat Bots",
    intro: "Automate support and sales with smart, conversational bots that actually help users.",
    image: "assets/img/services-7.jpg",
    content: `
      <h3>Engage users 24/7 with chat automation</h3>
      <p>Our bots handle FAQs, bookings, and lead generation — seamlessly integrated into your website or social platforms.</p>
      <ul>
        <li><i class="bi bi-check-circle"></i> <span>Custom conversation flows</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Live agent handoff options</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Multilingual and platform-ready</span></li>
      </ul>
      <div class="btn-wrapper-cart">
          <a href="">Add To Cart</a>
        </div>
    `
  }
};

document.querySelectorAll('.services-list a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Update active class
    document.querySelector('.services-list a.active')?.classList.remove('active');
    this.classList.add('active');

    const selected = this.getAttribute('data-service');
    const service = services[selected];

    if (service) {
      // Update text
      document.querySelector('#service-details h4').textContent = service.heading;
      document.querySelector('#service-details .col-lg-4 p').textContent = service.intro;
      document.querySelector('#service-details .services-img').src = service.image;
      document.querySelector('#service-details .col-lg-8').innerHTML = `
        <img src="${service.image}" alt="" class="img-fluid services-img">
        ${service.content}
      `;
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const hash = window.location.hash;

//   if (hash) {
//     // Remove the # from hash
//     const id = hash.substring(1);

//     // Scroll to the element
//     const target = document.getElementById(id);
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });

//       // Wait a moment for scroll, then simulate a click to change content
//       setTimeout(() => {
//         target.click(); // This will trigger the content switch logic
//       }, 500); // 500ms to ensure scroll finishes
//     }
//   }
// });



//   document.addEventListener("DOMContentLoaded", function () {
//     function activateTabFromHash() {
//       const hash = window.location.hash;

//       if (hash) {
//         const tabButton = document.querySelector(`[data-bs-toggle="tab"][href="${hash}"]`);
//         const tabContent = document.querySelector(hash);

//         if (tabButton && tabContent) {
//           const tab = new bootstrap.Tab(tabButton);
//           tab.show();
//         }
//       }
//     }

//     // On page load
//     activateTabFromHash();

//     // On hashchange (if user clicks the link again without page reload)
//     window.addEventListener("hashchange", activateTabFromHash);
//   });

document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;

  if (hash) {
    const id = hash.substring(1);
    const target = document.getElementById(id);

    if (target) {
      // Scroll & simulate click after scroll finishes
      setTimeout(() => {
        target.click();
      }, 300);
    }
  }

  // Also handle hash change (in case someone clicks from footer inside same page)
  window.addEventListener("hashchange", () => {
    const id = location.hash.replace('#', '');
    const target = document.getElementById(id);
    if (target) target.click();
  });
});

// document.getElementById("contact-form").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const form = e.target;
//   const formData = new FormData(form);

//   form.querySelector(".loading").style.display = "block";
//   form.querySelector(".error-message").style.display = "none";
//   form.querySelector(".sent-message").style.display = "none";

//   fetch("https://formsubmit.co/marshasoftllc@gmail.com", {
//     method: "POST",
//     body: formData
//   })
//   .then(response => {
//     form.querySelector(".loading").style.display = "none";
//     if (response.ok) {
//       form.querySelector(".sent-message").style.display = "block";
//       form.reset();
//     } else {
//       form.querySelector(".error-message").innerText = "Something went wrong. Try again!";
//       form.querySelector(".error-message").style.display = "block";
//     }
//   })
//   .catch(error => {
//     form.querySelector(".loading").style.display = "none";
//     form.querySelector(".error-message").innerText = "Failed to send. Check connection!";
//     form.querySelector(".error-message").style.display = "block";
//   });
// });

document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const loading = form.querySelector(".loading");
  const success = form.querySelector(".sent-message");

  loading.style.display = "block";
  success.style.display = "none";

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form)
    });

    if (response.ok) {
      success.style.display = "block";
      form.reset();
       setTimeout(() => {
        success.style.display = "none";
      }, 3000);
    } else {
      alert("Something went wrong. Please try again!");
    }
  } catch (error) {
    alert("Error: " + error.message);
  } finally {
    loading.style.display = "none";
  }
});