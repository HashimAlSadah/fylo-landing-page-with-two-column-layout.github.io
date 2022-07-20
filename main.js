const emailInputIntro = document.querySelector(".intro .email-form input");
const emailInputEarlyAccess = document.querySelector(".early-access .email-form input");
const buttonIntro = document.querySelector(".intro .email-form button");
const buttonEarlyAccess = document.querySelector(".early-access .email-form button");
const emailRegExp = new RegExp("(^[a-z0-9])([a-z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\]\*]*)@[a-z0-9]+[\.]{1}.+[a-z0-9]+$", "i");
const introErrorMessage = document.querySelector(".intro .error-message");
const earlyAccessErrorMessage = document.querySelector(".early-access .error-message");
buttonIntro.addEventListener("click", (event)=>{
    event.preventDefault();
    const email = emailInputIntro.value;
    if(!emailRegExp.test(email)){
        introErrorMessage.classList.add("active");
        emailInputIntro.classList.add("active");
    }else if(emailRegExp.test(email)){
        introErrorMessage.classList.remove("active");
        mailInputIntro.classList.remove("active");
    }
})

buttonEarlyAccess.addEventListener("click", (event)=>{
    event.preventDefault();
    const email = emailInputEarlyAccess.value;
    if(!emailRegExp.test(email)){
        earlyAccessErrorMessage.classList.add("active");
        emailInputEarlyAccess.classList.add("active");
    }else if(emailRegExp.test(email)){
        earlyAccessErrorMessage.classList.remove("active");
        emailInputEarlyAccess.classList.remove("active");
    }
})

