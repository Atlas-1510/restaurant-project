export const capitaliseFirstLetter = (string) => {
    let firstLetter = string.slice(0, 1).toUpperCase()
    let remainder = string.slice(1)
    return firstLetter + remainder
}