// var removeSVG = '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24"xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';

var add = document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;

    if (value) {
        addItem(value);
        document.getElementById('item').value = "";
    }
})

addEventListener('keypress', function(e) {
    var value = document.getElementById('item').value;
    if (e.keyCode === 13 && value.length > 0) {
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

    //    var materialIcon = document.createElement('i');
    //    materialIcon.classList=('materi-icon');
    //    materialIcon.innerText= removeSVG;
    //    item.appendChild(materialIcon);

    button.addEventListener('click', function() {
        item.remove(this.item);
    })

    list.insertBefore(item, list.childNodes[0]);

};