var myvar=document.getElementById("input");
function pushBtn(obj)
{
    var a;
    btnout=obj.innerHTML;
    if(btnout=="="){
        a=eval(myvar.innerHTML);
        myvar.innerHTML=a;
       // myvar.innerHTML=a;
    }
    if(btnout=="AC"){
        myvar.innerHTML="";
    }else if(btnout=='X'){
        var b=myvar.innerHTML;
        b=b.toString();
        b=b.substr(0, b.length - 1);
        myvar.innerHTML=b;
    }
     else if(btnout!="="&&btnout!="X"){
    myvar.innerHTML+=btnout;
     }

    
}
