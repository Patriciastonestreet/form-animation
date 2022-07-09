function animateForm(){
const arrows = document.querySelectorAll('.fa-arrow-down');

arrows.forEach(arrow =>{
 arrow.addEventListener("click", () =>{
     const input = arrow.previousElementSibling;
     const parent = arrow.parentElement;
     const nextForm = parent.nextElementSibling;


     //check validation
     if(input.type === "text" && validateUser(input)){
        nextSlide(parent, nextForm); //for the username
     } else if (input.type === "email" && validateEmail(input)){
         nextSlide(parent, nextForm); // for the email

     } else if (input.type === "password" && validateUser(input)){
        nextSlide(parent, nextForm); // for password

     } else{
         parent.style.animation = "shake 0.5s ease"; //shake animation when wrong
     }
     //get rid of animation
     parent.addEventListener("animationend", () =>{
         parent.style.animation = "";
     })
 });
});

}

function validateUser(user){
    if(user.value.length < 6){
        console.log("not enough characters");
        error("rgb(255, 125, 117)"); //red color error
    } else {
        error("rgb(175, 218, 203)"); // green color right
        return true;
    }
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        error("rgb(175, 218, 203)");
        return true;
    } else {
        error("rgb(255, 125, 117)");
    }
}



function nextSlide(parent, nextForm){
    parent.classList.add("inactive"); //transition out
    parent.classList.remove("active");
    nextForm.classList.add("active"); //transition in
}


function error(color){
    document.body.style.backgroundColor = color;
}

animateForm();