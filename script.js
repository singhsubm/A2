document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = form.email.value;
        const name = form.name.value;
        const message = form.message.value;

        const data = `Email: ${email}\nName: ${name}\nMessage: ${message}\n\n`;

        // Send the data to the server to save in user.txt (server-side logic)
        saveDataOnServer(data);

        // Reset the form
        form.reset();
    });

    function saveDataOnServer(data) {
        // Use AJAX or fetch to send the data to a server-side script
        // On the server side, you should handle writing the data to user.txt
        // Here's a simplified example using the fetch API (requires server-side handling)
        fetch("save_data.php", {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "text/plain"
            }
        })
        .then(response => {
            if (response.status === 200) {
                alert("Data saved successfully.");
            } else {
                alert("Data could not be saved.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
});
