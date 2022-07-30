$(document).ready(function () {
    //$(function () {
    var createProd = $("#prod_creation_modal");

    //Add product
    $('button[data-toggle="add-modal"]').click(function (event) {
        var url = $(this).data('url');
        var decodeUrl = decodeURIComponent(url);
        $.ajax({
            url: decodeUrl,
            type: 'GET',
            success: function (data) {
                createProd.html(data);
                createProd.find('.addmodal').modal('show');
            }
        });
    });

    createProd.on('click', '[data-add="product"]', function (event) {
        var form = $(this).parents('.modal').find('form');
        var sendData = form.serialize();
        $.ajax({
            //url: actionUrl,
            url: "/Product/Create",
            data: sendData,
            type: 'POST',
            success: function (res) {
                createProd.find('.modal').modal('hide');
                $('#loadder_modal').show();
                //toastr.success('Brand Added');
                //get the new brand list by initialize the ajax call made in get_brand_list
                loadProdList();
                $('#loadder_modal').hide();

            },
            error: function (err) {
                console.log(err);
            }
        });
    });
    createProd.on('click', '[data-dismiss="close_modal"]', function (event) {
        createProd.find('.modal').modal('hide');
    });
});

