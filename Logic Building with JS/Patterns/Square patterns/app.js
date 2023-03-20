var rows=document.getElementById("input")
var star="*"
var space="&nbsp;"
function create(){
for (var i=1;i<=rows.value;i++){
    for (var j=1;j<=rows.value;j++){
        document.write(star)
         }
    document.write("<br>")
    }

document.write("<br> <h3> Printing hollow square</h3> <br>")
    //hollow square
var n= rows.value
for (var i=1;i<=n;i++){
    for (var j=1;j<=n;j++){
        if(i==1||j==1||i==n||j==n){
            document.write(star)
        }
        else{
            document.write(space)
        }
    }
    document.write("<br>")


}    
}


