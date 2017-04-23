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
        var greenhouseId = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
        var greenhouseFormData = objectifyForm($('#greenhouseForm').serializeArray());
        $.ajax({
            url: '/greenhouse/' + greenhouseId,
            type: 'PUT',
            data: greenhouseFormData
        }).done(function (greenhouse) {
            if (greenhouse) {
                populateGreenhouseData(greenhouse);
                $('#greenhouseForm').addClass("hide");
                $('#greenhouseInformation').removeClass('hide');
            }
        });
    });

    $('#btn-createsensor').on('click', function (event) {
        event.preventDefault();
        $('#sensorForm').removeClass("hide");
    });

    $('#btn-savesensor').on('click', function (event) {
        event.preventDefault();
        var sensorForm = $('#sensorForm');
        var greenhouseId = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
        var sensorFormData = objectifyForm(sensorForm.serializeArray());
        $.ajax({
            url: '/greenhouse/sensor/' + greenhouseId,
            type: 'POST',
            data: sensorFormData
        }).done(function (sensor) {
            if (sensor) {
                location.reload();
            }
        });
    });

    function getGreenhouseData() {
        var greenhouse = {};
        greenhouse.state = false;
        greenhouse.name = $('#greenhouseName').text();
        if ($('#greenhouseActive').length > 0) {
            greenhouse.state = true;
        }
        greenhouse.address = $('#greenhouseAddress').text();
        greenhouse.owner = $('#greenhouseOwner').text();
        greenhouse.description = $('#greenhouseDescription').text();
        return greenhouse;
    }

    function populateGreenhouseData(greenhouse) {
        $('#greenhouseName').text(greenhouse.name);

        if (greenhouse.state) {
            var greenhouseInactive = $('#greenhouseInactive');
            if (greenhouseInactive.length > 0) {
                if ($('#greenhouseActive').length > 0) {

                } else {
                    greenhouseInactive.after("<small id='greenhouseActive'>Activo</small>");
                    greenhouseInactive.addClass('hide');
                }
            }
        } else {
            $('#greenhouseActive').addClass('hide');
            $('#greenhouseInactive').removeClass('hide');
        }
        $('#greenhouseAddress').text(greenhouse.address);
        $('#greenhouseOwner').text(greenhouse.owner);
        $('#greenhouseDescription').text(greenhouse.description);
    }

    function popupateGreenhouseForm(greenhouse) {
        $('#fNombre').val(greenhouse.name);
        $('#fEstado').prop('checked', greenhouse.state);
        $('#fDireccion').val(greenhouse.address);
        $('#fDueño').val(greenhouse.owner);
        $('#fDescripcion').val(greenhouse.description);
    }

    function objectifyForm(formArray) {
        var returnArray = {};
        for (var i = 0; i < formArray.length; i++) {
            returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
        return returnArray;
    }
});

