var dataTable;

$(document).ready(function () {
    loadProdList();
})

function loadProdList() {
    dataTable = $('#prod_table').DataTable({
        "ajax": {
            "url": "/Product/getProductList"
        },
        "columns": [
            { "data": "id" },
            { "data": "productCode" },
            { "data": "productName" },
            { "data": "unitPrice" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                        <div class="row">
                            <div class="col-md-6">
                                <a class = "btn btn-primary edit" href="/Product/Edit/${data}">Edit</a>
                            </div>
                            <div class="col-md-6">
                                 <a class = "btn btn-danger delete" href="/Product/Delete/${data}">Delete</a>
                            </div>
                        </div>
                    `
                }
            }
        ],
        "bDestroy": true,
    })
}