let cartCount = 0;

// Update Cart Count
function updateCartCount() {
  document.getElementById("cart-count").textContent = cartCount;
}

// Add to Cart Functionality
function addToCart(event) {
  const button = event.target;
  if (button.classList.contains("add-to-cart-btn")) {
    cartCount++;
    updateCartCount();
    alert("Product added to cart!");
  }
}

// Event Listener for Add to Cart Buttons
document.addEventListener("DOMContentLoaded", () => {
  const productButtons = document.querySelectorAll(".add-to-cart-btn");
  productButtons.forEach((button) =>
    button.addEventListener("click", addToCart)
  );
});
