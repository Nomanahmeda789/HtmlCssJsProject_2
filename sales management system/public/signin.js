var userdata={};
var userdata1={};
function signin1(){    
    var signin_username=document.getElementById("signin-username").value;
    var signin_password=document.getElementById("signin-password").value;    
    data=localStorage.getItem('objarray');
    data1=JSON.parse(data)
    // console.log("nomanasdas"+data)
    // console.log(data1[0].name)
    // alert(data1.length)
    var portal=document.getElementsByName('emp');
    var por;
    for (var i = 0, length = portal.length; i < length; i++) {
        if (portal[i].checked) {
            por=portal[i].value;
            console.log(por)
        break;
        }
    }
    for(var i=0;i<data1.length;i++){
        
            if(signin_password===data1[i].pass && signin_username===data1[i].uname){
            document.getElementById('x12').className="war1"
                
                if(por!='' && por!=undefined){
                    document.getElementById('x13').className='war1';
                    if(signin_username=='admin' && signin_password=='admin12345' && por=='admin')
                    {   
                    localStorage.setItem('data1',JSON.stringify(data1[i]))
                    // alert('adim')
                    location.href='shop.html'
                    }
                    else if(signin_username!='admin' && signin_password!='admin12345' && por=='employee'){
                    localStorage.setItem('data1',JSON.stringify(data1[i]))
                    // alert('emplu')
                    location.href='shop.html'
                    }
                    else{
                        alert('Please select the correct portal')
                    }
                }
                else{
                document.getElementById('x13').className='war2'  ;   
                    
                }
             
            }
            else{
            document.getElementById('x12').className="war2"
                
            }
        }
    
    
}
