document.getElementById('signup-form').addEventListener('submit', function(event){
    event.preventDefault()


const Name = document.getElementById('name').value;
const LastName = document.getElementById('last-name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirm-password').value;

let errorMessage='';

if (Name === '' || LastName === '' || email === '' || password === '' || confirmPassword === ''){
    errorMessage = 'All feilds are required.';
} else if (password !== confirmPassword){
    errorMessage = 'password does not match.';
} else if (password.length < 6){
    errorMessage='password is too short please type at least 6 charecters.';
}

const errorElement= document.getElementById('error-message')
if(errorElement !== ''){
errorElement.textContent = errorMessage
}else{
    errorElement.textContent=''
    alert ('form submited successfully! ')
}
});
