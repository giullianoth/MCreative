import { isVisible, mobileMenu, mobileMenuIcon, replaceClass } from "../variables.js";
import { slideDown, slideUp } from "./effects.js";

export default function MobileMenu() {
    
    mobileMenuIcon.addEventListener("click", () => {
        if (!isVisible(mobileMenu)) {
            replaceClass(mobileMenuIcon, "fa-bars", "fa-xmark");
            slideDown(mobileMenu);
        } else {
            replaceClass(mobileMenuIcon, "fa-xmark", "fa-bars");
            slideUp(mobileMenu);
        }
    })
}