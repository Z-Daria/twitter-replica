const $loginButton =  $('.white-button');
const $signinButton = $('.blue-button');
const $footerItems = $('nav').children();
const $inputField = $('.input-field');



$(document).ready(() => {
    $loginButton.on('mouseenter', event => {
        $(event.currentTarget).css({
            backgroundColor: 'rgba(233, 240, 241, 0.6)',
            cursor: 'pointer'
        });
    }).on('mouseleave', () => {
        $loginButton.css({
            backgroundColor: '#fff',
            cursor: 'pointer'
        });
    });

    $signinButton.on('mouseenter', () => {
        $signinButton.css({
            backgroundColor: 'rgb(31, 134, 197)',
            cursor: 'pointer'
        });
    }).on('mouseleave', () => {
        $signinButton.css({
            backgroundColor: 'rgb(29, 161, 242)',
            cursor: 'pointer'
        });
    });

    $footerItems.on('mouseenter', event => {
        $(event.currentTarget).addClass('hover');
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('hover');
    });

    $('.password-reset').on('mouseenter', () => {
        $('.password-reset').addClass('hover');
    }).on('mouseleave', () => {
        $('.password-reset').removeClass('hover');
    });

    $('.input-field input').on('focus', event => {
        $(event.currentTarget).closest('.input-field').css({
            color: 'rgb(29, 161, 242)',
            borderBottom: '2px solid rgb(29, 161, 242)'
        })
    }).on('blur', event => {
        $(event.currentTarget).closest('.input-field').css({
            color: 'rgb(101, 119, 134)',
            borderBottom: '2px solid rgb(118, 118, 118)'
        })
    })
    
});