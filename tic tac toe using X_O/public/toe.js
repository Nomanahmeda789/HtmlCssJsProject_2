var mainDiv=document.getElementById('mainDiv');
//div 1
var div1=document.createElement('div');
div1.setAttribute('class','container-fluid sub_div1 bg-dark text-warning');
var img=document.createElement('img')
img.setAttribute('src','./img/2.png')
img.setAttribute('class','sub_div_img')
var h1=document.createElement('h1');
var h1_text=document.createTextNode("Google's Tic-Tac-Toe");
h1.setAttribute('class','sub_div_heading')
h1.appendChild(h1_text)
div1.appendChild(img)
div1.appendChild(h1)

//div 2
var div2=document.createElement('div');
div2.setAttribute('class','container sub_div2');
var sub_div2=document.createElement('div');
sub_div2.setAttribute('class','container game_div');

//game div
var g1=document.createElement('div')
var g2=document.createElement('div')
var g3=document.createElement('div')
g1.setAttribute('class','g1')
g2.setAttribute('class','container-fluid g2')
g3.setAttribute('class','container-fluid g3')

//g1.....
var h3=document.createElement('h3');
var h3_text=document.createTextNode('Tic-Tac-Toe');
h3.setAttribute('class','g1_heading')
h3.appendChild(h3_text);
var g1_dr=document.createElement('div')
var g1_r=document.createElement('div')
var g1_r1=document.createElement('div')
var g1_r2=document.createElement('div')
g1_r1.setAttribute('onclick','startgame(1)')
g1_r2.setAttribute('onclick','startgame(2)')
g1_dr.setAttribute('class','g1_dr')
g1_r.setAttribute('class','row g1_r')
g1_r1.setAttribute('class','col g1_r1')
g1_r2.setAttribute('class','col g1_r2')
var s11=document.createElement('span')
s11.setAttribute('class','XO_text')
var s12=document.createElement('span')
s12.setAttribute('class','dash_text')
var s21=document.createElement('span')
s21.setAttribute('class','XO_text')
var s22=document.createElement('span')
s22.setAttribute('class','dash_text')
var r1_text1=document.createTextNode('X');
var r1_text2=document.createTextNode('-');
var r2_text1=document.createTextNode('O');
var r2_text2=document.createTextNode('-');
s11.appendChild(r1_text1)
s12.appendChild(r1_text2)
s21.appendChild(r2_text1)
s22.appendChild(r2_text2)
g1_dr.appendChild(g1_r);
g1_r.appendChild(g1_r1)
g1_r.appendChild(g1_r2)
g1_r1.appendChild(s11)
g1_r1.appendChild(s12)
g1_r2.appendChild(s21)
g1_r2.appendChild(s22)

var texx=document.createElement('p');
var p_text=document.createTextNode('select player otherwise it will automatically select "X" .');
texx.setAttribute('class','p_text')
texx.appendChild(p_text)
g1.appendChild(h3)
g1.appendChild(g1_dr)
g1.appendChild(texx)


//g3....

var anc=document.createElement('a')
var anc_text=document.createTextNode('RESTART GAME')
anc.setAttribute('class','restart')
anc.setAttribute('href','#')
anc.setAttribute('onclick','restart_game()')
anc.appendChild(anc_text);
g3.appendChild(anc)

