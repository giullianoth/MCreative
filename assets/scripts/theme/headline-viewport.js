import { header, headline, setStyle } from "../variables.js";

export default function HeadlineViewport() {
    setStyle(headline, "marginTop", `${header.offsetHeight}px`);
}