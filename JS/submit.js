const sendEmailButton = document.getElementById("submit");

sendEmailButton.addEventListener("click", function(event) {
event.preventDefault();

const recipient = "xx_six@mail.ru"; 
const subject = "Запись на фотосессию";
const body = "Текст письма"; 

const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

window.location.href = mailtoLink;
});