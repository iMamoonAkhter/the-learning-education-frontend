// Function to handle form submission
document.getElementById("contact-form-main").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from reloading

    // Capture form data
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('note').value
    };

    // Show the loader
    document.getElementById("loader").style.display = "block";

    try {
        // Send the form data to the server
        const res = await fetch('http://localhost:8000/api/v1/users/nodemailer', {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Check if the request was successful
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        // Hide the loader
        document.getElementById("loader").style.display = "none";

        // Show the success message
        document.getElementById("success").style.display = "block";
        document.getElementById("error").style.display = "none";

        // Clear the form
        document.getElementById("contact-form-main").reset();
    } catch (error) {
        console.error(error);

        // Hide the loader
        document.getElementById("loader").style.display = "none";

        // Show the error message
        document.getElementById("error").style.display = "block";
        document.getElementById("success").style.display = "none";
    }
});