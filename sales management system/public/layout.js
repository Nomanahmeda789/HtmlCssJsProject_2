
var objArray=[{
            name:"Admin",
            uname:"admin",
            ema:"Admin@domain.com",
            pass:"admin12345",
            cpass:"admin12345",
            dat:"1997-10-20",
            gen:"Male"
}];
localStorage.setItem('objarray',JSON.stringify(objArray))  
var data1=[];
var data=[];
function signup(){
    var fname=document.getElementById('fname').value;
    var username=document.getElementById('username').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var cpassword=document.getElementById('cpassword').value;
    var date=document.getElementById('date').value;
    var gender = document.getElementsByName('optradio');
    var gend;
    var count=0;
    var flag=false;
    for (var i = 0, length = gender.length; i < length; i++) {
        if (gender[i].checked) {
            gend=gender[i].value;
        break;
        }
    }
    if(fname!=='' && fname.length>3 && fname!==null && fname!==undefined && fname[0]!==' '){
        document.getElementById('p1').className='war1'    
        count++;
        if(username!=='' && username.length>3 && username!==null && username!==undefined && username[0]!==' '){
            document.getElementById('p2').className='war1'    
            count++;
            // alert(count)
            if(email!=='' && email.length>3 && email!==null && email!==undefined && email[0]!==' ' && email[0]!=='@'){
               
                for(var i=0;i<email.length;i++){
                    if(email[i]=='@')
                    {
                        flag=true;
                        break;
                    }
                }  
                if(flag==true){
                    document.getElementById('p3').className='war1'  ;     
                    count++;
                    
                    // password
                  if(password!=='' && password.length>6 && password!==null && password!==undefined && password[0]!==' '){
                     document.getElementById('p4').className='war1'  ;
                     count++
                    //  repasswrd
                    if(cpassword===password){
                        document.getElementById('p5').className='war1'  ;
                        count++
                        // date
                        if(date!=='' && date!==undefined){
                            document.getElementById('p6').className='war1'  ;
                            // console.log(date)
                            count++
                            //gender
                            if(gend!='' && gend!=undefined){
                                document.getElementById('p7').className='war1'  ;   
                                count++;
                                
                            }
                            else{
                            document.getElementById('p7').className='war2'  ;   
                                
                            }
                            
                        }
                        else{
                            document.getElementById('p6').className='war2'  ;   
                        }

                                               
                     }
                     else{
                        document.getElementById('p5').className='war2'  ;                      
                     }

                  }
                  else{
                     document.getElementById('p4').className='war2'  ;                      
                  }
        

               }
               else{
                     document.getElementById('p3').className='war2'  ;
                            
                }
                
            
            }
            else{
                document.getElementById('p3').className='war2'                    
            }

        }
        else{
            document.getElementById('p2').className='war2'            
        }
    }
    else{
        document.getElementById('p1').className='war2'
    }

    if(count==7){
        objArray.push({
            name:fname,
            uname:username,
            ema:email,
            pass:password,
            cpass:cpassword,
            dat:date,
            gen:gend
        })
        // console.log(objArray.dat)
        // console.log(objArray)
        localStorage.setItem('objarray',JSON.stringify(objArray))  
        // data=localStorage.getItem('objArray')
        // data1=JSON.parse(data)     
        // console.log("data"+data);
        // console.log("name of data"+ data1[0].name)
      
        location.href='./signin.html'

    }
}
       