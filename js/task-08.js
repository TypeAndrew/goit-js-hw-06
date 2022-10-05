

const formEl = document.querySelector("form.login-form");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const { elements: { email, password } } = event.currentTarget;
    const dataForm = {
        email : email.value,
        password : password.value
    };

    if (email.value !== '' && password.value !== '') {
        
        console.log(dataForm);
        event.currentTarget.reset();

    } else {
        
        alert('всі поля повинні бути заповнені');
    }

});

// different way
/** 
const formEl = document.querySelector("form.login-form");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const listParams = [...event.currentTarget.elements].filter(value => value.name !== '');
    if (listParams[0].value !== '' && event.currentTarget[1].value !== '') {
            
            
        const dataForm = {};
        listParams.forEach((element) => {
    
            element.name = dataForm[element.name] = element.value;
        })
        console.log(dataForm);
        event.currentTarget.reset();

    } else {
        
        alert('всі поля повинні бути заповнені');
    }

});*/