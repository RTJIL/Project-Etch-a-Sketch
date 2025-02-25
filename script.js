const container = document.querySelector(".container");

// Variable to store the index of the button
let buttonIndex = null;

// Function to create the grid items
function createGrid(numSquares) {
  // Remove any existing grid items
  container.innerHTML = ""; // Clear all previous grid items

  // Create new grid items
  for (let i = 0; i < numSquares * numSquares; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);

    // Set styles for the grid items
    div.style.flex = `0 0 calc(100% / ${numSquares})`;
    div.style.height = `calc(100vh / ${numSquares})`;

    // Add hover effect
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "purple";
      setTimeout(() => {
        div.style.backgroundColor = "lightgray";
      }, 200);
    });
  }

  // After creating the grid, place the button
  createButton(numSquares);
}

// Function to create the button at the saved position
function createButton(numSquares) {
  if (buttonIndex === null || buttonIndex >= numSquares * numSquares) {
    // Generate a new random button position if not set or if it's out of range
    buttonIndex = Math.floor(Math.random() * (numSquares * numSquares));
  }

  const randomDiv = container.children[buttonIndex];

  const randomDivParagraph = document.createElement("p");
  randomDivParagraph.textContent = "Click Me";
  randomDiv.classList.add("button-style");
  randomDiv.appendChild(randomDivParagraph);

  // Add click event to the "Click Me" button
  randomDiv.addEventListener("click", () => {
    const numSquares = parseInt(prompt("Choose num 1 - 50"));

    if (isNaN(numSquares) || numSquares <= 0 || numSquares > 50) {
      alert("Please enter a valid number.");
    } else {
      // Recreate the grid with the new number of squares
      createGrid(numSquares);
    }
  });
}

// Initial grid setup with 16x16
createGrid(16);