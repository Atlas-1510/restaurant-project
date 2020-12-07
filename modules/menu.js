import { generateTitle } from "./utils/generateTitle.js"
import { insertImage } from "./utils/insertImage.js"
import { capitaliseFirstLetter } from "./utils/capitaliseFirstLetter.js"

export const generatemenuContent = () => {

    // ********** Module Setup **********

    const menuContent = document.createElement("div")

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

        _makeMenuitem("Hot Dog", 20, "A meat thing that sits on some bread", "lunch")
        _makeMenuitem("Pizza", 15, "A round thing with tomato paste and veggies", "lunch")
        _makeMenuitem("Granola", 10, "A bowl of some oats and fruits with milk", "breakfast")
        _makeMenuitem("Toast", 10, "Some bread with some other stuff on top", "breakfast")
        _makeMenuitem("Spaghetti", 10, "This is a really long description designed to test the grid box behaviours. This is a really long description designed to test the grid box behaviours.", "Lunch")
        _makeMenuitem("some other thing", 10, "This is another item", "lunch")
        _makeMenuitem("Coffee", 10, "Some drink that keeps you awake", "drinks")
        _makeMenuitem("Tapas", 10, "Spanish finger food", "snacks")

        for (let i = 0; i < menuItems.length; i++) {
            _insertMenuItemToDOM(menuItems[i])
        }
    })();

    // ********** Menu images **********

    const menuImage = (function () {

        // ********** DOM Setup **********

        const menuImageHolder = document.createElement("div")
        menuImageHolder.setAttribute("id", "menuImageHolder")
        menuContent.appendChild(menuImageHolder)


    })();

    return menuContent
}

