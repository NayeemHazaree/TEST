$('#prod_table').on('click', 'a.edit', function (e) {
    e.preventDefault();
    editProductItem($(this).attr('href'));

})

function editProductItem(edtUrl) {
    //get the popup modal
    var edtPrd = $('#edit_modal');
    $.ajax({
        url: edtUrl,
        type: "GET",
        success: function (response) {
            edtPrd.html(response);
            edtPrd.find('.edtmodal').modal('show');
        },
        error: function (err) {
            //console.log(err);
        }
    });

    //edit the data
    edtPrd.on('click', '[data-edit="edt_product"]', function (event) {
        var form = $(this).parents('.modal').find('form');
        var sendData = form.serialize();
        $.ajax({
            url: edtUrl,
            data: sendData,
            type: "POST",
            success: function (res) {
                edtPrd.find('.modal').modal('hide');
                loadProdList();
            },
            error: function (err) {

            }
        })
    });

    //close popup modal
    edtPrd.on('click', '[data-dismiss="close_modal"]', function (event) {
        edtPrd.find('.modal').modal('hide');
    })
}