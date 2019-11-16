$(function() {
    let btn1 = document.querySelector('#btn-1');

    let submitBtn = document.querySelector('input[name="submit"]');
    
    btn1.addEventListener("click", event => {
        $("#abra").toggle();
        $("#magic").toggle();
        $("#btn-2").toggle();
        $("#btn-1").hide();
    });

    submitBtn.addEventListener('click', event => {
        let name = $('input[name="name"]').val();
        let email = $('input[name="email"]').val();
        let bio = $('textarea[name="bio"]').val();
        event.preventDefault();
        console.log(name, email, bio);
    });

    let url = "https://api.github.com/users/dmcd84";
    // Asynchronous function
    // fetch(url).then(function(response) {
    //     return response.json();
    // }).then(function(json) {
    //     console.log(JSON.stringify(json));
    // })

    axios.get(url)
    .then(function(res) {
        console.log(res);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function(params) {
        
    })
});
