document.getElementById('add').addEventListener('click', function(){
    var value = document.getElementById('item').value;
    if (value) {
    addItem(value);
    document.getElementById('item').value = "";
  }
})



 function addItem(text){
    var list = document.getElementById('todo');
    var item = document.createElement('li');
    item.innerText = text;
    item.classList=('item');

   var button =  document.createElement('button');
   button.id = "remove";
   item.appendChild(button);

   
  
  list.insertBefore(item , list.childNodes[0]);

}