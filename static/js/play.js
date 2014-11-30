$(document).ready(function() {
	$('button').on("click", function() {
        $(this).closest('div').find('.more').show();
    });

  $(".tour").on("mouseenter", function() {
    $(this).addClass("highlight");
    $(this).find(".per-night").animate({"top": "-14px","opacity": "1"}, "fast");
  });
  $(".tour").on("mouseleave", function() {
    $(this).removeClass("highlight");
  });
});
