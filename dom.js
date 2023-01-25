var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);


function addItem(e){
    e.preventDefault();
    var fr = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(fr));

    var br = document.createElement('button');
    br.className = 'btn btn-danger btn-sm float-right delete';
    br.appendChild(document.createTextNode('X'));

    li.appendChild(br);
    
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}