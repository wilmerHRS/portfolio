// home
const homeMainText = document.getElementById("home-main-text");
const homeSubText = document.getElementById("home-sub-text");
const homeImage = document.getElementById("home-image");
const homeBtnContainer = document.getElementById("home-btn-container");

// header
const headerBottomLinks = document.getElementById("header-bottom-links");
const headerLinks = document.querySelectorAll(".c-menu li");

// about me
const aboutMeImg = document.getElementById("about-me-img");
const aboutMeData = document.getElementById("about-me-data");
const aboutMeText = document.getElementById("about-me-text");

// skills
const skillsText = document.getElementById("skills-text");
const skills = document.querySelectorAll(".skills-container");

// projects
const projectsText = document.getElementById("projects-text");
const projects = document.querySelectorAll(".project-container");

// contact
const contactText = document.getElementById("contact-text");

const animation = (
  entries: IntersectionObserverEntry[],
  observe: IntersectionObserver
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
};

const animationLoop = (
  entries: IntersectionObserverEntry[],
  observe: IntersectionObserver
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
};

const observer = new IntersectionObserver(animation, {
  root: null,
  rootMargin: "0px 100% 0px 100%",
  threshold: 0.5,
});

const observerLoop = new IntersectionObserver(animationLoop, {
  root: null,
  rootMargin: "0px 100% 0px 100%",
  threshold: 0.5,
});

projects.forEach((project) => {
  const projectImages = project.querySelector(".project-images");
  const projectData = project.querySelector(".project-data");
  if (projectImages) observerLoop.observe(projectImages);
  if (projectData) observerLoop.observe(projectData);
});

headerLinks.forEach((link) => {
  observer.observe(link);
});

skills.forEach((skill) => {
  observer.observe(skill);
});

if (homeMainText) observer.observe(homeMainText);
if (homeSubText) observer.observe(homeSubText);
if (homeImage) observer.observe(homeImage);
if (headerBottomLinks) observer.observe(headerBottomLinks);
if (aboutMeImg) observer.observe(aboutMeImg);
if (aboutMeData) observer.observe(aboutMeData);

if (homeBtnContainer) observerLoop.observe(homeBtnContainer);
if (aboutMeText) observerLoop.observe(aboutMeText);
if (skillsText) observerLoop.observe(skillsText);
if (projectsText) observerLoop.observe(projectsText);
if (contactText) observerLoop.observe(contactText);
