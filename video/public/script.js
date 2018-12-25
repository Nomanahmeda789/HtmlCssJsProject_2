var flag=1;
var count1=1;
var c1=0;
var count2=1;
var c2=0;
var count3=1;
var c3=0;
var count4=1;
var c4=0;
var count5=1;
var c5=0;

document.getElementById('b12').style.backgroundColor='red'
document.getElementById('b11').style.backgroundColor='blue'

document.getElementById('b22').style.backgroundColor='red'
document.getElementById('b21').style.backgroundColor='blue'

document.getElementById('b32').style.backgroundColor='red'
document.getElementById('b31').style.backgroundColor='blue'

document.getElementById('b42').style.backgroundColor='red'
document.getElementById('b41').style.backgroundColor='blue'

document.getElementById('b52').style.backgroundColor='red'
document.getElementById('b51').style.backgroundColor='blue'

function videolist(f,a,b,c,src,post,endfun,vid){
    var player=document.querySelector('.player');
    // console.log(src)
    // console.log(post)
    // console.log(endfun)
    // console.log(vid)
    player.setAttribute('src',src)
    player.setAttribute('reload','auto')
    player.setAttribute('load','load')
    player.setAttribute('poster',post)
    player.setAttribute('onended',endfun)
    player.setAttribute('id',vid)
    
    
    console.log(player)
    flag=f;
    
    if(flag==1){
        document.getElementById('l2').className='nottoshow'
        document.getElementById('l3').className='nottoshow'
        document.getElementById('l4').className='nottoshow'
        document.getElementById('l5').className='nottoshow'
        document.getElementById('l1').className="row"

        // document.querySelector('.v1').setAttribute('src','./a.mp4')
        // document.querySelector('.v2').setAttribute('src','')
        // document.querySelector('.v3').setAttribute('src','')
        // document.querySelector('.v4').setAttribute('src','')
        // document.querySelector('.v5').setAttribute('src','')
        document.getElementById('a11').style.backgroundColor='lightgray';
        document.getElementById('a12').style.backgroundColor='white';
        document.getElementById('a13').style.backgroundColor='white';
    
    }
    else if(flag==2){
        document.getElementById('l2').className="row"
        document.getElementById('l1').className='nottoshow'
        document.getElementById('l3').className='nottoshow'
        document.getElementById('l4').className='nottoshow'
        document.getElementById('l5').className='nottoshow'

        
        // document.querySelector('.v1').setAttribute('src','')
        // document.querySelector('.v2').setAttribute('src','./d.mp4')
        // document.querySelector('.v3').setAttribute('src','')
        // document.querySelector('.v4').setAttribute('src','')
        // document.querySelector('.v5').setAttribute('src','')
        
        document.getElementById('a21').style.backgroundColor='lightgray';
        document.getElementById('a22').style.backgroundColor='white';
        document.getElementById('a23').style.backgroundColor='white';
    }
    
    else if(flag==3){
        document.getElementById('l3').className="row"
    
        document.getElementById('l2').className='nottoshow'
        document.getElementById('l1').className='nottoshow'
        document.getElementById('l4').className='nottoshow'
        document.getElementById('l5').className='nottoshow'
        
        // document.querySelector('.v1').setAttribute('src','')
        // document.querySelector('.v2').setAttribute('src','')
        // document.querySelector('.v3').setAttribute('src','./h.mp4')
        // document.querySelector('.v4').setAttribute('src','')
        // document.querySelector('.v5').setAttribute('src','')
        
        document.getElementById('a31').style.backgroundColor='lightgray';
        document.getElementById('a32').style.backgroundColor='white';
        document.getElementById('a33').style.backgroundColor='white';
    }
    
    else if(flag==4){
        document.getElementById('l4').className="row"
        
        document.getElementById('l2').className='nottoshow'
        document.getElementById('l3').className='nottoshow'
        document.getElementById('l1').className='nottoshow'
        document.getElementById('l5').className='nottoshow'
        
        // document.querySelector('.v1').setAttribute('src','')
        // document.querySelector('.v2').setAttribute('src','')
        // document.querySelector('.v3').setAttribute('src','')
        // document.querySelector('.v4').setAttribute('src','./j.mp4')
        // document.querySelector('.v5').setAttribute('src','')
        
        document.getElementById('a41').style.backgroundColor='lightgray';
        document.getElementById('a42').style.backgroundColor='white';
        document.getElementById('a43').style.backgroundColor='white';
    }
    
    else if(flag==5){
        document.getElementById('l5').className="row"
        document.getElementById('l2').className='nottoshow'
        document.getElementById('l3').className='nottoshow'
        document.getElementById('l4').className='nottoshow'
        document.getElementById('l1').className='nottoshow'
        
        // document.querySelector('.v1').setAttribute('src','')
        // document.querySelector('.v2').setAttribute('src','')
        // document.querySelector('.v3').setAttribute('src','')
        // document.querySelector('.v4').setAttribute('src','')
        // document.querySelector('.v5').setAttribute('src','./e.mp4')
        
        document.getElementById('a51').style.backgroundColor='lightgray';
        document.getElementById('a52').style.backgroundColor='white';
        document.getElementById('a53').style.backgroundColor='white';
    }
}

