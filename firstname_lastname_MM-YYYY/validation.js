window.addEventListener('load', function() {
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');
    let form = document.getElementById('form');
    let submit = document.getElementById('submit');

    form.addEventListener("submit", function(event) {
        // Is there an email address and is it valid (contains the "@" symbol)?
        if (!email.value.includes("@") || email.value == "") {
            document.getElementById("email-error").style.display = "flex";
            event.preventDefault();
        };
        
        // Is there a subject line?
        if (subject.value == "") {
            document.getElementById("subject-error").style.display = "flex";
            event.preventDefault();
        };

        // Is there a message?
        if (message.value == "") {
            document.getElementById("message-error").style.display = "flex";
            event.preventDefault();
        };
    });
});
