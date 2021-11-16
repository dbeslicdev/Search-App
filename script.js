var term = document.getElementById('term');

let searchInput = [term];

searchInput.forEach(function (element) {
    element.addEventListener('keyup', getJson);
});



function getJson() {
    fetch('https://itunes.apple.com/search?term=' + term.value.toLowerCase())
        .then(function (response) {

            return response.json();
        })
        .then(function (data) {

            let result = '';
            try {
                data.results.forEach(function (song) {
                    console.log(song);
                    result += `<li>${song.artistName} - ${song.trackName}</li>`;
                });
            }
            catch { }
            document.getElementById('result').innerHTML = result;

        })
        .catch(function (empty) {
            console.log(empty);
        });

}