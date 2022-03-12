
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