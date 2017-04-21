var cellsInRow = 7;

var currentnum = 0;

// creating rows
var getDaysInMonth = function(month, year) {

    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}




function generateMonthIU(date) {

    var length = getDaysInMonth(date.getMonth(), date.getFullYear());
    var startDay = date.getDay();
    // get the reference for the body
    var div1 = document.getElementById('calendar');

    // creates a <table> element
    var tbl = document.createElement("tbody");

    for (var r = 0; r < Math.ceil(length / cellsInRow); r++) {
        var row = document.createElement("tr");

        // create cells in row
        for (var c = 0; c < cellsInRow; c++) {
            if (currentnum - startDay < length) {
                var cell = document.createElement("td");

                currentnum += 1;
                if (startDay < currentnum) {
                    var cellText = document.createTextNode(currentnum - startDay);
                    cell.appendChild(cellText);
                    cell.classList.add("days");
                }
                row.appendChild(cell);
            }
        }

        tbl.appendChild(row); // add the row to the end of the table body
    }

    div1.appendChild(tbl); // appends <table> into <div1>

}



var add = document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;

    if (value) {
        addItem(value);
        document.getElementById('item').value = "";
    }
})

function addItem(text) {
    var list = document.getElementById('todo');
    var item = document.createElement('li');
    item.innerText = text;
    item.classList = ('item');

    var button = document.createElement('button');
    button.textContent = "X";
    button.classList = "material-icon";
    button.id = "remove"
    item.appendChild(button);

    button.addEventListener('click', function() {
        item.remove(item);
    })

    list.insertBefore(item, list.childNodes[0]);

};

document.addEventListener('keypress', function(e) {
    var value = document.getElementById('item').value;

    if (e.keyCode === 13 && value.length > 0 && value.replace(/\s+/g, '')) {
        addItem(value);
        document.getElementById('item').value = "";
    }

})
var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.addEventListener('DOMContentLoaded', function() {

    var d = new Date();

    var month = d.getMonth();
    var year = d.getFullYear();

    document.getElementById('month').innerHTML = month_name[month];
    document.getElementById('year').innerHTML = " " + year;
    document.getElementById('day').innerHTML = d.getDate();

    // Highlight today
    var days = document.getElementsByClassName('days');
    var toDay = d.getDate();

    days[toDay - 1].classList.add('currentDay');





    document.getElementById('next').addEventListener('click', function(e) {

        var month = document.getElementById('month').innerText;
        var idx = month_name.indexOf(month);
        idx++;
        var nextMonth = month_name[idx];
        generateMonthIU(new Date());
        document.getElementById('month').innerText = nextMonth;

    })
    document.getElementById('prev').addEventListener('click', function(e) {
        var month = document.getElementById('month').innerText;
        var idx = month_name.indexOf(month);
        idx--;
        var nextMonth = month_name[idx];
        generateMonthIU(new Date());
        document.getElementById('month').innerText = nextMonth;
    })

});

generateMonthIU(new Date());