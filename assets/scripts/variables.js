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

// TRANSITIONS AND ANIMATIONS
const transitionDuration = 300;
const transitionGap = 10;

// MOBILE MENU
const mobileMenu = getElement(".j_mobile_menu");
const mobileMenuIcon = getElement(".j_mobile_menu_icon");

export {
    getElement, getElements,
    setStyle, addClass, removeClass, toggleClass, replaceClass, elementContainsClass, computedStyle, isVisible,

    transitionDuration, transitionGap,

    mobileMenu, mobileMenuIcon,
}