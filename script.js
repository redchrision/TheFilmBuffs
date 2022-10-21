$(() => {

    //The spotlight animation from the Director Spotlight page
    //Resource: Better Dev, “Radial Gradient Spotlight Effect On Mousemove | HTML CSS & Javascript Tutorial”, 2020. [Online]. Available: https://www.youtube.com/watch?v=x7onxhz4hp8&list=PLxWnfLOoHOJaDIec5R0cVa8hwfNg_mQD_&index=12&t=8s [Accessed: 19-Sept 2020]

    const spotlight = $('.spotlight');
    const image = $('#spotlight-img'); 
    image.on('mousemove', e => {
        updateSpotlight(e)
    });

    function updateSpotlight(e) {
        spotlight.css({
            backgroundImage:`radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, transparent 200px, #2F2F2E 300px)`

        })
    }

    //The carousel from Filmography page
    //Resource: Going-To Internet, “Responsive Product Slider Using HTML CSS and Javascript”, 2020. [Online]. Available: https://www.youtube.com/watch?v=drOgpionKpY&list=PLxWnfLOoHOJaDIec5R0cVa8hwfNg_mQD_&index=11&t=1s [Accessed: 19-Sept 2020]
    //Resource: JQuery lightSlider [Online]. Available: http://sachinchoolur.github.io/lightslider/index.html [Accessed: 19-Sept 2020]

        $('#autoWidth').lightSlider({
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                console.log("hello")
                $('#autoWidth').removeClass('cS-hidden');
            } 
        });  
})
