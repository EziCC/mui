(function(){
    API.queryMyDevices({type:0},function(data){
        var html = [];
        $(data).each(function(i,e){
            html.push(new EJS({url: '../../../../templates/device'}).render({e}));
        });
        $('.lampListDetail>ul').html(html.join(''));
    });
    //bind event.
    $('.fa-angle-right').off().on('click', function () {
        document.location = '../detail.html';
    });

})();