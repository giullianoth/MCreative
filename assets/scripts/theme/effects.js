import { setStyle, transitionDuration, transitionGap } from "../variables.js";

const transitionProps = (property = "all", duration = `${transitionDuration / 1000}s`, timingFunction = "ease", delay = "0s") =>
    `${property} ${duration} ${timingFunction} ${delay}`;

function slideDown(element, displayElement = "block") {

    setStyle(element, "transition", "");
    setStyle(element, "display", displayElement);

    let maxHeight = element.offsetHeight;

    setStyle(element, "overflow", "hidden");
    setStyle(element, "maxHeight", 0);
    setStyle(element, "paddingTop", 0);
    setStyle(element, "paddingBottom", 0);
    setStyle(element, "borderTopWidth", 0);
    setStyle(element, "borderBottomWidth", 0);

    setTimeout(() => {
        setStyle(element, "transition", transitionProps());
        setStyle(element, "maxHeight", `${maxHeight}px`);
        setStyle(element, "paddingTop", "");
        setStyle(element, "paddingBottom", "");
        setStyle(element, "borderTopWidth", "");
        setStyle(element, "borderBottomWidth", "");

        setTimeout(() => {
            setStyle(element, "overflow", "");
            setStyle(element, "transition", "");
        }, transitionDuration);
    }, transitionGap);
}

const slideUp = (element, removeElement = false) => {
    
    setStyle(element, "transition", transitionProps());
    setStyle(element, "overflow", "hidden");
    setStyle(element, "maxHeight", 0);
    setStyle(element, "paddingTop", 0);
    setStyle(element, "paddingBottom", 0);
    setStyle(element, "borderTopWidth", 0);
    setStyle(element, "borderBottomWidth", 0);

    setTimeout(() => {
        setStyle(element, "display", "none");
        setStyle(element, "maxHeight", "");
        setStyle(element, "paddingTop", "");
        setStyle(element, "paddingBottom", "");
        setStyle(element, "borderTopWidth", "");
        setStyle(element, "borderBottomWidth", "");
        setStyle(element, "overflow", "");
        setStyle(element, "transition", "");
        removeElement && element.remove();
    }, transitionDuration);
}

export {
    slideDown, slideUp,
}