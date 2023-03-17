//Username
const userRegex = document.getElementById('username-regex')
const myUsername = document.getElementById('my-username')
const checkUser = (value) => {
    const regex0 = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{0,30}$/
    const isUsername = regex0.test(value)
    if(isUsername){
        return true
    } else {
        return false
    }
}
userRegex.addEventListener('keyup', (e) => {
    const value0 = e.target.value
    const isUsername = checkUser(value0)
    if(isUsername){
        userRegex.className = "form-control is-valid"
        myUsername.style.display = "none"
    } else {
        userRegex.className = "form-control is-invalid"
        myUsername.style.display = "block"
        myUsername.innerHTML = '<small style="color:red">Please insert uppercase and number.</small>'
    }
})

 //Password
 const passRegex = document.getElementById('password-regex')
 const myPassword = document.getElementById('my-password')
 const checkPassword = (value) => {
     const regex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,20}$/
     const isPassword = regex.test(value)
     if(isPassword){
         return true
     } else {
         return false
     }
 }
 passRegex.addEventListener('keyup', (e) => {
     const value = e.target.value
     const isPassword = checkPassword(value)
     if(value.length >=6){
         if(isPassword) {
             passRegex.className = "form-control is-valid"
             myPassword.style.display = "none"
         } else {
             passRegex.className = "form-control is-invalid"
             myPassword.style.display = "block"
             myPassword.innerHTML = '<small style="color:red">Please insert a number.</small>'
         }
     } else {
         passRegex.className = "form-control is-invalid"
         myPassword.style.display = "block"
         myPassword.innerHTML = '<small style="color:red">Minimum 6 characters.</small>'
     }
 })

//Email
const emailRegex = document.getElementById('email-regex')
const myEmail = document.getElementById('my-email')
const checkEmail = (value) => {
    const regex2 = /^[a-zA-Z0-9._-]+@[u]+[s]+[u]+\.[a]+[c]+\.[i]+[d]$/
    const isEmail = regex2.test(value)
    if(isEmail){
        return true
    } else {
        return false
    }
}
emailRegex.addEventListener('keyup', (e) => {
    const value2 = e.target.value
    const isEmail = checkEmail(value2)
    if(isEmail) {
        emailRegex.className = "form-control is-valid"
        myEmail.style.display = "none"
    } else {
        emailRegex.className = "form-control is-invalid"
        myEmail.style.display = "block"
        myEmail.innerHTML = '<small style="color:red">Please use email from usu.</small>'
    }
})

//Telephone
const phoneRegex = document.getElementById('phone-regex')
const myPhone = document.getElementById('my-phone')
const checkPhoneNumber = (value) => {
    const regex1 = /^[0]+[0-9]+\d{9,11}$/
    const isPhoneNumber = regex1.test(value)
    if(isPhoneNumber){
        return true
    } else {
        return false
    }
}
phoneRegex.addEventListener('keyup', (e) => {
    const value1 = e.target.value
    const isPhoneNumber = checkPhoneNumber(value1)
    if(value1.length <= 13) {
        if(isPhoneNumber){
            phoneRegex.className = "form-control is-valid"
            myPhone.style.display = "none"
        } else {
            phoneRegex.className = "form-control is-invalid"
            myPhone.style.display = "round"
            myPhone.innerHTML = '<small style="color:orange">Phone number is too short.</small>'
        }
    } else {
        phoneRegex.className = "form-control is-invalid"
        myPhone.style.display = "round"
        myPhone.innerHTML = '<small style="color:orange">Phone number is too long.</small>'
    }
})

//Birthdate
const birthdateRegex = document.getElementById('birthdate-regex')
const myBirthdate = document.getElementById('my-birthdate')
const checkBirthdate = (value) => {
    const regex3 = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
    const isBirthdate = regex3.test(value)
    if(isBirthdate){
        return true
    } else {
        return false
    }
}
birthdateRegex.addEventListener('keyup', (e) => {
    const value3 = e.target.value
    const isBirthdate = checkEmail(value3)
    if(value3.length == 10) {
        birthdateRegex.className = "form-control is-valid"
        myBirthdate.style.display = "none"
    } else {
        birthdateRegex.className = "form-control is-invalid"
        myBirthdate.style.display = "block"
        myBirthdate.innerHTML = '<small style="color:red">Must on Date Formula. (DD/MM/YYYY)</small>'
    }
})
