//ADD ROW
function addRow() {
    $('#myTable').append('<tr><td><select><option>Select</option><option>Add</option><option>Remove</option></select></td><td><input type="text" id="name" placeholder="Enter name"></td><td><select><option>18-35</option><option>36-60</option><option>61+</option></select></td><td><button id="deleteRow" onclick="deleteRow()">Delete</button></td></tr>')
    //Option not using jQuery: document.getElementById("myTable").insertRow(-1).innerHTML = '<td><select><option>Select</option><option>Add</option><option>Remove</option></select></td><td><input type="text" id="name" placeholder="Enter name"></td><td><select><option>18-35</option><option>36-60</option><option>61+</option></select></td><td><button id="deteteRow" onclick="deleteRow()">Detete</button></td>';
}

//DELETE ROW
function deleteRow() {
    $("#myTable").on('click', '#deleteRow', function () {
        $(this).closest('tr').remove();
    });
}