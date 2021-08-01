
function carouselGenerate(imglist){
    let str = '';
    imglist.forEach(el => {
        str += '<div class="carousel-cell">'
            +'<div class="img-container">'
            +'<a class="venobox" href="'+el['img_path']+'" data-gall="myGallery" data-title="'+el['img_title']+'">'
            +'<img class="lazyload featured-image" data-src="'+el['img_path']+'" width="800" height="600" title="'+el['img_title']+'" alt="">'
            +'</a>'
            +'</div>'
            +'</div>'
    });

    return str;
}


function relateGenerate(articlelist){
    let str = '';
    articlelist.forEach(el => {
        str += '<div class="card">'
                +'<div class="pic">'
                +'<a href="'+ el['link'] +'">'
                +'<div class="relatedmask">'
                +'<div class="maskbtn">深入閱讀</div>'
                +'</div>'
                +'<div class="img-container">'
                +'<img class="featured-image lazyload" data-src="'+ el['img_path'] +'" alt="" width="260" height="195">'
                +'</div>'
                +'</a>'
                +'</div>'
                +'<div class="cardtitle">'
                +'<a href="'+ el['link'] +'">'+el['title']+'</a>'
                +'</div>'
                +'</div>'
    });

    return str;
}

export { carouselGenerate, relateGenerate };