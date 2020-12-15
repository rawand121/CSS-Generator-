var myText = $("h1");
textFunction();
updateDOM()

// TEXT
// **********************************
$("ul")
  .find(`[data-prop='text']`)
  .click(function () {
    $(".border, .textShadow, .bg, .margin, .padding").slideUp(function () {
      $(".text").slideDown();
      $(".textt").removeClass("background");
    });
  });
$(".border").slideUp();
$(".textShadow").slideUp();
$(".bg").slideUp();
$(".margin").slideUp();
$(".padding").slideUp();

function textFunction() {
  $("#TXTColor").on("input", function () {
    $(myText).css("color", `${$(this).val()}`);
    updateDOM();
  });

  $("#fontFam").change(function () {
    $(myText).css("font-family", $(this).val());
    updateDOM();
  });
  $("#fontSize").change(function () {
    $(myText).css("font-size", $(this).val() + "px");
    updateDOM();
  });
}

// Border
// ***************************************
$("ul")
  .find(`[data-prop='border']`)
  .click(function () {
    $(".text , .textShadow, .bg, .margin, .padding").slideUp(function () {
      $(".border").slideDown();
      $(".textt").removeClass("background");
    });

    $(document).on("input", "#siz", function () {
      $(myText).css("border-width", $(this).val() + "px");
      updateDOM();
    });

    $("#borderStyle").change(function () {
      $(myText).css("border-style", `${$(this).val()}`);
      updateDOM();
    });

    $("#bColor").on("input", function () {
      $(myText).css("border-color", `${$(this).val()}`);
      updateDOM();
    });

    $(document).on("input", "#BorderRadius", function () {
      $(myText).css("border-radius", $(this).val() + "px");
      updateDOM();
    });
  });

// TEXT SHADOW
// ***************************
$("ul")
  .find(`[data-prop='TXTshadow']`)
  .click(function () {
    $(".text, .border, .bg, .margin, .padding").slideUp(function () {
      $(".textShadow").slideDown();
      $(".textt").removeClass("background");
    });

    // Horizental Shadow
    $("#horizental").on("input", function () {
      $(myText).css({
        "text-shadow":
          $(this).val() +
          "px " +
          $("#vertical").val() +
          "px " +
          $("#Blur").val() +
          "px " +
          $("#color").val(),
      });
      updateDOM();
    });

    // Verical Shadow
    $("#vertical").on("input", function () {
      $(myText).css({
        "text-shadow":
          $("#horizental").prop("value") +
          "px " +
          $(this).val() +
          "px " +
          $("#Blur").prop("value") +
          "px " +
          $("#color").prop("value"),
      });
      updateDOM();
    });

    // Blur Shadow
    $("#Blur").on("input", function () {
      $(myText).css({
        "text-shadow":
          $("#horizental").val() +
          "px " +
          $("#vertical").val() +
          "px " +
          $(this).val() +
          "px " +
          $("#color").val(),
      });
      updateDOM();
    });

    // ColorOf Shadow
    $("#color").on("input", function () {
      $(myText).css({
        "text-shadow":
          $("#horizental").val() +
          "px " +
          $("#vertical").val() +
          "px " +
          $("#Blur").val() +
          "px " +
          $(this).val(),
      });
      updateDOM();
    });
  });

// Background
// ************************
$("ul")
  .find(`[data-prop='bg']`)
  .click(function () {
    $(".text , .textShadow, .border, .margin, .padding").slideUp(function () {
      $(".bg").slideDown()
    });
    $("#background").on("input", function () {
      $(myText).css("background-color", $(this).val());
      updateDOM();
    });
  });

// Margin
// **************************
$("ul")
  .find(`[data-prop='margin']`)
  .click(function () {
    $(".border, .textShadow, .bg, .text, .padding").slideUp(function () {
      $(".margin").slideDown()
    });

    $("#ml, #mt, #mr, #mb").on("input", function () {
      $(myText).css({
        margin:
          $("#mt").val() +
          "px " +
          $("#mr").val() +
          "px " +
          $("#mb").val() +
          "px " +
          $("#ml").val() +
          "px ",
      });
      updateDOM();
    });
  });

// Padding
// **************************
$("ul")
  .find(`[data-prop='padding']`)
  .click(function () {
    $(".border, .textShadow, .bg, .text, .margin").slideUp(function () {
      $(".padding").slideDown();
    });

    $("#pl, #pt, #pr, #pb").on("input", function () {
      $(myText).css({
        padding:
          $("#pt").val() +
          "px " +
          $("#pr").val() +
          "px " +
          $("#pb").val() +
          "px " +
          $("#pl").val() +
          "px ",
      });
      updateDOM();
    });
  });

function updateDOM() {
  $('.codes').empty();
  const cssVals = $(myText).css([
    "margin-left",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "padding-left",
    "padding-top",
    "padding-bottom",
    "padding-right",
    "background-color",
    "font-size",
    "font-family",
    "color",
    "text-shadow",
    "border",
  ]);
  const myArr = $.map(cssVals, function (value, key) {
    return [`${key} : ${value}`];
  });
  $.each(myArr, function (indexInArray, value) {
     $('.codes').append(`<li class='code'>${value} ;</li>`);
  });
}
