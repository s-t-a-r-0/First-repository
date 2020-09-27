require.config({
    paths: {
        'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min',
        'jcookie': 'https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.0/jquery.cookie.min',
        'jlazyload': 'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.8.3/jquery.lazyload.min'
    },
    shim: { 
        'jcookie': {
            deps: ['jquery'], 
            exports: 'jcookie'
        },
        'jlazyload': {
            deps: ['jquery'],
            exports: 'jlazyload'
        }
    }
});

require(['jquery', 'jcookie', 'jlazyload'],function(){
    let pagemod = $('#currentpage').attr('data-page');
    require([pagemod], function(page) {
        page.init();
    })
});