$(function () {
    $('#btn-newgreenhouse').on('click', function (event) {
        event.preventDefault();
        $("#newGreenHouseForm").submit();
    })
});