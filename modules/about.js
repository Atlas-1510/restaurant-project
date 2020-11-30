export const loadAboutContent = (moduleContentHolder) => {
    let aboutContent = document.createElement("div")

    let item = document.createElement("p")
    item.textContent = "About content goes here"

    aboutContent.appendChild(item)

    moduleContentHolder.appendChild(aboutContent)
}