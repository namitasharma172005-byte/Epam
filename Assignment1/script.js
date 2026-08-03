// Runs when the page loads
function trigger() {
    alert("Welcome to XYZ Bank!!!");
}


// Hides the instruction section
function hideInstructions() {

    // Hide the instructions
    document.getElementById("demo").style.display = "none";

    // Change the button text
    var btn = document.getElementById("registerBtn");
    btn.innerHTML = "Register in Progress...";
    btn.disabled = true;
} 

// Validates the customer ID
function validateCustomer() {
    var custId = document.getElementById("custID").value;

    var validateCust = custId.includes("XYZ");

    if (validateCust) {
        document.getElementById("result").innerHTML =
            "Customer ID is valid. Proceed further to generate coupon.";
    } 
    else {
        document.getElementById("result").innerHTML =
            "You are not a valid customer.";
    }
}

// Generates the coupon
function generateCoupon() {

    var custId = document.getElementById("custID").value;

    if (custId.includes("XYZ")) {

        var coupon = custId + "789456";

        document.getElementById("result").innerHTML =
            "Your Coupon Code is: " + coupon;

        // Registration completed
        var btn = document.getElementById("registerBtn");
        btn.innerHTML = "Registered Successfully ✓";

    } 
    else {

        document.getElementById("result").innerHTML =
            "Invalid Customer ID. Coupon can't be generated.";
    }
}