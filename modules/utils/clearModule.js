export const clearModule = (moduleContentHolder) => {
    while (moduleContentHolder.firstChild) {
        moduleContentHolder.removeChild(moduleContentHolder.lastChild)
    }
}