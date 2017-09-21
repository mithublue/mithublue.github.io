;(function($){
    $.fn.sectionizr = function(useroptions){
        // Define options and extend with user
        var o = {
            content : ''
        };

        $.extend(o, useroptions);
        var _this = this;
        var elem_size = {};

        $('a',_this).click(function () {

            var counter = 0;
            var target_elem = $(this).data('target');

            $('*[data-key]',o.content).each(function () {
                var keys = $(this).data('key').split(',');
                if( typeof  elem_size[counter] == 'undefined' ) {
                    elem_size[counter] = [ $(this).width(), $(this).height()];
                    counter++;
                };

                if( $(this).data('key').split(',').indexOf(target_elem) == -1 /*$(this).data('key') != target_elem*/ && target_elem != '') {
                    $(this).animate(
                        {
                            width : 0,
                            height : 0
                        },500,function () {

                        });
                } else {
                    if( typeof  elem_size[counter] != 'undefined' ) {
                        $(this).animate(
                            {
                                width : elem_size[counter][0],
                                height : elem_size[counter][1]
                            },500,function () {

                            });
                    }

                }
            });
            return false;
        });
        return this;
    };
})(jQuery);