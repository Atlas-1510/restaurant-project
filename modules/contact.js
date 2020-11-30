export const loadContactContent = (moduleContentHolder) => {
    let contactContent = document.createElement("div")

    let item = document.createElement("p")
    item.textContent = "Contact info goes here"

    contactContent.appendChild(item)

    moduleContentHolder.appendChild(contactContent)
}