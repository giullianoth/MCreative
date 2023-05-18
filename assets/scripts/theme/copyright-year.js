import { copyrightYear } from "../variables.js";

export default function CopyrightYear() {
    copyrightYear.innerText = (new Date()).getFullYear();
}