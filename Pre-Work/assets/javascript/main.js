function displayComment() {
    var comment = document.getElementById("comment");
    var check = document.getElementById("check");
    if (check.checked) {
        var field = comment.value;
        var display = document.getElementById("displayComments");
        display.innerHTML += field + '<br>';
        comment.value = "";
        check.checked = false;
    } 
    
}