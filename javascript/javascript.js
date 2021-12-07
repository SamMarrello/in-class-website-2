function todaysDate() {
    var day = new Date();
    var month = 0, currentDate = "";
    month = day.getMonth() + 1;
    currentDate = month + '-' + day.getDate() + '-' + day.getFullYear()
    document.getElementById("todaysDate").innerHTML = currentDate;
}

function changeTable() {
    document.body.style.color = "green";
    document.body.style.borderStyle = "dotted";
    document.body.style.borderWidth = "0.3em";
    document.body.style.borderColor = "yellow";
}