let arreglo = ["","","","",""];
function allowDrop(ev)
{
ev.preventDefault();
}
function drag(ev)
{
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev)
{
    if(arreglo[parseInt(ev.target.id)] == "")
{
    var data = ev.dataTransfer.getData("text");
    arreglo[parseInt(ev.target.id)] = data;
    ev.target.appendChild(document.getElementById(data));
}
if(arreglo[0] != "" && arreglo[1] != "" && arreglo[2] != "" && arreglo[3] != "" && arreglo[4] != "")
{
    if(arreglo[0] == "b" && arreglo[1] == "d" && arreglo[2] == "c" && arreglo[3] == "e" && arreglo[4] == "a")
{
    document.querySelector("h2").innerHTML = "Excelente...";
}else{
document.querySelector("h2").innerHTML = "Que Mal, intentalo de nuevo...";
}
}
}