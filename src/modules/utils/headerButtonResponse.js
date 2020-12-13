export const headerButtonResponse = (button, buttonContentGenerator) => {
    button.addEventListener("click", () => {
        if (!logo.fadeStatus) {
            logo.fadeOut()
            setTimeout(function () {
                let contentHolder = moduleContentHolder.createHolder()
                let content = buttonContentGenerator()
                console.log(content)
                contentHolder.appendChild(content)
                moduleContentHolder.fadeInHolder()
            }, fadeAnimationLength)
        } else {
            moduleContentHolder.fadeOutHolder()
            setTimeout(function () {
                moduleContentHolder.deleteHolder()
                let contentHolder = moduleContentHolder.createHolder()
                buttonContentGenerator()
                console.log(content)
                contentHolder.appendChild(content)
                moduleContentHolder.fadeOutHolder()
            }, fadeAnimationLength)
        }
    })
}