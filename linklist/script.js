
$(document).ready(function() {
    const products = [
        {
            "name": "Product 1",
            "price": "$40.00 - $80.00",
            "image": "image1.jpg"
        },
        {
            "name": "Product 2",
            "price": "$35.00 - $70.00",
            "image": "image2.jpg"
        },
        {
            "name": "Product 2",
            "price": "$35.00 - $70.00",
            "image": "image2.jpg"
        },
        {
            "name": "Product 2",
            "price": "$35.00 - $70.00",
            "image": "image2.jpg"
        },
        {
            "name": "Product 2",
            "price": "$35.00 - $70.00",
            "image": "image2.jpg"
        },
        {
            "name": "Product 2",
            "price": "$35.00 - $70.00",
            "image": "image2.jpg"
        },
        // Add more products here...
    ];

    // Loop through the products and create Bootstrap cards
    $.each(products, function(index, product) {
        const cardHtml = `
            <div class="col-md-4">
                <div class="card mb-4 product-card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <a href="#" class="btn btn-primary">View Options</a>
                    </div>
                </div>
            </div>
        `;

        // Append each card to the #product-cards div
        $('#product-cards').append(cardHtml);
    });
});



$(document).ready(function () {
    var jsonData = [
        { id: 1, name: "Entry 1", content: "Content of Entry 1" },
        { id: 2, name: "Entry 2", content: "Content of Entry 2" },
        { id: 3, name: "Entry 3", content: "Content of Entry 3" },
    ];

    function populateTable() {
        var tbody = $("#dynamic-table tbody");
        tbody.empty();

        $.each(jsonData, function (index, entry) {
            var row = $("<tr>").appendTo(tbody);
            $("<td>").text(entry.id).appendTo(row);
            $("<td>").text(entry.name).appendTo(row);
            $("<td>").text(entry.content).appendTo(row);
            $("<td>").html('<button class="btn btn-primary view-btn" data-entry-index="' + index + '">View</button>').appendTo(row);
        });
    }

    populateTable();

    $(".view-btn").click(function () {
        var index = $(this).data("entry-index");
        var entry = jsonData[index];
        $("#viewModal .modal-body").html("<p><strong>Name:</strong> " + entry.name + "</p><p><strong>Content:</strong> " + entry.content + "</p>");
        $("#viewModal").modal("show");
    });
});

