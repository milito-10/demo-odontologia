/* Interacciones progresivas sin dependencias externas. */
document.documentElement.classList.add("js");

const translations = {
  en: {
    documentTitle:"Sonrisa Clara Dentistry | Medellín",metaDescription:"Sonrisa Clara Dentistry: expert dental care, smile design, and personalized service in Laureles, Medellín. Book your appointment on WhatsApp.",ogTitle:"Sonrisa Clara Dentistry | Medellín",ogDescription:"Your smile in the best hands. Explore our treatments and book your appointment in Medellín.",ogImageAlt:"Sonrisa Clara Dentistry in Medellín: your smile in the best hands.",skip:"Skip to content",demoNotice:"Demo website — designed by",navTreatments:"Treatments",navAbout:"About us",navFaq:"FAQs",navContact:"Contact",book:"Book an appointment",
    heroEyebrow:"DENTISTRY WITH PURPOSE",heroTitle:'Your smile in the <em>best hands.</em>',heroDescription:"We care for you with state-of-the-art technology, expert hands, and the warmth you deserve. Your new smile starts here.",heroButton:"Book your appointment on WhatsApp",exploreTreatments:"Explore our treatments",heroProofStrong:"Smiles that speak for themselves",heroProofSmall:"Personal care, real results.",heroLocation:"LAURELES · MEDELLÍN, COLOMBIA",ratingLabel:"Patient experience",careCardTitle:"Complete care",careCardCopy:"For your whole family",trustIntro:"Trust is built one smile <br>at a time.",statYears:"years of experience",statPatients:"patients cared for",statTreatments:"treatments completed",
    treatEyebrow:"YOUR HEALTH, OUR PRIORITY",treatTitle:'Everything your smile <em>needs.</em>',treatLead:"Plans made for you, with expert guidance from your very first visit.",cleanTitle:"Dental cleaning",cleanCopy:"Prevention and care for a fresh, healthy smile.",whiteningTitle:"Teeth whitening",whiteningCopy:"Brighten your smile with safe, personalized care.",designTitle:"Smile design",designCopy:"A comprehensive plan for the smile you've always imagined.",orthoTitle:"Orthodontics",orthoCopy:"We align your smile while caring for your oral health.",implantTitle:"Dental implants",implantCopy:"Restore function and confidence with lasting solutions.",urgentTitle:"Dental emergencies",urgentCopy:"Timely, compassionate care when you need it most.",from:"From",monthly:"/ month",popular:"MOST POPULAR",priceNote:"Example prices for this demo. Final pricing is confirmed after a professional evaluation.",
    whyEyebrow:"WE ARE SONRISA CLARA",whyTitle:'Your wellbeing shows <em>in every detail.</em>',whyLead:"We believe a great experience transforms the way you care for your oral health. That's why people come first in every decision we make.",benefitExperience:"Experience you can trust",benefitExperienceCopy:"Expert professionals who keep learning.",benefitTech:"State-of-the-art technology",benefitTechCopy:"More accurate diagnostics and comfortable care.",benefitPersonal:"Care made just for you",benefitPersonalCopy:"We listen to your goals and create your plan.",benefitGlobal:"Smiles without borders",benefitGlobalCopy:"We welcome patients from Colombia and around the world.",meetUs:"Get to know our clinic",clinicCardTitle:"A space designed for you",clinicCardCopy:"Feel at ease from the moment you arrive.",yearsStamp:"years caring for smiles",
    testimonialEyebrow:"VOICES THAT INSPIRE US",testimonialTitle:'An experience you<br><em>can feel and smile about.</em>',testimonialDisclaimer:"Illustrative sample testimonials; they do not represent real patients.",quoteOne:"From the moment I arrived, I felt listened to. The result exceeded my expectations and now I smile without a second thought.",authorOne:"Laura M.",authorOneMeta:"Smile design · Sample testimonial",quoteTwo:"The whole process was clear and comfortable. They explained every step and the care was incredible.",authorTwo:"Daniel R.",authorTwoMeta:"Orthodontics · Sample testimonial",quoteThree:"I traveled to Medellín for treatment and it was the best decision. Such a professional and caring team.",authorThree:"Andrea P.",authorThreeMeta:"Whitening · Sample testimonial",
    faqEyebrow:"WE'RE HERE FOR YOU",faqTitle:'Questions?<br><em>Let’s talk.</em>',faqLead:"We want you to feel confident from the very first moment.",faqMore:"Ask us another question",faqQ1:"How can I book an appointment?",faqA1:"Message us on WhatsApp using the button on this page. Our team will help you find the right time.",faqQ2:"Is there a fee for the first evaluation?",faqA2:"The evaluation fee depends on the treatment. Contact us and we'll share the details before you book.",faqQ3:"Do you handle dental emergencies?",faqA3:"Yes, we do our best to see you promptly. Message us on WhatsApp to check availability and get guidance.",faqQ4:"Do you treat international patients?",faqA4:"Yes. We can assist you in Spanish or English and help you plan your visit to Medellín.",faqQ5:"Are the listed prices final?",faqA5:"No. These are reference prices for this demo. The final plan and price are determined during a professional evaluation.",
    locationEyebrow:"WE'RE NEAR YOU",locationTitle:'Your next smile<br>starts in <em>Laureles.</em>',locationLead:"A warm, modern space in the heart of Medellín. We look forward to welcoming you.",addressLabel:"Sample address",address:"Circular 3 # 70-45, Laureles<br>Medellín, Antioquia",hoursLabel:"Office hours",hours:"Mon – Fri · 8:00 a.m. – 6:00 p.m.<br>Sat · 8:00 a.m. – 1:00 p.m.",phoneLabel:"Sample WhatsApp",locationButton:"Book on WhatsApp",mapNote:"Reference location for this demo",footerCopy:"We care for your smile. We care for you.",footerDemo:"Demo website · Sample information",floatingWhatsapp:"Message us",
    navLabel:"Main navigation",brandLabel:"Sonrisa Clara, home",brandSub:"DENTISTRY · MEDELLÍN",languageLabel:"Select language",menuOpen:"Open menu",menuClose:"Close menu",fiveStars:"5 out of 5 stars",cleanConsult:"Ask about dental cleaning on WhatsApp",whiteningConsult:"Ask about teeth whitening on WhatsApp",designConsult:"Ask about smile design on WhatsApp",orthoConsult:"Ask about orthodontics on WhatsApp",implantConsult:"Ask about dental implants on WhatsApp",urgentConsult:"Ask about dental emergencies on WhatsApp",heroPhotoAlt:"Woman with a wide smile showing healthy white teeth",clinicPhotoAlt:"Bright, modern dental office with a dental chair",galleryEyebrow:"OUR SPACE",galleryTitle:'A place where <em>you feel at ease.</em>',galleryLead:"Bright treatment rooms, modern equipment, and a team that walks you through every step.",galleryChair:"Rooms with natural light",galleryChairAlt:"Dental chair in a warm office with natural light",galleryDiagnosis:"We explain your diagnosis",galleryDiagnosisAlt:"Dentist explaining an X-ray on screen to a patient",galleryXray:"Digital X-rays",galleryXrayAlt:"Specialist reviewing dental X-rays",galleryRoom:"Spacious, sterilized rooms",galleryRoomAlt:"Spacious treatment room with dental chairs",galleryCare:"Unhurried care",galleryCareAlt:"Dentist treating a patient in an office overlooking a garden",galleryNote:"Reference photos for this demo (Unsplash).",previousTestimonial:"Previous testimonial",nextTestimonial:"Next testimonial",mapTitle:"Sample map in Laureles, Medellín",openMap:"Open sample location in Google Maps",floatContact:"Contact the sample WhatsApp number +57 300 000 0000",ratingLabel:"Patient experience",footerCredit:"Designed by",scrollNext:"Scroll to the next section",trustLabel:"Sonrisa Clara by the numbers"
  }
};

