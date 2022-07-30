$('#prod_table').on('click', 'a.delete', function (e) {
    e.preventDefault();
    deleteProduct($(this).attr('href'));
});

function deleteProduct(dtpUrl) {
    var dtProd = $('#delete_modal');
    $.ajax({
        url: dtpUrl,
        type: "GET",
        success: function (res) {
            dtProd.html(res);
            dtProd.find('.dltModal').modal('show');
        }
    });

    dtProd.on('click', '[data-delete="dt_prod"]', function (event) {
        var form = $(this).parents('.modal').find('form');
        var sendData = form.serialize();
        var new_p_url = dtpUrl.replace('/Product/Delete/', "/Product/DeleteCon/");
        $.ajax({
            url: new_p_url,
            data: sendData,
            type: 'POST',
            success: function (res) {
                dtProd.find('.modal').modal('hide');
                $('#loadder_modal').show();

                //toastr.success('Product Deleted');
                //get the new brand list by initialize the ajax call made in get_brand_list
                loadProdList();
                $('#loadder_modal').hide();
                $('#prod_delete_modal').html('');
                //toastr.clear();

            },
            error: function (err) {
                console.log(err);
            }
        });
    });
}