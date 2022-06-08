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
    $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').click(function () {
    $('div').eq(2).fadeOut(800);
});

$('button').eq(3).on('click', () => {
    $('.w-500').fadeOut(800);
});
