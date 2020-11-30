import { generateTitle } from "./utils/generateTitle.js"
import { insertImage } from "./utils/insertImage.js"

export const titlePage = () => {
    // Main Title
    const page = document.getElementById("container")
    let title = generateTitle("Heart Attack & Vine", "h1")
    page.appendChild(title)

    // Logo
    let logo = insertImage("./logo.png")
    page.appendChild(logo)

    // Footer Buttons
    const footer = document.createElement("div")
    const menuButton = document.createElement("button")
    const aboutButton = document.createElement("button")
    const newsButton = document.createElement("button")
    const contactButton = document.createElement("button")

    menuButton.textContent = "Menu"
    aboutButton.textContent = "About"
    newsButton.textContent = "News"
    contactButton.textContent = "Contact"

    footer.append(menuButton, aboutButton, newsButton, contactButton)

    page.appendChild(footer);

}