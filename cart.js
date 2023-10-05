const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get("id");

        if (productId) {
            const cartItems = document.getElementById("cart-items");
            const cartItem = document.createElement("li");
            cartItem.textContent = `Product ID: ${productId}`;
            cartItems.appendChild(cartItem);
        }