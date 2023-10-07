let image = document.querySelectorAll('.image');
let btn = document.querySelectorAll('button');
let footer = document.getElementsByClassName('footer')[0];

let no_of_image = image.length;
let curr_image_index = 0;

for( b of btn)
b.addEventListener('click',move)

function move(e)
{
    if(e.target.id =='left')
    {
        if(curr_image_index>0)
        {
            image[curr_image_index].classList.remove("active");
            curr_image_index--;
            image[curr_image_index].classList.add("active");
            
        }
        else{
            return;
        }
        
    }
  


   if(e.target.id =='right')
    {
        if(curr_image_index < no_of_image-1)
        {
            image[curr_image_index].classList.remove("active");
            curr_image_index++;
            image[curr_image_index].classList.add("active");
        }
        else{
            return;
        }
    }

    // footer.innerHTML = curr_image_index+1;
    footer.innerHTML = image[curr_image_index].getAttribute('data-iamge-type');
}





