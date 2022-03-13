
$('.img').click((e)=>{
     e.currentTarget.nextElementSibling.classList.remove('d-none')
     e.currentTarget.nextElementSibling.classList.add('d-block')
     $('.description').css({'text-align':'center'})
 
})
$('.por').mouseenter((e)=>{
    console.log($(this))
    $(e.currentTarget).find('.title').addClass('d-block')
    $(e.currentTarget).find('.title').removeClass('d-none')
})
$('.por').mouseleave((e)=>{
    $(e.currentTarget).find('.title').addClass('d-none')
    $(e.currentTarget).find('.title').removeClass('d-block')
})

const form=document.getElementById("contact-form");
const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const text=document.getElementById("message");


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendMessage(text.value,`${fname.value} ${lname.value}`)
    alert(`Hello ${fname.value} ${lname.value}, we have received your message. Thank you fro reaching out to us. `)
})

function sendMessage(message,name){
    const data = JSON.stringify({
        "key": "HbaDQ-6U9OT4QAAs_mVciA",
        "message": {
          "from_email": "support@livesoftwaredeveloper.com",
          "subject": name,
          "text": message,
          "to": [
            {
              "email": "support@livesoftwaredeveloper.com",
              "type": "to"
            }
          ]
        }
      });
      
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("GET", "https://mandrillapp.com/api/1.0/messages/send/");
      xhr.setRequestHeader("authorization", "Bearer HbaDQ-6U9OT4QAAs_mVciA");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("mode", "no-cors");
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      
      xhr.send(data);
}