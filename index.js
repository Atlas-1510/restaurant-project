import { generateTitle } from "./modules/utils/generateTitle.js"
import { insertImage } from "./modules/utils/insertImage.js"
import { loadMenuContent } from "./modules/menu.js"
import { loadAboutContent } from "./modules/about.js"
import { loadNewsContent } from "./modules/news.js"
import { loadContactContent } from "./modules/contact.js"
import { clearModule } from "./modules/utils/clearModule.js"

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

// Module Content Holder
let moduleContentHolder = document.createElement("div")
page.appendChild(moduleContentHolder)

// Button event listeners
menuButton.addEventListener("click", () => {
    clearModule(moduleContentHolder)
    loadMenuContent(moduleContentHolder)
})

aboutButton.addEventListener("click", () => {
    clearModule(moduleContentHolder)
    loadAboutContent(moduleContentHolder)
})

newsButton.addEventListener("click", () => {
    clearModule(moduleContentHolder)
    loadNewsContent(moduleContentHolder)
})

contactButton.addEventListener("click", () => {
    clearModule(moduleContentHolder)
    loadContactContent(moduleContentHolder)
})
