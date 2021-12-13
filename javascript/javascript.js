function todaysDate() {
    var day = new Date();
    var month = 0, currentDate = "";
    month = day.getMonth() + 1;
    currentDate = day.getDate()+ '-' + month + '-' + day.getFullYear()
    document.getElementById("todaysDate").innerHTML = currentDate;
}

function changeTable() {
    document.getElementById("tablejs").style.color = "green";
    document.getElementById("tablejs").style.borderStyle = "dotted";
    document.getElementById("tablejs").style.borderWidth = "0.3em";
    document.getElementById("tablejs").style.borderColor = "yellow";
}