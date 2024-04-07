$("button").on("mouseenter", function () {
    $(this).removeClass("outline contrast");
});

$("button").on("mouseleave", function () {
    $(this).addClass("outline contrast");
});

$("button").click(function () {
    var height = Number($("#height").val());
    var weight = Number($("#weight").val());

    var bmi = weight / (height * height);
    //document.write(bmi);
    $("#result").html("Your BMI is: " + bmi);
});
