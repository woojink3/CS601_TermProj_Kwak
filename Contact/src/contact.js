// references
const f = document.forms.myForm;
const fName = document.getElementById('first-name');
const lName = document.getElementById('last-name');
const email = document.getElementById('email');

// add event listener
f.addEventListener('submit', validateForm)

// Validate
function validateForm(e){
    e.preventDefault();
    // get data
    const item1 = fName.value.trim();
    const item2 = lName.value.trim();
    const item3 = email.value.trim();

    // Validate first name and last name
    const regex = /^[A-Za-z]+$/;
    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    // Set error messages
    const firstnameError = document.getElementById("firstname-error")
    const lastnameError = document.getElementById("lastname-error")
    const emailError = document.getElementById("email-error")

    //reset error messages
    firstnameError.textContent = '';
    lastnameError.textContent = '';
    emailError.textContent = '';

    let isValid = true;

    // Validate first name
    if (regex.test(item1) === true){
        if(item1.length < 2){
            firstnameError.textContent = 'Must contain at least two characters.'
            isValid = false;
        }
    }
    else{
        firstnameError.textContent = 'Must only contain alphabet characters (A-Z).'
        isValid = false;
    }

    // Validate last name
    if (regex.test(item2) === true){
        if(item1.length < 2){
            lastnameError.textContent = 'Must contain at least two characters.'
            isValid = false;
        }
    }
    else{
        lastnameError.textContent = 'Must only contain alphabet characters (A-Z).'
        isValid = false;
    }

    // Validate email
    if (emailRegex.test(item3) === false){
        emailError.textContent = 'Invalid email'
        isValid = false;
    }

    // All fields are valid
    if (isValid){
        //Hide form and display success message
        document.getElementById('message-head').style.display = 'none';
        document.getElementById('myForm').style.display = 'none';
        const successMessage = document.getElementById('success-message');
        successMessage.innerHTML = `<p>Thank you for contacting me!</p><p><a href="https://woojink-about.netlify.app/">Return to Home</a></p>`;
        successMessage.style.display = 'block'
        
    }
}
