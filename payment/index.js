document.addEventListener("DOMContentLoaded", () => {
    const cardInput = document.getElementById("card");
    const expiryInput = document.getElementById("expiry");
    const cvvInput = document.getElementById("cvv");
  
    // Format card number (e.g., 1234 5678 9012 3456)
    cardInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
      value = value.match(/.{1,4}/g)?.join(" ") || value; // Group digits in sets of 4
      e.target.value = value;
    });
  
    // Format expiry date (e.g., MM/YY)
    expiryInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
      if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4); // Add slash after MM
      }
      e.target.value = value.substring(0, 5); // Limit to 5 characters
    });
  
    // Restrict CVV to 3 digits
    cvvInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "").substring(0, 3); // Allow only 3 digits
    });
  });