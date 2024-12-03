$(document).ready(function () {

    function newItem() {
        let inputValue = $('#input').val().trim();

        if (inputValue === '') {
            alert("You must write something!");
        } else {
            let newItemHTML = `<li><span>${inputValue}</span><button class="delete-btn">X</button></li>`;
            $('#list').append(newItemHTML);
        }

        $('#input').val('');
    }

    $('#button').on('click', newItem);

    $('#list').on('dblclick', 'li span', function () {
        $(this).parent().toggleClass('strike');
    });

   
    $('#list').on('click', '.delete-btn', function () {
        $(this).parent().remove(); 
    });

   
    $('#list').sortable({
        placeholder: 'sortable-placeholder',
    }).disableSelection();
});

