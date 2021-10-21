window.onwheel = e => {
    if (e.deltaY >= 0) {
        // Scrolling Down with mouse
        if (document.getElementById('check-2').checked == true) {
            var elem = document.getElementById('check-3');
            elem.checked = true;
        }
        else {
            if (document.getElementById('check-3').checked == false) {
                var elem = document.getElementById('check-2');
                elem.checked = true;
            }
        }
    } else {
        // Scrolling Up with mouse
        if (document.getElementById('check-3').checked == true) {
            var elem = document.getElementById('check-2');
            elem.checked = true;
        }
        else {
            var elem = document.getElementById('check-1');
            elem.checked = true;
        }
    }
};


$(function () {
    let arrow = document.getElementById("downArrow");
    arrow.onclick = function () {
        document.getElementById('check-2').checked = true;
    }
});

$(document).ready(function() { 
    $('#middleDiv').load('aboutMe.html');
});

$(document).ready(function() { 
    $('#bottomDiv').load('skills.html');
});