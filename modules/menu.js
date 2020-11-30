import { generateTitle } from "./utils/generateTitle.js"

export const loadMenuContent = (moduleContentHolder) => {

    // A factory to produce menu items.
    const menuItemMaker = (name, price, description) => {
        let menuItem = document.createElement("div")
        let menuTitle = generateTitle(`${name} - ${price}`, "h3")
        menuItem.appendChild(menuTitle)
        let menuItemDescription = document.createElement("div")
        menuItemDescription.textContent = description
        menuItem.appendChild(menuItemDescription)
        return menuItem
    }

    let menuContent = document.createElement("div")

    let firstMenuItem = menuItemMaker("Fried Eggs", 20, "Eggs done right!")

    menuContent.appendChild(firstMenuItem)

    moduleContentHolder.appendChild(menuContent)
}