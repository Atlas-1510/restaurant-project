export const loadNewsContent = (moduleContentHolder) => {
    let newsContent = document.createElement("div")

    let item = document.createElement("p")
    item.textContent = "News stuff here"

    newsContent.appendChild(item)

    moduleContentHolder.appendChild(newsContent)
}