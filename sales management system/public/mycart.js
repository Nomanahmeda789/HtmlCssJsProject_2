var tot=[];
var tot1=[];
var sum=0;
var sum1=0;
var rnum;
var qnum;
var bb;
tot=localStorage.getItem('bill');
tot1=JSON.parse(tot)
// console.log(tot1)
for(var i=0;i<tot1.length;i++){
    // p1=p1+(i+1);
    var p1="p"+(i+1);
    var p11="p1"+(i+1);
    var p111="p11"+(i+1);
    var p1111="p111"+(i+1);
    var p11111="p1111"+(i+1);
    var p111111="p11111"+(i+1);
    // console.log(p1)
    // console.log(p11)
    // console.log(p111)
    // console.log(p1111)
    // console.log(p11111)
    // console.log(p111111)
    document.getElementById(p1).className="row tr22";
    document.getElementById(p11).setAttribute('src',tot1[i].imgage);
    document.getElementById(p111).innerHTML=tot1[i].shirts;
    document.getElementById(p1111).innerHTML=tot1[i].rs;
    document.getElementById(p11111).innerHTML=tot1[i].quantity;
    bb=(tot1[i].rs).slice(3)
    rnum=Number(bb);
    qnum=Number(tot1[i].quantity);
    sum=rnum*qnum;
    sum1=sum1+sum;
    document.getElementById(p111111).innerHTML=sum;
    
}
document.getElementById('qq').innerHTML=sum1