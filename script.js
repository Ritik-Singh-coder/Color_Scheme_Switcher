const button = document.querySelectorAll('.button')
const body = document.querySelector("body");

console.log(button);

button.forEach((btn) =>{
    console.log(btn);
    btn.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id == "grey"){
            body.style.backgroundColor = 'grey';
        }
        else if(e.target.id == "white") {
            body.style.backgroundColor = "crimson";
        }

        else if(e.target.id == "blue") {
            // body.style.backgroundImage = "url('https://www.hindustantimes.com/ht-img/img/2023/10/29/550x309/blue_lock_nagi_1680719678264_1698573006873.jpg')";
            // body.style.backgroundRepeat = "no-repeat";

            // body.style.background = "linear-gradient(to left bottom, gold,crimson,royalblue  )";
            body.style.backgroundColor = "royalblue";

            


           
        }
        if(e.target.id == "yellow"){
            body.style.backgroundColor = "orange";

        }

    })

     
});













