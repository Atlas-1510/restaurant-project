import { generateTitle } from "./utils/generateTitle.js"
import { insertImage } from "./utils/insertImage.js"
import { capitaliseFirstLetter } from "./utils/capitaliseFirstLetter.js"

export const generateMenuContent = () => {

    // ********** Module Setup **********

    const menuCONTENT = document.createElement("div")


    const menuInfo = (function () {
        // ********** Menu Data Set Up **********

        const menuTypes = ["Breakfast", "Lunch", "Snacks", "Drinks"]
        const menuItems = []

        // ********** DOM Setup **********


        const menuGrid = document.createElement("div")


        menuGrid.setAttribute("id", "menuGrid")


        menuCONTENT.appendChild(menuGrid)


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
        const _makeMenuitem = (title, price, description, type) => {
            let menuItem = {
                title: title,
                price: price,
                description: description,
                type: capitaliseFirstLetter(type),
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

    const menuImage = (function () {
        const menuImageHolder = document.createElement("div")
        menuImageHolder.setAttribute("id", "menuImageHolder")
        menuCONTENT.appendChild(menuImageHolder)
    })();

    return menuCONTENT
}










    // // Content holders
    // let menuContent = document.createElement("div")
    // menuContent.classList.add("menuContent")
    // let menuGridAndImageHolder = document.createElement("div")
    // menuGridAndImageHolder.setAttribute("id", "menuGridAndImageHolder")
    // menuContent.appendChild(menuGridAndImageHolder)
    // let menuGrid = document.createElement("div")
    // menuGrid.setAttribute("id", "menuGrid")
    // menuGridAndImageHolder.appendChild(menuGrid)
    // // Breakfast/Lunch holders
    // let breakfastFlex = document.createElement("div")
    // breakfastFlex.setAttribute("id", "breakfastFlex")
    // let lunchFlex = document.createElement("div")
    // lunchFlex.setAttribute("id", "lunchFlex")
    // menuGrid.appendChild(breakfastFlex)
    // menuGrid.appendChild(lunchFlex)
    // let breakfastTitle = generateTitle("Breakfast Menu", "h3")
    // breakfastFlex.appendChild(breakfastTitle)
    // let lunchTitle = generateTitle("Lunch Menu", "h3")
    // lunchFlex.appendChild(lunchTitle)
    // let breakfastMenuItems = []
    // let lunchMenuItems = []
    // // Menu image holder
    // let menuImageHolder = document.createElement("div")
    // menuImageHolder.setAttribute("id", "menuImageHolder")
    // insertImage(menuImageHolder, "./img/brownie.jpg", "menuImage")
    // insertImage(menuImageHolder, "./img/cocktail.jpg", "menuImage")
    // insertImage(menuImageHolder, "./img/coffeeAndDanish.jpg", "menuImage")
    // insertImage(menuImageHolder, "./img/croissant.jpg", "menuImage")
    // insertImage(menuImageHolder, "./img/dishes.jpg", "menuImage")
    // insertImage(menuImageHolder, "./img/emptyPlate.jpg", "menuImage")
    // insertImage(menuImageHolder, "./img/sandwichOne.jpg", "menuImage")
    // insertImage(menuImageHolder, "./img/sandwichTwo.jpg", "menuImage")
    // insertImage(menuImageHolder, "./img/tapas.jpg", "menuImage")

    // menuImageHolder.src = "./logo.png"
    // menuGridAndImageHolder.appendChild(menuImageHolder)
    // menuGrid.addEventListener("mouseleave", () => {
    //     menuImageHolder.src = "./logo.png"
    // })

    // // A factory to produce menu items.
    // const menuItemMaker = (menuType, name, imageReference, price, description) => {
    //     let menuItem = document.createElement("div")
    //     menuItem.classList.add("menuItem")

    //     //Insert menu item details
    //     let menuTitle = document.createElement("div")
    //     let menuPrice = document.createElement("div")
    //     let menuDescription = document.createElement("div")

    //     menuTitle.textContent = name.toUpperCase()
    //     menuPrice.textContent = `$${price}`
    //     menuDescription.textContent = description

    //     menuItem.appendChild(menuTitle)
    //     menuItem.appendChild(menuPrice)
    //     menuItem.appendChild(menuDescription)

    //     //Image event listener
    //     menuItem.addEventListener("mouseover", () => {
    //         menuImageHolder.src = `./img/${imageReference}`
    //     })


    //     // Publish menu item to array lists
    //     if (menuType == "breakfast") {
    //         breakfastMenuItems.push(menuItem)
    //     } else if (menuType == "lunch") {
    //         lunchMenuItems.push(menuItem)
    //     }
    // }

    // // Breakfast items
    // menuItemMaker("breakfast", "BOCCONCINI ROLL", "sandwichOne.jpg", 12, "Fior di latte, dressed tomato and basil in a toasted ciabatta roll.")
    // menuItemMaker("breakfast", "PROSCIUTTO ROLL", "sandwichTwo.jpg", 12, "Thinly sliced Prosciutto, tomato and basil in a toasted ciabatta roll.")
    // menuItemMaker("breakfast", "TORTILLA ROLL", "brownie.jpg", 12, "Spanish omelette with caramelised onion and potato, served in a toasted ciabatta roll with tomato salsa, chopped parsley and aioli.")
    // menuItemMaker("breakfast", "GRANOLA", "coffeeAndDanish.jpg", 12, "House-made granola, served with seasonal fruits and yoghurt.")

    // // Lunch items
    // menuItemMaker("lunch", "PORCHETTA ROLL", "emptyPlate.jpg", 17, "Slow-roasted free-range porchetta, served on a warm ciabatta with house-made salsa verde and a side of sweet spicy sambal and mustard.")
    // menuItemMaker("lunch", "FALAFEL ROLL", "dishes.jpg", 16, "House-made beetroot falafel, herb salad, pickles and yoghurt dressing, served on a warm ciabatta.")
    // menuItemMaker("lunch", "SPICY MEATBALL", "cocktail.jpg", 17, "House-made meatballs in spicy sugo served on a warm ciabatta with grated ricotta salata, mixed herbs and radicchio.")
    // menuItemMaker("lunch", "DAILY SANDWICH SPECIAL", "tapas.jpg", 17, "Our daily specials are created every morning by our amazing chefs utilising the fresh produce we received each day.")

    // // Publish array elements to DOM
    // for (let i = 0; i < breakfastMenuItems.length; i++) {
    //     breakfastFlex.appendChild(breakfastMenuItems[i])
    // }

    // for (let i = 0; i < lunchMenuItems.length; i++) {
    //     lunchFlex.appendChild(lunchMenuItems[i])
    // }

    // // Alert to view images
    // let viewImagePrompt = document.createElement("p")
    // viewImagePrompt.setAttribute("id", "viewImagePrompt")
    // viewImagePrompt.textContent = "Hover over each option for a preview!"
    // menuContent.appendChild(viewImagePrompt)

    // return menuContent