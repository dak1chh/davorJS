function makehttpRequest() {
    let xhr = new XMLHttpRequest();
    let url = `https://ssspi.dev/api/files`;
    xhr.open(`GET`, url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState ==4) {
            if (xhr ==200) {
                let response = xhr.responseText;
                let responseData = JSON.parse.response;
                console.log(responseData);
            } else {
                console.log(`Something went wrong`)
            }
        }
    }
    xhr.send();

}
let myBtn = document.getElementById(`myButton`);
myBtn.addEventListener(`click`, makehttpRequest);