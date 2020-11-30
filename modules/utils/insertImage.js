export const insertImage = (source) => {
    let image = document.createElement("img")
    image.src = source
    return image
}