//g2
var act_div=document.createElement('div');
act_div.setAttribute('class','container act_div')
var table=document.createElement('table');
table.setAttribute('class','table_game')
var tr1=document.createElement('tr')
tr1.setAttribute('class','tr1')
var tr2=document.createElement('tr')
tr2.setAttribute('class','tr2')
var tr3=document.createElement('tr')
tr3.setAttribute('class','tr3')
var td11=document.createElement('td')
td11.setAttribute('class','td11')
td11.setAttribute('id','box1')
td11.setAttribute('onclick','myboxes("box1")')
var td12=document.createElement('td')
td12.setAttribute('class','td12')
td12.setAttribute('id','box2')
td12.setAttribute('onclick','myboxes("box2")')
var td13=document.createElement('td')
td13.setAttribute('class','td13')
td13.setAttribute('id','box3')
td13.setAttribute('onclick','myboxes("box3")')
var td21=document.createElement('td')
td21.setAttribute('class','td21')
td21.setAttribute('id','box4')
td21.setAttribute('onclick','myboxes("box4")')
var td22=document.createElement('td')
td22.setAttribute('class','td22')
td22.setAttribute('id','box5')
td22.setAttribute('onclick','myboxes("box5")')
var td23=document.createElement('td')
td23.setAttribute('class','td23')
td23.setAttribute('id','box6')
td23.setAttribute('onclick','myboxes("box6")')
var td31=document.createElement('td')
td31.setAttribute('class','td31')
td31.setAttribute('id','box7')
td31.setAttribute('onclick','myboxes("box7")')
var td32=document.createElement('td')
td32.setAttribute('class','td32')
td32.setAttribute('id','box8')
td32.setAttribute('onclick','myboxes("box8")')
var td33=document.createElement('td')
td33.setAttribute('class','td33')
td33.setAttribute('id','box9')
td33.setAttribute('onclick','myboxes("box9")')

table.appendChild(tr1)
table.appendChild(tr2)
table.appendChild(tr3)
tr1.appendChild(td11)
tr1.appendChild(td12)
tr1.appendChild(td13)

tr2.appendChild(td21)
tr2.appendChild(td22)
tr2.appendChild(td23)

tr3.appendChild(td31)
tr3.appendChild(td32)
tr3.appendChild(td33)


act_div.appendChild(table)

g2.appendChild(act_div);
g1_r1.setAttribute('id','game_start_1');



sub_div2.appendChild(g1)
sub_div2.appendChild(g2)
sub_div2.appendChild(g3)
div2.appendChild(sub_div2)

mainDiv.appendChild(div1);
mainDiv.appendChild(div2);

