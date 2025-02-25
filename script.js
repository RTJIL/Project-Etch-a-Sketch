const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
        div.style.filter = `blur(${Math.random() * 2}px) brightness(${Math.random() * 2})`
    })
    div.addEventListener("mouseleave", () => {
        div.style.backgroundColor = "lightgray";
    });
}