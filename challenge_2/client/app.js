$(document).ready(function(){
    $('#submit').on('click', function(event){
        event.preventDefault();

        var data = $('#jsonSubmit')[0].value;

        $.ajax({
            method: 'POST',
            url: 'http://127.0.0.1:1337/',
            data: data,
            contentType: 'application/json'
        })
    })
});

