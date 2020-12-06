export const generateContactContent = (moduleContentHolder) => {
    let contactContent = document.createElement("div")

    let item = document.createElement("p")
    item.textContent = "Contact info goes here"

    contactContent.appendChild(item)

    return contactContent
}