import { generateTitle } from "./utils/generateTitle.js"

export const generateMenuContent = () => {

    let menuContent = document.createElement("div")
    menuContent.classList.add("menuContent")
    let menuItems = []

    // A factory to produce menu items.
    const menuItemMaker = (name, price, description) => {
        let menuItem = document.createElement("div")
        menuItem.classList.add("menuItem")

        // Basic menu item structure
        let menuAndPriceHolder = document.createElement("div")
        menuAndPriceHolder.classList.add("menuAndPriceHolder")
        menuItem.appendChild(menuAndPriceHolder)
        let menuTitle = document.createElement("div")
        menuAndPriceHolder.appendChild(menuTitle)
        let menuPrice = document.createElement("div")
        menuAndPriceHolder.appendChild(menuPrice)
        let menuItemDescription = document.createElement("div")
        menuItem.appendChild(menuItemDescription)

        //Insert menu item details
        menuTitle.textContent = name.toUpperCase()
        menuPrice.textContent = `$${price}`
        menuItemDescription.textContent = description


        // Publish menu item
        menuItems.push(menuItem)
    }

    menuItemMaker("Fried Eggs", 20, "Eggs done right!")
    menuItemMaker("Bacon", 10, "Some dead pig")
    menuItemMaker("Fried Rice", 15, "Asian style")

    for (let i = 0; i < menuItems.length; i++) {
        menuContent.appendChild(menuItems[i])
    }

    return menuContent
}