//******************1**************** */

function nextvideo1(){
    // count++;
    if(count1==1){
        document.getElementById('video1').src='./b.mp4';
        document.getElementById('video1').setAttribute('autoplay','autoplay')
        document.getElementById('a13').style.backgroundColor='lightgray';
        document.getElementById('a12').style.backgroundColor='white';
        document.getElementById('a11').style.backgroundColor='white';
        count1++;
    }
    else if(count1==2){
        document.getElementById('video1').src='./c.mp4';
        document.getElementById('video1').setAttribute('autoplay','autoplay')
        document.getElementById('a12').style.backgroundColor='lightgray';
        document.getElementById('a11').style.backgroundColor='white';
        document.getElementById('a13').style.backgroundColor='white';
        count1++;
    }
    else if(c1==1){
        document.getElementById('video1').src='./a.mp4';
        document.getElementById('a11').style.backgroundColor='lightgray';
        document.getElementById('a12').style.backgroundColor='white';
        document.getElementById('a13').style.backgroundColor='white';
        count1=1;
    }
    else if(count1==3){
        document.getElementById('video1').removeAttribute('autoplay')
        
    }
}
function autoplay1(){
    c1=1;
    document.getElementById('b11').style.backgroundColor='red'
    document.getElementById('b12').style.backgroundColor='blue'
    
}

function autoplayoff1(){
    c1=0;
    document.getElementById('b12').style.backgroundColor='red'
    document.getElementById('b11').style.backgroundColor='blue'
}
function video1(z,x,c,v,b){
    document.getElementById('video1').src=z;
    count1=b;
    document.getElementById('video1').setAttribute('autoplay','autoplay')    
    document.getElementById(x).style.backgroundColor='lightgray';
    document.getElementById(c).style.backgroundColor='white';
    document.getElementById(v).style.backgroundColor='white';

}


//**********************2************************ */

function nextvideo2(){
    // count++;
    if(count2==1){
        document.getElementById('video2').src='./e.mp4';
        document.getElementById('video2').setAttribute('autoplay','autoplay')
        document.getElementById('a23').style.backgroundColor='lightgray';
        document.getElementById('a22').style.backgroundColor='white';
        document.getElementById('a21').style.backgroundColor='white';
        count2++;
    }
    else if(count2==2){
        document.getElementById('video2').src='./g.mp4';
        document.getElementById('video2').setAttribute('autoplay','autoplay')
        document.getElementById('a22').style.backgroundColor='lightgray';
        document.getElementById('a21').style.backgroundColor='white';
        document.getElementById('a23').style.backgroundColor='white';
        count2++;
    }
    else if(c2==1){
        document.getElementById('video2').src='./d.mp4';
        document.getElementById('a21').style.backgroundColor='lightgray';
        document.getElementById('a22').style.backgroundColor='white';
        document.getElementById('a23').style.backgroundColor='white';
        count2=1;
    }
    else if(count2==3){
        document.getElementById('video2').removeAttribute('autoplay')
        
    }
}
function autoplay2(){
    c2=1;
    document.getElementById('b21').style.backgroundColor='red'
    document.getElementById('b22').style.backgroundColor='blue'
    
}

function autoplayoff2(){
    c2=0;
    document.getElementById('b22').style.backgroundColor='red'
    document.getElementById('b21').style.backgroundColor='blue'
}
function video2(z,x,c,v,b){
    document.getElementById('video2').src=z;
    count2=b;
    document.getElementById('video2').setAttribute('autoplay','autoplay')    
    document.getElementById(x).style.backgroundColor='lightgray';
    document.getElementById(c).style.backgroundColor='white';
    document.getElementById(v).style.backgroundColor='white';

}

//****************************3**************** */


function nextvideo3(){
    // count++;
    if(count3==1){
        document.getElementById('video3').src='./i.mp4';
        document.getElementById('video3').setAttribute('autoplay','autoplay')
        document.getElementById('a33').style.backgroundColor='lightgray';
        document.getElementById('a32').style.backgroundColor='white';
        document.getElementById('a31').style.backgroundColor='white';
        count3++;
    }
    else if(count3==2){
        document.getElementById('video3').src='./j.mp4';
        document.getElementById('video3').setAttribute('autoplay','autoplay')
        document.getElementById('a32').style.backgroundColor='lightgray';
        document.getElementById('a31').style.backgroundColor='white';
        document.getElementById('a33').style.backgroundColor='white';
        count3++;
    }
    else if(c3==1){
        document.getElementById('video3').src='./h.mp4';
        document.getElementById('a31').style.backgroundColor='lightgray';
        document.getElementById('a32').style.backgroundColor='white';
        document.getElementById('a33').style.backgroundColor='white';
        count3=1;
    }
    else if(count3==3){
        document.getElementById('video3').removeAttribute('autoplay')
        
    }
}
function autoplay3(){
    c3=1;
    document.getElementById('b31').style.backgroundColor='red'
    document.getElementById('b32').style.backgroundColor='blue'
    
}

