function searchFunction() {
    var input, filter, ui, li, a, i, txtValue;
    input = document.getElementById("trailsearch")
    filter = input.value.toUpperCase();
    ul = document.getElementById("traillist");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 ) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
