var http = new XMLHttpRequest();
var fakultets = [];
http.onreadystatechange = function (evt) {
    if (http.readyState === 4 && http.status === 200) {
        fakultets = JSON.parse(http.responseText);
        renderFakultetPopup();
    }
};

http.open("GET", "assets/facultets.json", true);
http.send();
var http1 = new XMLHttpRequest();
var kafedras = [];
http1.onreadystatechange = function (evt) {
    if (http1.readyState === 4 && http1.status === 200) {
        kafedras = JSON.parse(http1.responseText);
    }
};

http1.open("GET", "assets/kafedras.json", true);
http1.send();

function renderFakultetPopup() {
    var popup = document.querySelector(".popup");
    fakultets.forEach((item) => {
        var h1 = document.createElement('h1');
        h1.innerHTML = item.name;
        var img = document.createElement('img');
        img.src = "assets/images/" + item.imgUrl;
        var div = document.createElement('div');
        div.setAttribute('class', 'item');
        div.setAttribute('id', item.id);
        div.appendChild(img);
        div.appendChild(h1);
        div.onclick = () => {
            var kafs=kafedras.filter((it)=>it.id_fakultet===item.id);
            renderKafedraPopup(kafs,popup);
        }
        popup.appendChild(div);
    });
}

function renderKafedraPopup(kafedraho,popup){
popup.innerHTML="";
kafedraho.forEach((item) => {
    var h1 = document.createElement('h1');
    h1.innerHTML = item.name;
    var img = document.createElement('img');
    img.src = "assets/images/" + (item.rasm?item.rasm:"green.jpg");
    var div = document.createElement('div');
    div.setAttribute('class', 'item');
    div.setAttribute('id', item.id);
    div.appendChild(img);
    div.appendChild(h1);
    div.onclick = () => {
        console.log(item.id)
    }
    popup.appendChild(div);
});
}