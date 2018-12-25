var count=0;
var id_name='';
var mainDiv=document.getElementById('todo');
var todo_div=document.createElement('div');
todo_div.setAttribute("class","todo_div");
todo_div.setAttribute("id","todo_div_id");
var h1=document.createElement('h1');
var h1_text=document.createTextNode("Welcome To Todo App")
h1.appendChild(h1_text);
h1.setAttribute("class","heading")
todo_div.appendChild(h1)

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","Enter Text.....");
input.setAttribute("id",'list_text')
input.setAttribute("class","inp form-control")
todo_div.appendChild(input)
var input_but=document.createElement("button");
var butn_text=document.createTextNode("+ Add");
input_but.appendChild(butn_text);
input_but.setAttribute("type","button");
input_but.setAttribute("onClick","showList()");
input_but.setAttribute("class","btn btn-danger butn")
todo_div.appendChild(input_but)
var input_but1=document.createElement("button");
var butn_text1=document.createTextNode("Remove All");
input_but1.appendChild(butn_text1);
input_but1.setAttribute("type","button");
input_but1.setAttribute("onClick","removeList()");
input_but1.setAttribute("class","btn btn-danger butn")
todo_div.appendChild(input_but1)
var horizontal_bar=document.createElement('hr');
todo_div.appendChild(horizontal_bar)
var ul=document.createElement('ul');
ul.setAttribute("class","u_list")
ul.setAttribute("id",'u_list')
todo_div.appendChild(ul)
mainDiv.appendChild(todo_div)
console.log(mainDiv)

function showList(){
    var list=document.createElement('li');
    var id_name="abc"+count;    
    list.setAttribute("id",id_name)  
    if(document.getElementById('list_text').value ==""){
        alert("Please Fill the form first...");
        
    }
    else{
        var lis=document.getElementById('list_text').value; 
             
        var list_text=document.createTextNode(++count +") "+lis);
        var cross_input=document.createElement('button');
        var cross_text=document.createTextNode("x");
        cross_input.setAttribute("class","cross");
        cross_input.setAttribute("onClick","document.getElementById('u_list').removeChild(document.getElementById('"+id_name+"'))")
        cross_input.appendChild(cross_text);
        list.setAttribute('class','li_list')
        console.log(lis);
        list.appendChild(list_text);
        list.appendChild(cross_input);
        ul.appendChild(list)
        document.getElementById('list_text').value='';
       
    }

    
}
function removeList(){
    var parent = document.getElementById("u_list");
    while(parent.firstChild){
            parent.removeChild(parent.firstChild)
    }
    count=0;
        
}