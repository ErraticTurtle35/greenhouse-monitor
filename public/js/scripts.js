$(function () {
    $('#btn-newgreenhouse').on('click', function (event) {
        event.preventDefault();
        $("#newGreenHouseForm").submit();
    });

    $('#btn-editgreenhouse').on('click', function (event) {
        event.preventDefault();
        $("#greenhouseForm").removeClass("hide");
    });

    $('#btn-updategreenhouse').on('click', function (event) {
        event.preventDefault();
        $('#greenhouseForm').addClass("hide");
    });
});