const whatsappMessages = {
  es: {
    book:"Hola, quiero agendar una cita en Sonrisa Clara.",
    clean:"Hola, quiero información sobre limpieza dental.",
    whitening:"Hola, quiero información sobre blanqueamiento.",
    design:"Hola, quiero información sobre diseño de sonrisa.",
    ortho:"Hola, quiero información sobre ortodoncia.",
    implant:"Hola, quiero información sobre implantes dentales.",
    urgent:"Hola, necesito atención odontológica prioritaria.",
    question:"Hola, tengo una pregunta para Sonrisa Clara."
  },
  en: {
    book:"Hello, I would like to book an appointment at Sonrisa Clara.",
    clean:"Hello, I would like information about dental cleaning.",
    whitening:"Hello, I would like information about teeth whitening.",
    design:"Hello, I would like information about smile design.",
    ortho:"Hello, I would like information about orthodontics.",
    implant:"Hello, I would like information about dental implants.",
    urgent:"Hello, I need urgent dental care.",
    question:"Hello, I have a question for Sonrisa Clara."
  }
};

const originalText = new Map([...document.querySelectorAll("[data-i18n]")].map((element) => [element, element.innerHTML]));
const originalContent = new Map([...document.querySelectorAll("[data-i18n-content]")].map((element) => [element, element.getAttribute("content")]));
const originalAria = new Map([...document.querySelectorAll("[data-i18n-aria]")].map((element) => [element, element.getAttribute("aria-label")]));
const originalTitles = new Map([...document.querySelectorAll("[data-i18n-title]")].map((element) => [element, element.getAttribute("title")]));
const originalAlts = new Map([...document.querySelectorAll("[data-i18n-alt]")].map((element) => [element, element.getAttribute("alt")]));
let currentLanguage = "es";
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#main-menu");

