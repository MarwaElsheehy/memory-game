let container = document.querySelector(".container");
let block = document.querySelectorAll(".block")
let arr = Array.from(block);
let range = [...arr.keys()];

arr.forEach((e) => {
    let random = Math.floor(Math.random() * block.length)
    e.style.order = range[random];
    e.addEventListener("click", () => {
        flip(e);
    })
})
function stop() {
    container.classList.add("no-click");

    setTimeout(() => {
        container.classList.remove("no-click");
    }, 1000)
}
function match(first, second) {
    if (first.dataset.letter === second.dataset.letter) {
        first.classList.remove("flip");
        second.classList.remove("flip");
        first.classList.add("match");
        second.classList.add("match");
    } else {
        setTimeout(() => {
            first.classList.remove("flip");
            second.classList.remove("flip");
        }, 1000)
    }
}
function flip(ele) {
    ele.classList.add("flip");

    let cards = arr.filter(card => card.classList.contains("flip"));

    if (cards.length === 2) {
        stop();
        match(cards[0], cards[1]);
    }
}