$(function () {
    $('#btn-newgreenhouse').on('click', function (event) {
        event.preventDefault();
        $("#newGreenHouseForm").submit();
    });

    $('#btn-editgreenhouse').on('click', function (event) {
        event.preventDefault();
        var greenhouse = getGreenhouseData();
        $('#greenhouseInformation').addClass('hide');
        $("#greenhouseForm").removeClass("hide");
        popupateGreenhouseForm(greenhouse);
    });

    $('#btn-updategreenhouse').on('click', function (event) {
        event.preventDefault();
        $('#greenhouseForm').addClass("hide");
    });

    function getGreenhouseData() {
        var greenhouse = {};
        greenhouse.state = false;
        greenhouse.name = $('#greenhouseName').text();
        if ($('#greenhouseActive')) {
            greenhouse.state = true;
        }
        greenhouse.address = $('#greenhouseAddress').text();
        greenhouse.owner = $('#greenhouseOwner').text();
        greenhouse.description = $('#greenhouseDescription').text();
        return greenhouse;
    }

    function popupateGreenhouseForm(greenhouse) {
        $('#fNombre').val(greenhouse.name);
        $('#fEstado').val(greenhouse.state);
        $('#fDireccion').val(greenhouse.address);
        $('#fDueño').val(greenhouse.owner);
        $('#fDescripcion').val(greenhouse.description);
    }
});

