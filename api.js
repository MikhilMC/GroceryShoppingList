function generateList() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var output = "";
            for (var i = 0; i < response.length; i++) {
                output += "<tr>\n";
                output += "<th scope=\"row\">" + response[i].serialNumber +"</th>\n";
                output += "<td>" + response[i].name +"</td>\n";
                output += "<td>" + response[i].quantity +"</td>\n";
                output += "<td>" + response[i].unit +"</td>\n";
                output += "<td>" + response[i].department +"</td>\n";
                output += "<td>" + response[i].notes +"</td>\n";
                output += "</tr>\n";
            }
            document.querySelector("tbody").innerHTML = output;
        }
    };

    xhttp.open("GET", "./groceryShoppingList.json", true);
    xhttp.send();
}