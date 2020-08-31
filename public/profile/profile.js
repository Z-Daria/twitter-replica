const $navItems = $('nav').find('div');
const $blueButton = $('.blue-button');
const $searchBar = $('.search-bar');
const $readButtons = $('.user-rec button');
const $footerItems = $('footer a, footer div');


$(document).ready(() => {
    $navItems.on('mouseenter', event => {
        $(event.currentTarget).addClass('nav-item-hover');
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('nav-item-hover');
    });

    $blueButton.on('mouseenter', event => {
        $(event.currentTarget).css({
            backgroundColor: 'rgb(31, 134, 197)',
            cursor: 'pointer'
        })
    }).on('mouseleave', event => {
        $(event.currentTarget).css({
            backgroundColor: 'rgb(29, 161, 242)',
            cursor: 'auto'
        })
    });

    $('.search-bar input').on('focus', () => {
        $searchBar.css({
            backgroundColor: '#fff',
            border: '1px solid rgb(29, 161, 242)'
        });
    }).on('blur', () => {
        $searchBar.css({
            backgroundColor: 'rgb(230, 236, 240)',
            border: '1px solid rgb(230, 236, 240)'
        })
    });

    $('.search-bar input').on('keyup', () => {
        $('.cancel-icon').css('visibility', 'visible');
        $('.cancel-icon').on('mouseenter', () => {
            $('.cancel-icon').css('cursor', 'pointer');
        }).on('click', () => {
            $('.search-bar input').val('');
            $('.cancel-icon').css('visibility', 'hidden');
        }).on('mouseleave', () => {
            $('.cancel-icon').css('cursor', 'auto');
        });
        
    });

    $('.side-icon, .arrow-icon, .attach-icon').on('mouseenter', event => {
        $(event.currentTarget).addClass('heading-icon-hover');
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('heading-icon-hover');
    });

    $('.account, .user-rec, .tweet-link, .more').on('mouseenter', event => {
        $(event.currentTarget).css({
            backgroundColor: 'rgb(230, 236, 240)',
            cursor: 'pointer'
        });
    }).on('mouseleave', event => {
        $(event.currentTarget).css({
            backgroundColor: 'transparent',
            cursor: 'auto'
        });
    });

    $($readButtons).on('mouseenter', event => {
        $(event.currentTarget).css({
            backgroundColor: 'rgb(209, 224, 238)', 
            cursor: 'pointer'
        });
    }).on('mouseleave', event => {
        $(event.currentTarget).css({
            backgroundColor: '',
            cursor: 'auto'
        });
    });

    $footerItems.on('mouseenter', event => {
        $(event.currentTarget).css('text-decoration', 'underline');
    }).on('mouseleave', event => {
        $(event.currentTarget).css('text-decoration', '');
    });

    $('#more-info').on('click', () => {
        $('.more-info').show();
    });

});

