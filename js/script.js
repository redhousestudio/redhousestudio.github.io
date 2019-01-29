$(document).ready(function() {
  $(".studio-item>img").click(function(e) {
    console.log($(this)[0].src);
    var imgSrc = $(this)[0].src;
    var imgCaption = $(this)[0].alt;
    imgSrc = imgSrc.replace("-thumb", "");
    console.log(imgSrc);
    $("#studio-item-img").prop("src", imgSrc);
    $("#studio-item-caption").html(imgCaption);
    $("#studio-modal").modal("show");
  });


  function shuffleElements($elements) {
    var i, index1, index2, temp_val;
  
    var count = $elements.length;
    var $parent = $elements.parent();
    var shuffled_array = [];
  
  
    // populate array of indexes
    for (i = 0; i < count; i++) {
      shuffled_array.push(i);
    }
  
    // shuffle indexes
    for (i = 0; i < count; i++) {
      index1 = (Math.random() * count) | 0;
      index2 = (Math.random() * count) | 0;
  
      temp_val = shuffled_array[index1];
      shuffled_array[index1] = shuffled_array[index2];
      shuffled_array[index2] = temp_val;
    }
  
    // apply random order to elements
    $elements.detach();
    for (i = 0; i < count; i++) {
      $parent.append( $elements.eq(shuffled_array[i]) );
    }
  }

  shuffleElements( $("#discoSlider .item" ) );
  $($("#discoSlider .item" )[0]).addClass("active");
  
});
