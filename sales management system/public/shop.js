var userdata={};
var userdata1={};
var carttotal={};
var cararray=[];
userdata=localStorage.getItem('data1')
userdata1=JSON.parse(userdata)
// console.log(userdata1)
var profile_name=document.getElementById('profile_name');
var profile_email=document.getElementById('profile_email');
var profile_date=document.getElementById('profile_date');
var profile_gender=document.getElementById('profile_gender');
profile_name.innerHTML=userdata1.name;
profile_email.innerHTML=userdata1.ema;
profile_date.innerHTML=userdata1.dat;
profile_gender.innerHTML=userdata1.gen;
if(userdata1.name=='Admin'){
    document.getElementById('mn2').className='shop1'
    document.getElementById('text1').innerHTML="Admin"
    document.getElementById('text2').innerHTML="Admin"
    document.getElementById('text3').innerHTML="Admin"
    //q1
    document.getElementById('q1').innerHTML='Remove'
    document.getElementById('q1').removeAttribute('data-toggle')
    document.getElementById('q1').removeAttribute('data-target')
    document.getElementById('q1').setAttribute('onclick','removed("r1")')
    
    //q2    
    document.getElementById('q2').innerHTML='Remove'
    document.getElementById('q2').removeAttribute('data-toggle')
    document.getElementById('q2').removeAttribute('data-target')
    document.getElementById('q2').setAttribute('onclick','removed("r2")')
    
    //q3
    document.getElementById('q3').innerHTML='Remove'
    document.getElementById('q3').removeAttribute('data-toggle')
    document.getElementById('q3').removeAttribute('data-target')
    document.getElementById('q3').setAttribute('onclick','removed("r3")')
    
    //q4
    document.getElementById('q4').innerHTML='Remove'
    document.getElementById('q4').removeAttribute('data-toggle')
    document.getElementById('q4').removeAttribute('data-target')
    document.getElementById('q4').setAttribute('onclick','removed("r4")')
    
    //q5
    document.getElementById('q5').innerHTML='Remove'
    document.getElementById('q5').removeAttribute('data-toggle')
    document.getElementById('q5').removeAttribute('data-target')
    document.getElementById('q5').setAttribute('onclick','removed("r5")')
    
    //q6
    document.getElementById('q6').innerHTML='Remove'
    document.getElementById('q6').removeAttribute('data-toggle')
    document.getElementById('q6').removeAttribute('data-target')
    document.getElementById('q6').setAttribute('onclick','removed("r6")')
    
    //q7
    document.getElementById('q7').innerHTML='Remove'
    document.getElementById('q7').removeAttribute('data-toggle')
    document.getElementById('q7').removeAttribute('data-target')
    document.getElementById('q7').setAttribute('onclick','removed("r7")')
    
    //q8
    document.getElementById('q8').innerHTML='Remove'
    document.getElementById('q8').removeAttribute('data-toggle')
    document.getElementById('q8').removeAttribute('data-target')
    document.getElementById('q8').setAttribute('onclick','removed("r8")')
    
    //q9
    
    document.getElementById('q9').innerHTML='Remove'
    document.getElementById('q9').removeAttribute('data-toggle')
    document.getElementById('q9').removeAttribute('data-target')
    document.getElementById('q9').setAttribute('onclick','removed("add1")')
    
    //q10
    document.getElementById('q10').innerHTML='Remove'
    document.getElementById('q10').removeAttribute('data-toggle')
    document.getElementById('q10').removeAttribute('data-target')
    document.getElementById('q10').setAttribute('onclick','removed("add2")')
    
    //q11
    document.getElementById('q11').innerHTML='Remove'
    document.getElementById('q11').removeAttribute('data-toggle')
    document.getElementById('q11').removeAttribute('data-target')
    document.getElementById('q11').setAttribute('onclick','removed("add3")')
    

}
else{
    document.getElementById('mn1').className='shop11'
    
}

// console.log(profile_name.value)

function cart_data(shirt,rupees,img){
    document.getElementById('cart_list1').innerHTML=shirt;
    document.getElementById('cart_list2').innerHTML=rupees;
    var imgg=document.getElementById('cart_list3');
    imgg.setAttribute("src",img)
    carttotal={
        shirts:shirt,
        rs:rupees,
        imgage:img
    }
    // console.log(carttotal.shirts)
    // console.log(carttotal.rs)
    
}
function additem(add){
    document.getElementById(add).className="col-2.5 card col-card c2"
}

function bill(){
    var mm=document.getElementById('quantity').value;
    carttotal.quantity=mm;
    cararray.push(carttotal);
    localStorage.setItem('bill',JSON.stringify(cararray))
    alert("Added Successfully");
    console.log(cararray)
}
function removed(qp){
    document.getElementById(qp).className +=' remove'
}