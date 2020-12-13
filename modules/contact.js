import { insertImage } from "./utils/insertImage.js"

export const generateContactContent = () => {

    // ********** Module Setup **********

    const contactContent = document.createElement("div")
    contactContent.setAttribute("id", "contactContent")
    contactContent.classList.add("content")

    // ********** Social Media Icons **********

    const socialMediaIcons = (() => {
        const socialIconHolder = document.createElement("div")
        socialIconHolder.setAttribute("id", "socialIconHolder")
        contactContent.appendChild(socialIconHolder)

        const icons = (() => {
            const facebook = {
                imageSource: "./img/icons/facebook.svg",
                onClick: function () {
                    window.open("https://www.facebook.com/heartattackandvinebar/")
                }
            }

            const twitter = {
                imageSource: "./img/icons/twitter.svg",
                onClick: function () {
                    window.open("https://twitter.com/home")
                }
            }

            const instagram = {
                imageSource: "./img/icons/instagram.svg",
                onClick: function () {
                    window.open("https://www.instagram.com/heartattackandvinebar/?hl=en")
                }
            }

            const phone = {
                imageSource: "./img/icons/whatsapp.svg",
                onClick: function () {
                    // TO DO
                }
            }

            const email = {
                imageSource: "./img/icons/telegram.svg",
                onClick: function () {
                    // TO DO
                }
            }


            return [facebook, instagram, twitter, phone, email]
        })()

        for (let i = 0; i < icons.length; i++) {
            let image = insertImage(socialIconHolder, icons[i].imageSource, "socialMediaIcon")
            image.addEventListener("click", function () {
                icons[i].onClick();
            })
        }
    })()

    // ********** Opening Hours **********

    const openingHours = document.createElement("div")
    openingHours.setAttribute("id", "openingHours")
    contactContent.appendChild(openingHours)

    const addOpeningHours = (() => {

        const _addDayHours = (day, hours) => {
            const listItem = document.createElement("li")
            listItem.textContent = `${day} - ${hours}`
            hoursList.appendChild(listItem)
        }

        const hoursList = document.createElement("ul")
        openingHours.appendChild(hoursList)
        hoursList.setAttribute("id", "hoursList")

        _addDayHours("Monday", "8AM to 10PM")
        _addDayHours("Tuesday", "8AM to 10PM")
        _addDayHours("Wednesday", "8AM to 10PM")
        _addDayHours("Thursday", "8AM to 10PM")
        _addDayHours("Friday", "8AM to 11:30PM")
        _addDayHours("Saturday", "9AM to 11:30PM")
        _addDayHours("Sunday", "9AM to 11:30PM")
    })()

    // ********** Map **********

    const addMap = (() => {

        const map = document.createElement("iframe")
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.6755394052643!2d144.96509721583203!3d-37.797642979755366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642d687659317%3A0x5aa3b5a1a45f830c!2sHeartattack%20and%20Vine!5e0!3m2!1sen!2sau!4v1607817683173!5m2!1sen!2sau"
        map.setAttribute("id", "googleMap")
        contactContent.appendChild(map)

    })()

    return contactContent
}


// {/* <iframe width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */ }

// onst Icon = {
//     source: 'none',
//     insertIntoDOM: function () {
//         if (this.source != 'none') {
//             let image = insertImage(socialIconHolder, `./img/icons/${this.source}.svg`, "socialMediaIcon")
//             image.setAttribute("id", `${this.source}Icon`)
//         } else {
//             console.log("Image source not provided")
//         }
//     },
//     openFunction: function () {
//         console.log("do something")
//     }

// }

// const iconList = ["facebook", "instagram", "twitter", "whatsapp", "telegram"]

// for (let i = 0; i < iconList.length; i++) {
//     let iconObject = Object.create(Icon)
//     iconObject.source = iconList[i]
//     iconObject.insertIntoDOM()
//     let iconElement = contactContent.querySelector(`#${iconObject.source}`)
//     iconElement
// }



//     // insertImage(socialIconHolder, "./img/icons/facebook.svg", "socialMediaIcon")
//     // insertImage(socialIconHolder, "./img/icons/instagram.svg", "socialMediaIcon")
//     // insertImage(socialIconHolder, "./img/icons/twitter.svg", "socialMediaIcon")
//     // insertImage(socialIconHolder, "./img/icons/whatsapp.svg", "socialMediaIcon")
//     // insertImage(socialIconHolder, "./img/icons/telegram.svg", "socialMediaIcon")




