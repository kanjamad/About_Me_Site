
console.log('Hi!!!!!');

    $(document).ready(function () {
    
        $("button").click(function(event) {
            event.preventDefault();
            console.log('click!!!!!!!!!!!!');
            // console.log($(this).parent())
            $('.fas').animate({left: '550px'}, 4000);
        });

        $("form").click(function(event) {
            event.preventDefault();
            console.log("submit!!!!!!!!!!!!");
            $(this).replaceWith('<h1>Thank you for submit the form..........</h1>');
        });

    });






    // $(document).ready(function () {
    
    //     $( 'button' ).on('click', function(event) {
    //         event.preventDefault();
    //         console.log('click!!!!!!!!!!!!');
    //         console.log($(this).parent())
    //     // $(this).parent().find('.fas').animate({left: '550px'}, 4000);
    //     });

    //     $("form").click(function(event) {
    //         event.preventDefault();
    //         console.log("submit!!!!!!!!!!!!");
    //         $(this).replaceWith('<h1>Thank you for submit the form..........</h1>');
    //     });

    // });