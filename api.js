function generateList() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var output = "";
            for (var i = 0; i < response.length; i++) {
                output += "<tr>";
                output += "<th scope=\"row\">" + response[i].serialNumber +"</th>";
                output += "<td>" + response[i].name +"</td>";
                output += "<td>" + response[i].quantity +"</td>";
                output += "<td>" + response[i].unit +"</td>";
                output += "<td>" + response[i].department +"</td>";
                output += "<td>" + response[i].notes +"</td>";
                output += "</tr>";
            }
            document.querySelector("tbody").innerHTML = output;
        }
    };

    xhttp.open("GET", "./groceryShoppingList.json", true);
    xhttp.send();
}