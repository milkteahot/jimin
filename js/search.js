$(function() {
  $("input").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $(".container > div").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
    $("td > *").filter(function() {
        $(this).toggle(
          $(this)
            .text()
            .toLowerCase()
            .indexOf(value) > -1
        );
      });
  });
});
