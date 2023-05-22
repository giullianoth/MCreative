import { filterPureNumber, onlyNumbers, phoneFields, phoneMaxLength } from "../variables.js";

const phoneTemplate = (data) => {
    let newData = data.split("");
    newData.length >= 1 && newData.unshift("(");
    newData.length >= 3 && newData.splice(3, 0, ")");
    newData.length >= 4 && newData.splice(4, 0, " ");
    newData.length >= 9 && newData.splice(9, 0, "-");

    if (newData.length === phoneMaxLength) {
        let hyphenPosition = newData.indexOf("-");
        let digitPosition = hyphenPosition + 1;
        let digit = newData[digitPosition];

        newData[hyphenPosition] = digit;
        newData[digitPosition] = "-";
        newData.splice(6, 0, " ");
    }

    return newData.join("");
}

export default function PhoneField() {
    phoneFields().forEach((field) => {
        field.setAttribute("maxlength", 15);

        field.addEventListener("input", (event) => {
            if (event.data) {
                let phoneValue = filterPureNumber(field.value);
                field.value = phoneTemplate(phoneValue);
            }
        })
    })
}