var a;
function show__hide(){
  if(a==0){
    document.getElementById("dropdown").style.display="grid";
    return a=1;
  }
  else{
    document.getElementById("dropdown").style.display="none";
    return a=0;
  }
}