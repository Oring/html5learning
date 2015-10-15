function updateRange(obj) {
    document.getElementById('rangevalue').innerHTML = obj.value + '권';
}
window.onload = function() {
    var domobj = document.querySelector("input[type=date]");
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var date = d.getDate();
    if (month <= 9)
        month = "0"+month;
    if (date <= 9)
        date = "0"+date;
    var datestr = year+"-"+month+"-"+date;
    domobj.min = datestr;
}