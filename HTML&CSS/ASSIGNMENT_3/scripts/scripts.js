window.onwheel = e => {
    if (e.deltaY > 0) {
        // Scrolling Down with mouse
        if (document.getElementById('check-2').checked == true) {
            var elem = document.getElementById('check-3');
            setTimeout(function () { elem.checked = true; }, 100);
            document.getElementById('navMenuItem').style.backgroundColor = 'blue';

        } else {
            if (document.getElementById('check-3').checked == false) {
                var elem = document.getElementById('check-2');
                setTimeout(function () { elem.checked = true; }, 100);
                document.getElementById('navMenuItem').style.backgroundColor = '#E18A07';
            }
        }
    } else {
        // Scrolling Up with mouse
        if (document.getElementById('check-3').checked == true) {
            var elem = document.getElementById('check-2');
            setTimeout(function () { elem.checked = true; }, 100);
            document.getElementById('navMenuItem').style.backgroundColor = '#E18A07';

        } else {
            var elem = document.getElementById('check-1');
            setTimeout(function () { elem.checked = true; }, 100);
            document.getElementById('navMenuItem').style.backgroundColor = 'darkcyan';
        }
    }
};

// Check if the user press key up or key down
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        arrowUpScroll();
    } else if (e.keyCode == '40') {
        arrowDownScroll();
    } else if (e.keyCode == '37') {
        // left arrow
    } else if (e.keyCode == '39') {
        // right arrow
    }
}

function arrowDownScroll() {

    // Scrolling Down with key down press
    if (document.getElementById('check-2').checked == true) {
        var elem = document.getElementById('check-3');
        setTimeout(function () {
            elem.checked = true;
            document.getElementById('check-2').checked = false;
        }, 300);

        document.getElementById('navMenuItem').style.backgroundColor = 'blue';
    } else {
        if (document.getElementById('check-3').checked == false) {
            var elem = document.getElementById('check-2');
            setTimeout(function () {
                elem.checked = true;
                document.getElementById('check-3').checked = false;
            }, 300);
            document.getElementById('navMenuItem').style.backgroundColor = '#E18A07';
        }
    }
};

function arrowUpScroll() {
    // Scrolling UP with key UP press
    if (document.getElementById('check-3').checked == true) {
        var elem = document.getElementById('check-2');
        setTimeout(function () {
            elem.checked = true;
            document.getElementById('check-3').checked = false
        }, 300);

        document.getElementById('navMenuItem').style.backgroundColor = '#E18A07';
    } else {
        var elem = document.getElementById('check-1');
        setTimeout(function () {
            elem.checked = true;
            document.getElementById('check-1').checked = false;
        }, 300);
        document.getElementById('navMenuItem').style.backgroundColor = 'darkcyan';
    }
};

$(function () {
    let arrow = document.getElementById("downArrow");
    arrow.onclick = function () {
        document.getElementById('check-2').checked = true;
    }
});

$(document).ready(function () {
    $('#middleDiv').load('aboutMe.html');
});

$(document).ready(function () {
    $('#bottomDiv').load('skills.html');
});
