export const insertImage = (parent, source, className) => {
    let image = document.createElement("img")
    image.src = source
    image.classList.add(className)
    parent.appendChild(image)
    return image
};