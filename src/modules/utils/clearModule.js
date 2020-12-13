export const clearModule = (moduleContentHolder) => {

    moduleContentHolder.addEventListener("animationend", () => {
        while (moduleContentHolder.firstChild) {
            moduleContentHolder.removeChild(moduleContentHolder.lastChild)
        }
    })

    moduleContentHolder.classList.toggle("fadeOut")
}