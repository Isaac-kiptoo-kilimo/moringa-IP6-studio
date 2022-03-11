$(document).ready(function(){
    $('.img').click(()=>{
       $(this).siblings('.description').addClass('d-block')
       console.log($(this))
    })
})
