function todaysDate() {
    var day = new Date();
    var month = 0, currentDate = "";
    month = day.getMonth() + 1;
    currentDate = day.getDate()+ '-' + month + '-' + day.getFullYear()
    document.getElementById("todaysDate").innerHTML = currentDate;
}

function changeTable() {
    document.getElementById("table").style.color = "green";
    document.getElementById("table").style.borderStyle = "dotted";
    document.getElementById("table").style.borderWidth = "0.3em";
    document.getElementById("table").style.borderColor = "yellow";
}