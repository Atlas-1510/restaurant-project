import { generateTitle } from "./modules/utils/generateTitle.js"
import { insertImage } from "./modules/utils/insertImage.js"
import { makeHeaderButton } from "./modules/utils/makeHeaderButton.js"
// import { headerButtonResponse } from "./modules/utils/headerButtonResponse.js"
import { generateMenuContent } from "./modules/menu.js"
import { generateAboutContent } from "./modules/about.js"
import { generateNewsContent } from "./modules/news.js"
import { generateContactContent } from "./modules/contact.js"
import { clearModule } from "./modules/utils/clearModule.js"


const page = document.getElementById("container")

// CSS Animation stuff
const fadeAnimationLength = 300 // Milliseconds
let root = document.documentElement;
root.style.setProperty("--animation-duration", `${fadeAnimationLength}ms`)

// Header
const header = document.createElement("header")
header.setAttribute("id", "header")

let menuButton = makeHeaderButton("Menu");
let aboutButton = makeHeaderButton("About");
let newsButton = makeHeaderButton("News");
let contactButton = makeHeaderButton("Contact");
header.appendChild(menuButton);
header.appendChild(aboutButton);
header.appendChild(newsButton);
header.appendChild(contactButton);

page.appendChild(header);

// Logo
let logo = {
    image: insertImage(page, "./img/logo.png"),
    fadeOut() {
        logo.image.addEventListener("animationend", () => {
            logo.image.remove()
            logo.fadeStatus = true
        })
        logo.image.classList.toggle("fadeOut")
    },
    fadeStatus: false,
}

// page.appendChild(logo.image)

// Module Content Holder
const moduleContentHolder = {
    createHolder() {
        let contentHolder = document.createElement("div")
        contentHolder.setAttribute("id", "contentHolder")
        page.appendChild(contentHolder)
        return contentHolder
    },
    deleteHolder() {
        if (contentHolder) {
            page.removeChild(contentHolder)
        }
    },
    fadeInHolder() {
        if (contentHolder) {
            // contentHolder.classList.toggle("fadeOut")
            contentHolder.classList.toggle("fadeIn")
        }
    },
    fadeOutHolder() {
        if (contentHolder) {
            contentHolder.classList.remove("fadeIn")
            contentHolder.classList.add("fadeOut")
        }
    }
}

const headerButtonResponse = (button, buttonContentGenerator) => {
    button.addEventListener("click", () => {
        if (!logo.fadeStatus) {
            logo.fadeOut()
            setTimeout(function () {
                let contentHolder = moduleContentHolder.createHolder()
                let content = buttonContentGenerator()
                contentHolder.appendChild(content)
                moduleContentHolder.fadeInHolder()
            }, fadeAnimationLength)
        } else {
            moduleContentHolder.fadeOutHolder()
            setTimeout(function () {
                moduleContentHolder.deleteHolder()
                let contentHolder = moduleContentHolder.createHolder()
                let content = buttonContentGenerator()
                console.log(content)
                contentHolder.appendChild(content)
                moduleContentHolder.fadeInHolder()
            }, fadeAnimationLength)
        }
    })
}


headerButtonResponse(menuButton, generateMenuContent)
headerButtonResponse(aboutButton, generateAboutContent)
headerButtonResponse(newsButton, generateNewsContent)
headerButtonResponse(contactButton, generateContactContent)

