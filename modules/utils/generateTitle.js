export const generateTitle = (titleText, size = "h1") => {
    const sizes = ["h1", "h2", "h3", "h4", "h5", "h6"]
    if (!sizes.includes(size)) {
        console.log("generateTitle called with invalid size request")
        return
    }
    if (typeof titleText != "string") {
        console.log("generateTitle called without valid string input")
        return
    }
    let title = document.createElement(size)
    title.textContent = titleText
    return title
}