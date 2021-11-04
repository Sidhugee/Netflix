var objPeople = [{
        username: "sallal",
        password: "codify"
    },
    {
        username: "haider",
        password: "academy"
    },
    {
        username: "alexandra",
        password: "forever"
    }

]

function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    var url = document.getElementById('search_link').href;

    for (var i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            window.open(url);
        } else {
            window.alert("incorrect email or password");
        }
    }
}