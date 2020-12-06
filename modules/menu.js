import { generateTitle } from "./utils/generateTitle.js"

export const generateMenuContent = () => {

    let menuContent = document.createElement("div")
    menuContent.classList.add("menuContent")
    let menuItems = []

    // A factory to produce menu items.
    const menuItemMaker = (name, price, description) => {
        let menuItem = document.createElement("div")
        menuItem.classList.add("menuItem")
        let menuTitle = generateTitle(`${name} - ${price}`, "h3")
        menuItem.appendChild(menuTitle)
        let menuItemDescription = document.createElement("div")
        menuItemDescription.textContent = description
        menuItem.appendChild(menuItemDescription)
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