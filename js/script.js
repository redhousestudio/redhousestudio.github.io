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
});
