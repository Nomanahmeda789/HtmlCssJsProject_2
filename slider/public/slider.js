var images=['1','2','3','4'];
var flag=0;
function count_plus(){
    if(flag==images.length-1){
        flag=0;
    }
    else{
        flag++;
    }
    console.log(flag);
    document.getElementById('main').style.backgroundImage="url(img/"+images[flag]+".jpg)";
    document.getElementById('main').style.transition="0.7s";
    switch(flag){
        case 0:
           document.getElementById("card_t").innerHTML="New York , USA"
        break;
        case 1:
           document.getElementById("card_t").innerHTML="Austin , USA"
        break;
        case 2:
           document.getElementById("card_t").innerHTML="Atlanta , USA"
        break;
        case 3:
           document.getElementById("card_t").innerHTML="Portland , USA"
        break;

    }
}
function count_minus(){
    if(flag==0){
        flag=images.length-1;
    }
    else{
        flag--;
    }
    console.log(flag);
    document.getElementById('main').style.backgroundImage="url(img/"+images[flag]+".jpg)";
    document.getElementById('main').style.transition="0.7s";
    switch(flag){
        case 0:
           document.getElementById("card_t").innerHTML="New York , USA"
           
        break;
        case 1:
           document.getElementById("card_t").innerHTML="Austin , USA"
        break;
        case 2:
           document.getElementById("card_t").innerHTML="Atlanta , USA"
        break;
        case 3:
           document.getElementById("card_t").innerHTML="Portland , USA"
        break;

    }
}