//coding of game
var arra1=['X','O','X','O','X','O','X','O','X'];
var counter =0;
var flag=false; 
var flag1=false
var a=0;
function startgame(count){
        a++;
        if(count==1 && a==1){
            arra1=['X','O','X','O','X','O','X','O','X']
            g1_r1.setAttribute('id','game_start_1');

        }
        if(count==2 && a==1){
            arra1=['O','X','O','X','O','X','O','X','O']
            g1_r2.setAttribute('id','game_start_1');
            g1_r1.removeAttribute('id')
            
        }
    
}
function myboxes(ids){
    if(document.getElementById(ids).innerHTML==''){
     var x=document.getElementById(ids);
     x.innerHTML=arra1[counter]
     x.className +=' tictoe'
     if(arra1[counter]=='O')
     {
        x.className +=' OO'
     }
     console.log(x)
     
     counter++;
     if(document.getElementById('box1').innerHTML!='' && document.getElementById('box2').innerHTML!='' && document.getElementById('box3').innerHTML!='' && (document.getElementById('box1').innerHTML=== document.getElementById('box2').innerHTML) && (document.getElementById('box2').innerHTML=== document.getElementById('box3').innerHTML) && (document.getElementById('box1').innerHTML=== document.getElementById('box3').innerHTML)){
          if(document.getElementById('box1').innerHTML==arra1[0])
          {
              flag=true;
          }
          else{
              flag1=true;
          }
     }
     else if(document.getElementById('box4').innerHTML!='' && document.getElementById('box5').innerHTML!='' && document.getElementById('box6').innerHTML!='' && (document.getElementById('box4').innerHTML=== document.getElementById('box5').innerHTML) && (document.getElementById('box5').innerHTML=== document.getElementById('box6').innerHTML) && (document.getElementById('box4').innerHTML=== document.getElementById('box6').innerHTML)){
        if(document.getElementById('box4').innerHTML==arra1[0])
          {
              flag=true;
          }
          else{
              flag1=true;
          }
        
    }
    else if(document.getElementById('box7').innerHTML!='' && document.getElementById('box8').innerHTML!='' && document.getElementById('box9').innerHTML!='' && (document.getElementById('box7').innerHTML=== document.getElementById('box8').innerHTML) && (document.getElementById('box8').innerHTML=== document.getElementById('box9').innerHTML) && (document.getElementById('box7').innerHTML=== document.getElementById('box9').innerHTML)){
        if(document.getElementById('box7').innerHTML==arra1[0])
          {
              flag=true;
          }
          else{
              flag1=true;
          }

    }
    else if(document.getElementById('box1').innerHTML!='' && document.getElementById('box4').innerHTML!='' && document.getElementById('box7').innerHTML!='' && (document.getElementById('box1').innerHTML=== document.getElementById('box4').innerHTML) && (document.getElementById('box4').innerHTML=== document.getElementById('box7').innerHTML) && (document.getElementById('box1').innerHTML=== document.getElementById('box7').innerHTML)){

        if(document.getElementById('box1').innerHTML==arra1[0])
          {
              flag=true;
          }
          else{
              flag1=true;
          }

    }
    else if(document.getElementById('box2').innerHTML!='' && document.getElementById('box5').innerHTML!='' && document.getElementById('box8').innerHTML!='' && (document.getElementById('box2').innerHTML=== document.getElementById('box5').innerHTML) && (document.getElementById('box5').innerHTML=== document.getElementById('box8').innerHTML) && (document.getElementById('box2').innerHTML=== document.getElementById('box8').innerHTML)){
       
        if(document.getElementById('box2').innerHTML==arra1[0])
          {
              flag=true;
          }
          else{
              flag1=true;
          }

    }
    else if(document.getElementById('box3').innerHTML!='' && document.getElementById('box6').innerHTML!='' && document.getElementById('box9').innerHTML!='' && (document.getElementById('box3').innerHTML=== document.getElementById('box6').innerHTML) && (document.getElementById('box6').innerHTML=== document.getElementById('box9').innerHTML) && (document.getElementById('box3').innerHTML=== document.getElementById('box9').innerHTML)){
       
        if(document.getElementById('box3').innerHTML==arra1[0])
          {
              flag=true;
          }
          else{
              flag1=true;
          }

    }
    else if(document.getElementById('box1').innerHTML!='' && document.getElementById('box5').innerHTML!='' && document.getElementById('box9').innerHTML!='' && (document.getElementById('box1').innerHTML=== document.getElementById('box5').innerHTML) && (document.getElementById('box5').innerHTML=== document.getElementById('box9').innerHTML) && (document.getElementById('box1').innerHTML=== document.getElementById('box9').innerHTML)){
        
        if(document.getElementById('box1').innerHTML==arra1[0])
          {
              flag=true;
          }
          else{
              flag1=true;
          }

    }
    else if(document.getElementById('box3').innerHTML!='' && document.getElementById('box5').innerHTML!='' && document.getElementById('box7').innerHTML!='' && (document.getElementById('box3').innerHTML=== document.getElementById('box5').innerHTML) && (document.getElementById('box5').innerHTML=== document.getElementById('box7').innerHTML) && (document.getElementById('box3').innerHTML=== document.getElementById('box7').innerHTML)){
        
        if(document.getElementById('box3').innerHTML==arra1[0])
          {
              flag=true;
          }
          else{
              flag1=true;
          }

    }
    else{
      
    }


    if(flag==true){
        
        swal("Congratulations.....", "You Win !!!")
        .then((value) => {
          swal(location.reload());
        });
    }
    if(flag1==true){
        swal("Opxx.....", "You Lose!!!")
        .then((value) => {
          swal(location.reload());
        });
    }
    if(counter===9 && flag==false){
      swal("Match Draw", "Try Again!!!!")        
      .then((value) => {
        swal(location.reload());
      });
    }
    

  }
}

function restart_game(){
    location.reload();
}