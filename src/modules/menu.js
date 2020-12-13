import { insertImage } from "./utils/insertImage.js"
import { capitaliseFirstLetter } from "./utils/capitaliseFirstLetter.js"
import logoImage from "../img/logo.png"
import brownie from "../img/brownie.jpg"
import croissant from "../img/croissant.jpg"
import coffee from "../img/coffee.jpg"
import cocktail from "../img/cocktail.jpg"
import coffeeAndDanish from "../img/coffeeAndDanish.jpg"
import dishes from "../img/dishes.jpg"
import sandwichOne from "../img/sandwichOne.jpg"
import sandwichTwo from "../img/sandwichTwo.jpg"
import tapas from "../img/tapas.jpg"
import toast from "../img/toast.jpg"
import granola from "../img/granola.jpg"
import eggsAndBacon from "../img/eggsAndBacon.jpg"

export const generateMenuContent = () => {

    // ********** Module Setup **********

    const menuContent = document.createElement("div")
    menuContent.setAttribute("id", "menuContent")
    menuContent.classList.add("content")

    // ********** Menu info and layout **********

    const menuInfo = (function () {

        // ********** Menu Data Set Up **********

        const menuTypes = ["Breakfast", "Lunch", "Snacks", "Drinks"]
        const menuItems = []

        // ********** DOM Setup **********

        const menuGrid = document.createElement("div")
        menuGrid.setAttribute("id", "menuGrid")
        menuContent.appendChild(menuGrid)

        for (let i = 0; i < menuTypes.length; i++) {
            let mealType = document.createElement("div")
            mealType.classList.add(`${menuTypes[i]}-menu`)
            mealType.classList.add("mealTypeMenuSection")
            let mealTypeTitle = document.createElement("div")
            mealTypeTitle.textContent = menuTypes[i]
            mealTypeTitle.classList.add("mealTypeTitle")
            mealType.appendChild(mealTypeTitle)
            menuGrid.appendChild(mealType)
        }

        // ********** Helper Functions **********

        // Menu Item Factory
        const _makeMenuitem = (title, price, description, type, image = "blank") => {
            let menuItem = {
                title: title,
                price: price,
                description: description,
                type: capitaliseFirstLetter(type),
                image: image,
            }
            menuItems.push(menuItem)
        }

        // Add menu item to DOM
        const _insertMenuItemToDOM = (menuItem) => {

            const _createMenuItemDOM = () => {
                let menuItemElement = document.createElement("div")
                let menuTitleAndPriceHolder = document.createElement("div")
                let menuItemTitle = document.createElement("div")
                let menuItemPrice = document.createElement("div")
                let menuItemDescription = document.createElement("div")

                menuItemTitle.classList.add("menuItemTitle")
                menuItemPrice.classList.add("menuItemPrice")
                menuTitleAndPriceHolder.classList.add("menuTitleAndPriceHolder")
                menuItemDescription.classList.add("menuItemDescription")

                menuTitleAndPriceHolder.appendChild(menuItemTitle)
                menuTitleAndPriceHolder.appendChild(menuItemPrice)
                menuItemElement.appendChild(menuTitleAndPriceHolder)
                menuItemElement.appendChild(menuItemDescription)

                return menuItemElement
            }

            if (!menuTypes.includes(menuItem.type)) {
                console.log(`Invalid menu type: ${menuItem.type}`)
                return 1
            } else {
                let menuItemElement = _createMenuItemDOM()
                let menuItemTitle = menuItemElement.querySelector(".menuItemTitle")
                let menuItemPrice = menuItemElement.querySelector(".menuItemPrice")
                let menuItemDescription = menuItemElement.querySelector(".menuItemDescription")

                menuItemTitle.textContent = menuItem.title.toUpperCase()
                menuItemPrice.textContent = `$${menuItem.price}`
                menuItemDescription.textContent = menuItem.description

                menuItemElement.classList.add(menuItem.type)
                menuItemElement.classList.add("menuItem")
                menuItemElement.setAttribute("data-image", menuItem.image)

                let MenuMealSection = menuGrid.querySelector(`.${menuItem.type}-menu`)
                MenuMealSection.appendChild(menuItemElement)
            }
        }

        // ********** Back-End Menu Design **********

        _makeMenuitem("Brownie", 20, "A chocolate delight, very tasty!", "Snacks", "brownie")
        _makeMenuitem("Cocktail", 15, "An alcoholic red drink with some lemon", "Drinks", "cocktail")
        _makeMenuitem("Croissant", 10, "A french danish with some jam", "Snacks", "croissant")
        _makeMenuitem("Boccocini Roll", 10, "A cheese-stuffed sandwich", "Lunch", "sandwichOne")
        _makeMenuitem("Roll of the Day", 10, "A roll made with leftovers. Yum!", "Lunch", "sandwichTwo")
        _makeMenuitem("Mystery Dishes", 13, "Try your luck, see what you get!", "Lunch", "dishes")
        _makeMenuitem("Coffee and Danish", 18, "Two is better than one!", "Snacks", "coffeeAndDanish")
        _makeMenuitem("Tapas", 14, "Spanish finger food", "Snacks", "tapas")
        _makeMenuitem("Coffee", 10, "The best brew in Melbourne!", "Drinks", "coffee")
        _makeMenuitem("Toast", 6, "Bread with spread. Nothing better!", "Breakfast", "toast")
        _makeMenuitem("granola", 15, "Homemade granola with almond milk and honey", "Breakfast", "granola")
        _makeMenuitem("Eggs and Bacon", 10, "Unborn chicken and dead pig. Delish!", "Breakfast", "eggsAndBacon")

        for (let i = 0; i < menuItems.length; i++) {
            _insertMenuItemToDOM(menuItems[i])
        }
    })();

    // ********** Disclaimers and notes at bottom of menu **********

    const disclaimers = (function () {
        const disclaimerDiv = document.createElement("div")
        disclaimerDiv.setAttribute("id", "menuDisclaimer")
        menuContent.appendChild(disclaimerDiv)

        // ********** Breakup of disclaimer text for CSS styles **********

        let spanOne = document.createElement("span")
        spanOne.textContent = "Hover your mouse "
        let spanTwo = document.createElement("span")
        spanTwo.textContent = "over our menu "
        let spanThree = document.createElement("span")
        spanThree.textContent = "to see a preview of "
        let spanFour = document.createElement("span")
        spanFour.textContent = "our delicious offerings!"

        spanOne.classList.add("bouncy")
        spanTwo.classList.add("bouncy")
        spanThree.classList.add("bouncy")
        spanFour.classList.add("bouncy")

        spanOne.style.animationDelay = "0.07s"
        spanTwo.style.animationDelay = "0.14s"
        spanThree.style.animationDelay = "0.21s"
        spanFour.style.animationDelay = "0.28s"


        disclaimerDiv.appendChild(spanOne)
        disclaimerDiv.appendChild(spanTwo)
        disclaimerDiv.appendChild(spanThree)
        disclaimerDiv.appendChild(spanFour)
    })()

    // ********** Menu images **********

    const menuImage = (function () {

        // ********** DOM Setup **********

        const menuImageHolder = document.createElement("div")
        menuImageHolder.setAttribute("id", "menuImageHolder")
        menuContent.appendChild(menuImageHolder)

        // ********** Insert Images **********

        // Logo
        const logo = insertImage(menuImageHolder, logoImage, "mealImageLogo", "logo")

        // Food images
        insertImage(menuImageHolder, brownie, "mealImage", "brownie")
        insertImage(menuImageHolder, croissant, "mealImage", "croissant")
        insertImage(menuImageHolder, coffee, "mealImage", "coffee")
        insertImage(menuImageHolder, cocktail, "mealImage", "cocktail")
        insertImage(menuImageHolder, coffeeAndDanish, "mealImage", "coffeeAndDanish")
        insertImage(menuImageHolder, dishes, "mealImage", "dishes")
        insertImage(menuImageHolder, sandwichOne, "mealImage", "sandwichOne")
        insertImage(menuImageHolder, sandwichTwo, "mealImage", "sandwichTwo")
        insertImage(menuImageHolder, tapas, "mealImage", "tapas")
        insertImage(menuImageHolder, toast, "mealImage", "toast")
        insertImage(menuImageHolder, granola, "mealImage", "granola")
        insertImage(menuImageHolder, eggsAndBacon, "mealImage", "eggsAndBacon")


        // ********** Image Update When MouseOver Menu Item **********

        const _revealImage = (imageElement) => {
            imageElement.style.opacity = "1"
            logo.style.opacity = "0"
        }

        const _hideImage = (imageElement) => {
            imageElement.style.opacity = "0"
            logo.style.opacity = "1"
        }


        const menuItems = Array.from(menuContent.querySelectorAll(".menuItem"))

        for (let i = 0; i < menuItems.length; i++) {

            let menuItem = menuItems[i]
            let imageName = menuItem.dataset.image
            if (imageName != "blank") {
                let imageElement = menuContent.querySelector(`[data-image="${imageName}"].mealImage`)
                menuItem.addEventListener("mouseenter", function () { _revealImage(imageElement) })
                menuItem.addEventListener("mouseleave", function () { _hideImage(imageElement) })
            }
        }
    })();

    return menuContent
}

