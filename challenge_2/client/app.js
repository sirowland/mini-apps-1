$(document).ready(function(){
    $('#submit').on('click', function(event){
        event.preventDefault();

        var data = $('#jsonSubmit')[0].value;

        fetch('http://127.0.0.1:1337/',{
            method: 'POST',
            body: data,
            headers: {
                'content-type': 'application/json'
            }
        }).then((res) => {
            return res.text();
        }).then((res) => {
            $('#response').html(res); 
            $('#jsonSubmit').val('');
        }).catch((err) => {
            return console.log(err);
        });

        // $.ajax({
        //     method: 'POST',
        //     url: 'http://127.0.0.1:1337/',
        //     data: data,
        //     contentType: 'application/json',
        //     success: function(data) {
        //         $('#response').html(data); 
        //         $('#jsonSubmit').val('');
        //     },
        //     error: function(data) {

        //     }
        // })
    })
});

