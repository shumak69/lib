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

// $('.wrapper').html(`
//     <div class="dropdown">
//     <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//     <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//         <a href="#" class="dropdown-item">Action</a>
//         <a href="#" class="dropdown-item">Effects</a>
//         <a href="#" class="dropdown-item">Style</a>
//     </div>
//     </div>`
// );


// $('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    btns: {
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ], 
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('hello');    
                }
            ]
        ]
    }
}));

$('').createSlider({
    img: [
        'https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg', 
        'https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg', 
        'https://pixlr.com/images/best-photo-editor-cover.jpg'
    ],
    prev: '&lt;',
    next: '&gt;',
    auto: 3000
});


