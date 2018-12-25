// Nav bar
var mainDiv=document.getElementById('mainDiv')
var div1=document.createElement('div');
div1.setAttribute("class","container-fluid bg-dark nav_div")
var h1_nav=document.createElement('h1');
var h1_text=document.createTextNode("Random Numbers Game")
h1_nav.setAttribute("class","heading_text text-warning")
h1_nav.appendChild(h1_text);
div1.appendChild(h1_nav);
mainDiv.appendChild(div1)
console.log(mainDiv)

//cards

var div2=document.createElement('div');
div2.setAttribute("class","container-fluid card_div");
var div_2_row=document.createElement('div');
div_2_row.setAttribute('class','row container-fluid row1')
//column 1
var col1=document.createElement('div')
col1.setAttribute('class','col-7 column1 cola')
div_2_row.appendChild(col1)

var col1_div=document.createElement('div')
col1_div.setAttribute('class','game_div')
var r1=document.createElement('div');
var r2=document.createElement('div');
var r3=document.createElement('div');
r1.setAttribute('class',"row ra")
r2.setAttribute('class',"row ra")
r3.setAttribute('class',"row ra")
//game row 1
var r1_c_1=document.createElement('div');
var r1_c_2=document.createElement('div');
var r1_c_3=document.createElement('div');
r1_c_1.setAttribute('id',"c1")
r1_c_2.setAttribute('id',"c2")
r1_c_3.setAttribute('id',"c3")
r1_c_1.setAttribute('onclick',"random_num(1)")
r1_c_2.setAttribute('onclick',"random_num(2)")
r1_c_3.setAttribute('onclick',"random_num(3)")

r1.appendChild(r1_c_1)
r1.appendChild(r1_c_2)
r1.appendChild(r1_c_3)

//game row 2
var r2_c_1=document.createElement('div');
var r2_c_2=document.createElement('div');
var r2_c_3=document.createElement('div');
r2_c_1.setAttribute('id',"c4")
r2_c_2.setAttribute('id',"c5")
r2_c_3.setAttribute('id',"c6")
r2_c_1.setAttribute('onclick',"random_num(4)")
r2_c_2.setAttribute('onclick',"random_num(5)")
r2_c_3.setAttribute('onclick',"random_num(6)")
r2.appendChild(r2_c_1)
r2.appendChild(r2_c_2)
r2.appendChild(r2_c_3)

//game row 3
var r3_c_1=document.createElement('div');
var r3_c_2=document.createElement('div');
var r3_c_3=document.createElement('div');
r3_c_1.setAttribute('id',"c7")
r3_c_2.setAttribute('id',"c8")
r3_c_3.setAttribute('id',"c9")
r3_c_1.setAttribute('onclick',"random_num(7)")
r3_c_2.setAttribute('onclick',"random_num(8)")
r3_c_3.setAttribute('onclick',"random_num(9)")
r3.appendChild(r3_c_1)
r3.appendChild(r3_c_2)
r3.appendChild(r3_c_3)
col1_div.appendChild(r1)
col1_div.appendChild(r2)
col1_div.appendChild(r3)

col1.appendChild(col1_div)
//column 2
var col2=document.createElement('div')
col2.setAttribute('class','col-4 column1 colb cll')
div_2_row.appendChild(col2)

div2.appendChild(div_2_row)
mainDiv.appendChild(div2)
document.getElementById('c1').innerHTML=" ";
document.getElementById('c2').innerHTML=" ";
document.getElementById('c3').innerHTML=" ";
document.getElementById('c4').innerHTML=" ";
document.getElementById('c5').innerHTML=" ";
document.getElementById('c6').innerHTML=" ";
document.getElementById('c7').innerHTML=" ";
document.getElementById('c8').innerHTML=" ";
document.getElementById('c9').innerHTML=" ";
var count=0;
var flag=0;
var l=false;
var arra=[]
 function random_num(num){
     var r=Math.random();
     var x=Math.floor((r*10)+1);
     //  console.log(x);
     var z="c"+num;
     if( document.getElementById(z).innerHTML==" "){
        flag++;
     document.getElementById(z).innerHTML=x;
     document.getElementById(z).className="numbers_of_game";
     arra.push(x);
     console.log(arra)
     for(var i=0;i<arra.length;i++){
         count=0;
         
         for(var j=i+1;j<arra.length;j++){
             if(arra[i]==arra[j]){
                 count++;
                 console.log(arra[i])
                 console.log(arra[j])
                 console.log(count +"adsadasdas")
                 
                }
            }   
            if(count==2){
                var col2_text=document.createTextNode("Congratulations you win!!!")
                col2.appendChild(col2_text)
                l=true;
                r1_c_1.removeAttribute('onclick');
                r1_c_2.removeAttribute('onclick');
                r1_c_3.removeAttribute('onclick');
                r2_c_1.removeAttribute('onclick');
                r2_c_2.removeAttribute('onclick');
                r2_c_3.removeAttribute('onclick');
                r3_c_1.removeAttribute('onclick');
                r3_c_2.removeAttribute('onclick');
                r3_c_3.removeAttribute('onclick');
            }
            

    }
        
        if(flag==9 && l==false){
            var col2_text=document.createTextNode("Sorry.... you Loss!!!")
            col2.appendChild(col2_text)
    
        }
        console.log(flag)
    }









    // for(var i=1;i<=9;i++){
    //     var n="c"+i;
    //     for(var j=1;j<=9;j++){
    //         if(i!=j){
    //              var m="c"+j;
    //              if(document.getElementById(n).innerHTML!='' && document.getElementById(m).innerHTML!=' '){
    //                 if(document.getElementById(n).innerHTML===document.getElementById(m).innerHTML){
    //                      count++;
    //                 }
    //             }
    //         }
    //     }
    // }
    // console.log(count)
     

    

 }