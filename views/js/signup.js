var BASE_URL="http://localhost:3000"
document.addEventListener("DOMContentLoaded", function() {
    let submitBtn = document.getElementById("signup-submit-btn");
    if (submitBtn) {
        submitBtn.addEventListener("click",async function(event) {
            event.preventDefault();
            let email = document.querySelector(".signup-email-input").value;
            let password = document.querySelector(".signup-password-input").value;
            let name = document.querySelector(".signup-name-input").value;
            if (email && password&&name) {
                await axios.post(`${BASE_URL}/register`,{
                    email,password,name
                })
                window.location.href = "/now";
            } else {
                alert("Please enter both email and password.");
            }
        });
    } else {
        console.error("Submit button not found.");
    }
});