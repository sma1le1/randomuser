function A(val) {
	if(document.getElementById("show" + val).style.display =='none'){
		var classElements = document.querySelectorAll(".showWindows");
		var idArray = document.getElementsByClassName('fas fa-minus');
		var idElement = document.getElementById("show" + val);

		for(var i = 0; i < classElements.length; i++) {
			classElements[i].style.display = "none";
		}
		for(var j = 0; j < idArray.length; j++) {
			idArray[j].className = 'fas fa-plus';
		}
		idElement.style.display = "table-row";
		document.getElementById(val).className='fas fa-minus';
	}
	else {
		document.getElementById("show" + val).style.display="none";
		document.getElementById(val).className='fas fa-plus';
	}
}

function tableSearch() {
    var phrase = document.getElementById('search-text');
    var table = document.getElementById('userinfo');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[2].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}