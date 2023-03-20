var star="*"
var rows=document.getElementById("input")

function create(){
    console.log(rows.value)
for (var i=1;i<=rows.value;i++){
    for (var j=1;j<=i;j++){
       document.write(star)
    }
    document.write("<br>")
}
document.write("<br><h3>Inverted Half Pyramid</h3><br>")
for (var i=rows.value;i>=1;i--){
    for (var j=i;j>=1;j--){
        document.write(star)
    }
    document.write("<br>")
}
}