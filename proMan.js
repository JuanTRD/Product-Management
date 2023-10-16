
let a = [];
function add() {
    let str = document.getElementById('input').value;
    alert('San pham ' + str + ' da duoc them ');
    a.push(document.getElementById('input').value);
    document.getElementById('input').value = '';
}
function display() {
    let sout;
    sout =  "<table border='1px' width='30%'>";
    for (let i = 0; i < a.length; i++) {
        sout += "<td>" + (i+1) + "</td>";
        sout += `<td>${a[i]}</td>`;
        sout += `<td><button onclick='Edit(${i})'  >Edit</button></td>`;
        sout += `<td><button onclick='Delete(${i})'>Delete</button></td>`;
        sout += "<tr>";
    }
    sout += "</table>";
    document.getElementById('output').innerHTML = sout;
}

function Delete(index) {
    if (confirm('Are you sure you want to delete')) {
        a.splice(index, 1);
        display();
    }
}

function Edit(index) {
    let e = `<input id="inp" value="${a[index]}"><button onclick='save(${index})'>Save</button>`
    document.getElementById('output1').innerHTML = e;

}
function save(index) {
    a[index] = document.getElementById('inp').value;
    display();
    document.getElementById('inp').value = '';
}