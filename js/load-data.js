var http = new XMLHttpRequest();
http.onreadystatechange=function(evt){
    if (http.status===200){
        console.log(JSON.parse(http.responseText));
    }
};

http.open("GET","assets/facultets.json",true);
http.send();