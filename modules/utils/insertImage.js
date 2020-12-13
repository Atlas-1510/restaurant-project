export const insertImage = (parent, source, className, dataImageAttribute = "blank") => {
    let image = document.createElement("img")
    image.src = source
    image.classList.add(className)
    if (dataImageAttribute != "blank") {
        image.setAttribute("data-image", dataImageAttribute)
    }
    parent.appendChild(image)
    return image
};