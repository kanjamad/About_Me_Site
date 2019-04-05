
console.log('Hi!!!!!');

    // $(document).ready(function () {
    
    //     $("button").click(function(event) {
    //         event.preventDefault();
    //         console.log('click!!!!!!!!!!!!');
    //         // console.log($(this).parent())
    //         $('.fas').animate({left: '550px'}, 4000);
    //     });

    //     $("form").click(function(event) {
    //         event.preventDefault();
    //         console.log("submit!!!!!!!!!!!!");
    //         $(this).replaceWith('<h1>Thank you for submit the form..........</h1>');
    //     });

    // });






    $(document).ready(function () {
    
        $('form').on('click', function(event) {
            event.preventDefault();
            console.log('click!!!!!!!!!!!!');
            $('#fas1').animate({left: '550px'}, 4000);
            $(this).replaceWith('<h1>Thank you for submit the form..........</h1>');
        });


        $('.projectHeader').click(function(event) {
            event.preventDefault();
            console.log("click project!!!!!!!!!!!!");
            $('.fa-car-side').animate({left: '550px'}, 4000);

        });

    });