const menuLabel = (expanded, language = currentLanguage) => {
  if (language === "en") return expanded ? translations.en.menuClose : translations.en.menuOpen;
  return expanded ? "Cerrar menú" : "Abrir menú";
};

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", menuLabel(!isExpanded));
  menu.classList.toggle("is-open", !isExpanded);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", menuLabel(false));
  });
});

const counters = document.querySelectorAll(".counter");
const formatNumber = (value) => new Intl.NumberFormat(currentLanguage === "en" ? "en-US" : "es-CO").format(value);

const applyLanguage = (language) => {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelector('[property="og:locale"]').setAttribute("content", language === "en" ? "en_US" : "es_CO");
  document.querySelectorAll("[data-lang]").forEach((option) => {
    option.setAttribute("aria-pressed", String(option.dataset.lang === language));
  });
  originalText.forEach((original, element) => {
    element.innerHTML = translations[language]?.[element.dataset.i18n] ?? original;
  });
  originalContent.forEach((original, element) => {
    element.setAttribute("content", translations[language]?.[element.dataset.i18nContent] ?? original);
  });
  originalAria.forEach((original, element) => {
    element.setAttribute("aria-label", translations[language]?.[element.dataset.i18nAria] ?? original);
  });
  originalTitles.forEach((original, element) => {
    element.setAttribute("title", translations[language]?.[element.dataset.i18nTitle] ?? original);
  });
  originalAlts.forEach((original, element) => {
    element.setAttribute("alt", translations[language]?.[element.dataset.i18nAlt] ?? original);
  });
  document.querySelectorAll(".language-switch").forEach((group) => {
    group.setAttribute("aria-label", language === "es" ? "Seleccionar idioma" : "Select language");
  });
  menuToggle.setAttribute("aria-label", menuLabel(menuToggle.getAttribute("aria-expanded") === "true"));
  counters.forEach((counter) => {
    const value = Number(counter.textContent.replace(/[^\d]/g, ""));
    counter.textContent = formatNumber(value);
  });
  document.querySelectorAll("[data-wa-key]").forEach((link) => {
    const message = whatsappMessages[language][link.dataset.waKey];
    if (message) link.href = `https://wa.me/573000000000?text=${encodeURIComponent(message)}`;
  });
};

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const animateCounter = (counter) => {
  const target = Number(counter.dataset.target);
  if (reduceMotion) {
    counter.textContent = formatNumber(target);
    return;
  }
  const duration = 1400;
  const startTime = performance.now();
  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = formatNumber(Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
if ("IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.65 });
  counters.forEach((counter) => counterObserver.observe(counter));
} else {
  counters.forEach((counter) => { counter.textContent = formatNumber(Number(counter.dataset.target)); });
}


const slides = [...document.querySelectorAll(".testimonial-slide")];
let activeSlide = 0;
const updateSlide = (index) => {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeSlide;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });
  document.querySelector("#slide-current").textContent = String(activeSlide + 1).padStart(2, "0");
};
document.querySelectorAll("[data-carousel]").forEach((button) => {
  button.addEventListener("click", () => updateSlide(activeSlide + (button.dataset.carousel === "next" ? 1 : -1)));
});
document.querySelector("#slide-total").textContent = String(slides.length).padStart(2, "0");
updateSlide(0);
document.querySelector("#current-year").textContent = String(new Date().getFullYear());

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) faqItems.forEach((otherItem) => { if (otherItem !== item) otherItem.open = false; });
  });
});
