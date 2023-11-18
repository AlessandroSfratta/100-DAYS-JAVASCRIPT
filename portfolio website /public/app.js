function EventBody(){
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    
        document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
};

EventBody()

const nameContact = document.getElementById("name-contact");
const emailContact = document.getElementById("email-contact");
const subjectContact = document.getElementById("subject-contact")
const messageContact = document.getElementById("message-contact")
const submitButton = document.getElementById("submit-btn2");




submitButton.addEventListener('click',(e) => {
    e.preventDefault();

    let ebody = `
    Name: ${nameContact.value}
    <br>
    Email Contact: ${emailContact.value}
    <br>
    Message: ${messageContact.value}`;
    
    Email.send({
        SecureToken: "b18346ef-fe69-46d8-9a02-ff4f9eae3bd5",
        To: 'alessandrosfratta99@gmail.com', 
        From: "alessandrosfratta99@gmail.com",
        Subject: "Email Alessandro-Portfolio =" + subjectContact.value,
        Body: ebody
    }).then(
      message => alert("Message sent ✅")
    );
});


 

document.querySelectorAll('.blog-link').forEach((ele) => {
ele.addEventListener('click', () => window.open(ele.getAttribute('data-url'), '_blank'));
});