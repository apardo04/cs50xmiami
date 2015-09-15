jQuery(function(){
    $('#searchvalue').blur(function(){
        var textValue = $(this).val(); // GETTING TEXT BOX VALUE
        if(textValue.length === 0) {
            $('.glyphicon-search').parent().hide(); // HIDDING DIV IF TEXT BOX IF NOT EMPTY
        } else {
            $('.glyphicon-search').parent().show(); // SHOWING DIV IF TEXT BOX IF EMPTY
        }
    });
});
