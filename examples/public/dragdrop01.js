/**
 * Created by Administrator on 2015-10-14.
 */
window.onload = function(){
    var readButton = document.getElementById("read");
    readButton.onclick = function(event) {
        readFile(document.getElementById("file").files[0]);
    }
    var target = document.getElementById("droparea");
    target.ondragover = function(event) {
        if(event.preventDefault) event.preventDefault();
    }
    target.ondragenter = function(event){
        target.classList.add('hover');
    }
    target.ondragleave = function(event){
        target.classList.remove('hover');
    }
    target.ondrop = function(event){
        if(event.preventDefault) event.preventDefault();
        target.classList.remove('hover');
        var filedata = event.dataTransfer.files[0];
        readFile(filedata);
    }
}
function readFile(file) {
    document.getElementById("fileName").textContent = file.name;
    document.getElementById("fileSize").textContent = "(" + file.size + "byte)";
    var reader = new FileReader();
    reader.onload = function() {
        var display = document.getElementById("droparea");
        display.textContent = reader.result;
    };
    reader.onerror = function(evt) {
        alert(evt.target.error.code);
    };
    var encodingList = document.getElementById("encoding");
    var encoding = encodingList.options[encodingList.selectedIndex].value;
    reader.readAsText(file, encoding);
};
