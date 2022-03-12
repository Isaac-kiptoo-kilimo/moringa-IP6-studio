const image=document.querySelector('#img1')
const description1=document.querySelector('#description1')
const description2=document.querySelector('#description2')
const description3=document.querySelector('#description3')
const hoverme=document.querySelector('.hoverme')
const hoverme2=document.querySelector('.hoverme2')
const image2=document.querySelector('#img2')
const image3=document.querySelector('#img3')

hoverme.addEventListener('click',(e)=>{
    e.preventDefault()
    
    image.classList.add('d-none')
    description1.classList.remove('d-none')
  

})


image2.addEventListener('click',(e)=>{
    e.preventDefault()
    
    image2.classList.add('d-none')
    description2.classList.remove('d-none')

    
})
image3.addEventListener('click',(e)=>{
    e.preventDefault()
    
    image3.classList.add('d-none')
    description3.classList.remove('d-none')

    
})





// $(document).ready(function(){
//     $('.img').click(()=>{
//        $(this).find('.description').addClass('d-block')
//        console.log($(this))
//     })
// // })
// $(document).ready(function(){
//     $('.icons').click(
//     function(){
//         $(this).siblings().next('d-block').hide();
//     },
//     function(){
//         $(this).siblings().next('.description').show('slow');
//     });
// });
// $('.img').each(()=>{
//     $(this).click(()=>{
//         // console.log('clicked')
//         $(this).
//     })

// })
