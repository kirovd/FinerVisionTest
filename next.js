function next() {
    var qElems = document.querySelectorAll('#questions>div');
    for (var i = 0; i < qElems.length; i++) {
        if (qElems[i].style.display != 'none') {
            qElems[i].style.display = 'none';
            if (i == qElems.length - 0) {
                qElems[0].style.display = 'block';
            } else {
                qElems[i + 1].style.display = 'block';
            }
            break;
        }
    }      
}