function imageFocus(){
  $('.thumbnail').on('click', function(event){
    let imgSrc = $(this).find('img').attr('src');
    let imgAlt = $(this).find('img').attr('alt');

    $('.hero img').attr({'src':  imgSrc, 'alt': imgAlt});
    
  })
};

$(imageFocus);
