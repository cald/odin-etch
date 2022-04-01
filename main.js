const container = document.getElementById("container");

const generateGrid = x => {
    container.replaceChildren();
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    for (let i = 0; i < x ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

generateGrid(16);

const button = document.getElementById("reset");
button.addEventListener("click", function (e) {
    const result = Number(window.prompt("What size?"));
    if (isNaN(result) || result > 100) {
        window.alert("Invalid value.");
    }
    generateGrid(result);
});