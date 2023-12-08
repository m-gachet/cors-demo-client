var url = "https://localhost:7095/weatherforecast";
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('+------------------------------+');
        console.log(data);
        console.log('+------------------------------+');
    })