const aboutSection = document.querySelector("#about");
const educationSection = document.querySelector("#education");
const skillsSection = document.querySelector("#skills");
const projectsSection = document.querySelector("#projects");
const experienceSection = document.querySelector("#experience");
const certificatesSection = document.querySelector("#certificates");
const contactSection = document.querySelector("#contact");
const navbar = document.querySelector(".navbar");
const heroSection = document.querySelector("#home");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");



if (aboutSection && "IntersectionObserver" in window && !prefersReducedMotion.matches) {
    document.documentElement.classList.add("motion-ready");

    const aboutObserver = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        }
    }, { threshold: 0.36 });

    aboutObserver.observe(aboutSection);
}

if (educationSection && "IntersectionObserver" in window && !prefersReducedMotion.matches) {
    document.documentElement.classList.add("motion-ready");

    const educationObserver = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        }
    }, { threshold: 0.36 });

    educationObserver.observe(educationSection);
}

if (skillsSection && "IntersectionObserver" in window && !prefersReducedMotion.matches) {
    document.documentElement.classList.add("motion-ready");

    const skillsObserver = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        }
    }, { threshold: 0.2 });

    skillsObserver.observe(skillsSection);
}

if (projectsSection && "IntersectionObserver" in window && !prefersReducedMotion.matches) {
    document.documentElement.classList.add("motion-ready");

    const projectsObserver = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        }
    }, { threshold: 0.15 });

    projectsObserver.observe(projectsSection);
}

if (experienceSection && "IntersectionObserver" in window && !prefersReducedMotion.matches) {
    document.documentElement.classList.add("motion-ready");

    const experienceObserver = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        }
    }, { threshold: 0.2 });

    experienceObserver.observe(experienceSection);
}

if (certificatesSection && "IntersectionObserver" in window && !prefersReducedMotion.matches) {
    document.documentElement.classList.add("motion-ready");

    const certificatesObserver = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        }
    }, { threshold: 0.2 });

    certificatesObserver.observe(certificatesSection);
}

if (contactSection && "IntersectionObserver" in window && !prefersReducedMotion.matches) {
    document.documentElement.classList.add("motion-ready");

    const contactObserver = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        }
    }, { threshold: 0.2 });

    contactObserver.observe(contactSection);
}