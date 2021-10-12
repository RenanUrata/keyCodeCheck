const container = document.querySelector('.container')
const keyCodeHolder = document.querySelector('.keyCodeHolder')

const showKeyCode = (event) => {
    //event.which instead of event.keyCode -> is deprecated eventhough it works
    console.log(event.key, event.which)
    keyCodeHolder.textContent =
        `key: ${event.keyCode === 32 ? 'Space' : event.key} | keyCode: ${event.which}`

}

document.addEventListener('keydown', showKeyCode)