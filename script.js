 
 
 const boxes = document.querySelectorAll('.box');
        const totalDisplay = document.querySelector('.total');
        const addToCartButton = document.querySelector('.add-to-cart');

        let total = 0;

        // Add a click event listener to each box
        boxes.forEach(box => {
            box.addEventListener('click', () => {
                boxes.forEach(b => b.classList.remove('active'));
                box.classList.add('active');
            });
        });

 
        addToCartButton.addEventListener('click', () => {
            const activeBox = document.querySelector('.box.active');
            // Check if an active box is selected
            if (activeBox) {
                // Retrieve the price of the selected box from its 'data-price' attribute
                const price = parseFloat(activeBox.getAttribute('data-price'));
                total += price;
                // Update the total display with the new total amount
                totalDisplay.textContent = `Total: $${total.toFixed(2)} USD`;
            } else {
                // Alert the user to select a box if no box is currently active
                alert('Please select a box before adding to cart.');
            }
        });