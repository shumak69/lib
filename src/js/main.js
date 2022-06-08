import './lib/lib';

// $('button').on('click', function () {
//     $('div').eq(1).toggleClass('active');
// });

// $('div').click(function () {
//     console.log($(this).index());
// });
// $('button').click(function () {
//     $(this).fadeOut(580);
// });

$('#first').click(function () {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').click(function () {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(3).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('.wrapper').html(`
    <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
        <a href="#" class="dropdown-item">Action</a>
        <a href="#" class="dropdown-item">Effects</a>
        <a href="#" class="dropdown-item">Style</a>
    </div>
    </div>`
);


$('.dropdown-toggle').dropdown();

