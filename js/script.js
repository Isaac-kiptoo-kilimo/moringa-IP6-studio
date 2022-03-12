 const image=document.querySelector('#img1')
 const image2=document.querySelector('#img2')
 const image3=document.querySelector('#img3')
 const description1=document.querySelector('#description1')
 const description2=document.querySelector('#description2')
 const description3=document.querySelector('#description3')


 

image.addEventListener('click',(e)=>{
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

