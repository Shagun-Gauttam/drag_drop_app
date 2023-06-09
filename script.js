// Get all elements with the class "item" and store them in the "items" variable
let items = document.getElementsByClassName("item");

// Get the left and right container elements by their IDs
let leftcontainer = document.getElementById("left");
let rightcontainer = document.getElementById("right");

// Function to change the background color of the container
function changeBackgroundColor(container, isEntering) {
  if (isEntering) {
    container.style.backgroundColor = "lightgreen"; // Change to desired background color when item is being dragged over
  } else {
    container.style.backgroundColor = ""; // Reset background color when item is dragged out
  }
}

// Iterate over each item
for (item of items) {
  // Add a dragstart event listener to each item
  item.addEventListener('dragstart', function(e) {
    let select_item = e.target; // Store the dragged item in the "select_item" variable

    // Add a dragover event listener to the right container
    rightcontainer.addEventListener('dragover', function(e) {
      e.preventDefault(); // Prevent default behavior of the dragover event
      changeBackgroundColor(rightcontainer, true); // Change background color of right container
    });

    // Add a dragenter event listener to the right container
    rightcontainer.addEventListener('dragenter', function(e) {
      e.preventDefault(); // Prevent default behavior of the dragenter event
      changeBackgroundColor(rightcontainer, true); // Change background color of right container
    });

    // Add a dragleave event listener to the right container
    rightcontainer.addEventListener('dragleave', function(e) {
      changeBackgroundColor(rightcontainer, false); // Reset background color of right container
    });

    // Add a drop event listener to the right container
    rightcontainer.addEventListener('drop', function(e) {
      rightcontainer.appendChild(select_item); // Append the dragged item to the right container
      select_item = null; // Reset the "select_item" variable
      changeBackgroundColor(rightcontainer, false); // Reset background color of right container
    });

    // Add a dragover event listener to the left container
    leftcontainer.addEventListener('dragover', function(e) {
      e.preventDefault(); // Prevent default behavior of the dragover event
      changeBackgroundColor(leftcontainer, true); // Change background color of left container
    });

    // Add a dragenter event listener to the left container
    leftcontainer.addEventListener('dragenter', function(e) {
      e.preventDefault(); // Prevent default behavior of the dragenter event
      changeBackgroundColor(leftcontainer, true); // Change background color of left container
    });

    // Add a dragleave event listener to the left container
    leftcontainer.addEventListener('dragleave', function(e) {
      changeBackgroundColor(leftcontainer, false); // Reset background color of left container
    });

    // Add a drop event listener to the left container
    leftcontainer.addEventListener('drop', function(e) {
      leftcontainer.appendChild(select_item); // Append the dragged item to the left container
      select_item = null; // Reset the "select_item" variable
      changeBackgroundColor(leftcontainer, false); // Reset background color of left container
    });
  });
}
