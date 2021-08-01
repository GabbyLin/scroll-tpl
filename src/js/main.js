
import { carouselGenerate, relateGenerate } from './_generator.js';



$(function () {

    var scrolling = false;
    var count = 0;
    function deltaUpdate(e) {
        if (!scrolling) {
           e.wheelDelta < 0 ? count++ : count--;
            if (count < 0) { count = 0 }
            if (count > 3) { count = 3 }
            console.log(count);
            scrolling = true;
        }
        $('.box').removeClass('show')
        $('.box').eq(count).addClass('show')
        scrolling = false;

        console.log(scrolling)
    }

    var debounced = _.debounce(deltaUpdate, 1000, { 'maxWait': 1000 });
    window.addEventListener('mousewheel', debounced, { passive: true });

});



