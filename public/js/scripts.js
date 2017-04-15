$(function () {
    $('#btn-newgreenhouse').on('click', function (event) {
        event.preventDefault();
        $("#newGreenHouseForm").submit();
    });

    $('#btn-editgreenhouse').on('click', function (event) {
        event.preventDefault();
        $("#greenHouseForm").removeClass("hide");
    });

    $('#btn-updategreenhouse').on('click', function (event) {
        event.preventDefault();
        $('#greenHouseForm').addClass("hide");
    });
});