function autoplayoff3(){
    c3=0;
    document.getElementById('b32').style.backgroundColor='red'
    document.getElementById('b31').style.backgroundColor='blue'
}
function video3(z,x,c,v,b){
    document.getElementById('video3').src=z;
    count3=b;
    document.getElementById('video3').setAttribute('autoplay','autoplay')    
    document.getElementById(x).style.backgroundColor='lightgray';
    document.getElementById(c).style.backgroundColor='white';
    document.getElementById(v).style.backgroundColor='white';

}

//**********************4**************** */

function nextvideo4(){
    // count++;
    if(count4==1){
        document.getElementById('video4').src='./g.mp4';
        document.getElementById('video4').setAttribute('autoplay','autoplay')
        document.getElementById('a43').style.backgroundColor='lightgray';
        document.getElementById('a42').style.backgroundColor='white';
        document.getElementById('a41').style.backgroundColor='white';
        count4++;
    }
    else if(count4==2){
        document.getElementById('video4').src='./c.mp4';
        document.getElementById('video4').setAttribute('autoplay','autoplay')
        document.getElementById('a42').style.backgroundColor='lightgray';
        document.getElementById('a41').style.backgroundColor='white';
        document.getElementById('a43').style.backgroundColor='white';
        count4++;
    }
    else if(c4==1){
        document.getElementById('video4').src='./j.mp4';
        document.getElementById('a41').style.backgroundColor='lightgray';
        document.getElementById('a42').style.backgroundColor='white';
        document.getElementById('a43').style.backgroundColor='white';
        count4=1;
    }
    else if(count4==3){
        document.getElementById('video4').removeAttribute('autoplay')
        
    }
}
function autoplay4(){
    c4=1;
    document.getElementById('b41').style.backgroundColor='red'
    document.getElementById('b42').style.backgroundColor='blue'
    
}

function autoplayoff4(){
    c4=0;
    document.getElementById('b42').style.backgroundColor='red'
    document.getElementById('b41').style.backgroundColor='blue'
}
function video4(z,x,c,v,b){
    document.getElementById('video4').src=z;
    count4=b;
    document.getElementById('video4').setAttribute('autoplay','autoplay')    
    document.getElementById(x).style.backgroundColor='lightgray';
    document.getElementById(c).style.backgroundColor='white';
    document.getElementById(v).style.backgroundColor='white';

}

//*****************************5************* */

function nextvideo5(){
    // count++;
    if(count5==1){
        document.getElementById('video5').src='./i.mp4';
        document.getElementById('video5').setAttribute('autoplay','autoplay')
        document.getElementById('a53').style.backgroundColor='lightgray';
        document.getElementById('a52').style.backgroundColor='white';
        document.getElementById('a51').style.backgroundColor='white';
        count5++;
    }
    else if(count5==2){
        document.getElementById('video5').src='./h.mp4';
        document.getElementById('video5').setAttribute('autoplay','autoplay')
        document.getElementById('a52').style.backgroundColor='lightgray';
        document.getElementById('a51').style.backgroundColor='white';
        document.getElementById('a53').style.backgroundColor='white';
        count5++;
    }
    else if(c5==1){
        document.getElementById('video5').src='./e.mp4';
        document.getElementById('a51').style.backgroundColor='lightgray';
        document.getElementById('a52').style.backgroundColor='white';
        document.getElementById('a53').style.backgroundColor='white';
        count5=1;
    }
    else if(count5==3){
        document.getElementById('video5').removeAttribute('autoplay')
        
    }
}
function autoplay5(){
    c5=1;
    document.getElementById('b51').style.backgroundColor='red'
    document.getElementById('b52').style.backgroundColor='blue'
    
}

function autoplayoff5(){
    c5=0;
    document.getElementById('b52').style.backgroundColor='red'
    document.getElementById('b51').style.backgroundColor='blue'
}
function video5(z,x,c,v,b){
    document.getElementById('video5').src=z;
    count5=b;
    document.getElementById('video5').setAttribute('autoplay','autoplay')    
    document.getElementById(x).style.backgroundColor='lightgray';
    document.getElementById(c).style.backgroundColor='white';
    document.getElementById(v).style.backgroundColor='white';

}