import { slideDown, slideUp } from "../theme/effects.js";
import { faqAnswer, faqQuestion, faqs, isActive, isVisible, removeClass, toggleClass } from "../variables.js";

export default function Faq() {
    faqs.forEach((faq, i, arr) => {

        faqQuestion(faq).addEventListener("click", () => {
            arr.forEach((f) => {
                if (isVisible(faqAnswer(f)) && f !== faq) {
                    slideUp(faqAnswer(f));
                    removeClass(faqQuestion(f), "active");
                }
            })

            toggleClass(faqQuestion(faq), "active");
            !isActive(faqQuestion(faq)) && slideUp(faqAnswer(faq));
            isActive(faqQuestion(faq)) && slideDown(faqAnswer(faq));
        })
    })
}