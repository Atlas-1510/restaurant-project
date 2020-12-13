export const generateAboutContent = () => {
    let aboutContent = document.createElement("div")

    let item = document.createElement("p")
    item.textContent = "About content goes here"

    aboutContent.appendChild(item)

    return aboutContent
}