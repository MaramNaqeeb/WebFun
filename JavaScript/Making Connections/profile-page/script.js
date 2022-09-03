console.log('page loaded...')
var myname = document.getElementById('name')
function editName() {
  myname.innerText = 'Sam E'
}

var item1 = document.querySelector(".card-list-item1");
function removeRequest() {
  item1.remove();
}

var item2 = document.querySelector('.card-list-item2');
function removeRequest2() {
  item2.style.display = 'none'
}

