// $(document).ready(function(){
    $('.img').click(()=>{
       $(this).find('.description').addClass('d-block')
       console.log($(this))
    })
// })
$(document).ready(function(){
    $('.icons').click(
    function(){
        $(this).siblings().next('d-block').hide();
    },
    function(){
        $(this).siblings().next('.description').show('slow');
    });
});
// $('.img').each(()=>{
//     $(this).click(()=>{
//         // console.log('clicked')
//         $(this).
//     })

// })