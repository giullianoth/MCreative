// DOM
const getElement = (selector, parentElement = null) => (parentElement ?? document).querySelector(selector);
const getElements = (selector, parentElement = null) => (parentElement ?? document).querySelectorAll(selector);

const setStyle = (element, attr, value) => element.style[attr] = value;

const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const replaceClass = (element, oldClass, newClass) => element.classList.replace(oldClass, newClass);
const elementContainsClass = (element, className) => element.classList.contains(className);

const computedStyle = (element, attr) => window.getComputedStyle(element)[attr];

const isVisible = (element) => computedStyle(element, "display") !== "none";
const isActive = (element) => elementContainsClass(element, "active");

const normalArray = (arr) => {
    let list = [];
    arr.forEach((item) => list.push(item));
    return list;
}

// REGEX
const onlyNumbers = /^[0-9]+$/;
const filterPureNumber = (data) => data.split("").filter((char) => char.match(onlyNumbers)).join("");

// TRANSITIONS AND ANIMATIONS
const transitionDuration = 300;
const transitionGap = 10;

// HEADER/HEADLINE
const header = getElement(".j_header");
const headline = getElement(".j_headline");

// MOBILE MENU
const mobileMenu = getElement(".j_mobile_menu");
const mobileMenuIcon = getElement(".j_mobile_menu_icon");

// PORTFOLIO
const portfolioBtns = getElements(".j_btn_filter");
const portfolioSites = normalArray(getElements(".j_site"));

// FAQ
const faqs = getElements(".j_faq");
const faqQuestion = (faq) => getElement(".j_faq_question", faq);
const faqAnswer = (faq) => getElement(".j_faq_answer", faq);

// PHONE FIELDS
const phoneFields = () => getElements("input[type=tel]");
const phoneMaxLength = 15;

// COPYRIGHT
const copyrightYear = getElement(".j_copy_year");

export {
    getElement, getElements,
    setStyle, addClass, removeClass, toggleClass, replaceClass, elementContainsClass, computedStyle, isVisible, isActive,
    normalArray,

    onlyNumbers, filterPureNumber,

    transitionDuration, transitionGap,

    header, headline,

    mobileMenu, mobileMenuIcon,

    portfolioBtns, portfolioSites,

    faqs, faqQuestion, faqAnswer,

    phoneFields, phoneMaxLength,

    copyrightYear,
}