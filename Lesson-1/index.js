function doFirst() {
    // Wolf picture
    mypic = document.getElementById('wolfpic');
    mypic.addEventListener("dragstart", startDrag, false);
    leftbox = document.getElementById('leftbox');
    leftbox.addEventListener("dragenter", function(e) {e.preventDefault();}, false);
    leftbox.addEventListener("dragover", function(e) {e.preventDefault();}, false);
    leftbox.addEventListener("drop", dropped, false);
}

function startDrag(e) {
    var code='<img src="./images/wolf.jpg" alt="Howling wolf" id="wolfpic" width="150px" height="150px">';
    e.dataTransfer.setData('Text', code);
}

function dropped(e) {
    e.preventDefault();
    leftbox.innerHTML=e.dataTransfer.getData('Text');
}

window.addEventListener("load", doFirst, false);