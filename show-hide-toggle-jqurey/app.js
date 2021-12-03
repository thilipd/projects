$(document).ready(function () {
    $("#show_hide").click(function () {
        $(".tblcls").toggle(2000)
    });

    $("#show").click(function () {
        $("#toggle_tst").show(1500);
    });
    $("#hide").click(function () {
        $("#toggle_tst").hide(1500);
    });
});



