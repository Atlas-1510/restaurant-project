export const makeHeaderButton = (buttonName) => {
    const button = document.createElement("button")
    button.textContent = buttonName;
    button.classList.add("headerButton")
    return button
}