$(document).ready(function($){
    // picking number of Five
    var singleNum = $('.number-box.common').find('.single-number');
    var singleNum2 = $('.number-box.special').find('.single-number');

    $(singleNum).on('click', function(){
        var singleNumLength = $('.number-box.common').find('.single-number.selected').length;
        var this_btn_number = parseInt($(this).text());

        if($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $('.result-number-palate').find('#' + this_btn_number).remove();
        } else {
            if(singleNumLength < 5) {
                $(this).addClass('selected');
                $('.result-number-palate').append("<button class='single-number selected' id='" + this_btn_number + "'>" + $(this).text() + "</button>");
            }
        }
    });

    // picking number of OneSpecial
    $(singleNum2).on('click', function(){
        var singleNumLength = $('.number-box.special').find('.single-number.selected.special').length;
        var this_btn_number = parseInt($(this).text());

        if($(this).hasClass('selected') && $(this).hasClass('special')) {
            $(this).removeClass('selected');
            $(this).removeClass('special');
            $('.result-number-palate').find('#' + '0' + this_btn_number).remove();
        } else {
            if(singleNumLength < 1) {
                $(this).addClass('selected');
                $(this).addClass('special');
                $('.result-number-palate').append("<button class='single-number selected special' id='" + '0' + this_btn_number + "'>" + $(this).text() + "</button>");
            }
        }
    });

    // clear all selected number 
    var all_Single_Number = $('.number-box').find('.single-number');
    var all_Result_Number = $('.result-number-palate');

    function clearAllNumbers() {
        all_Result_Number.empty();
        all_Single_Number.removeClass('selected');
        all_Single_Number.removeClass('special');
    }
    
    function randomNumberGenerate() {
        let singleRandomNumberTo8 = Math.floor(Math.random() * (8 - 1 + 1) + 1);
        let singleRandomNumberTo16 = Math.floor(Math.random() * (16 - 9 + 1) + 9);
        let singleRandomNumberTo24 =Math.floor(Math.random() * (24 - 17 + 1) + 17);
        let singleRandomNumberTo32 = Math.floor(Math.random() * (32 - 25 + 1) + 25);
        let singleRandomNumberTo40 = Math.floor(Math.random() * (40 - 33 + 1) + 33);
        let special_singleRandomNumber = Math.floor(Math.random() * (20 - 1 + 1) + 1);

        $('.number-box.common').find('.single-number').each(function(){
            var thisInnerNumber = parseInt($(this).text());
            $(this).attr('id', thisInnerNumber);
            $('#' + singleRandomNumberTo8).addClass('selected');
            $('#' + singleRandomNumberTo16).addClass('selected');
            $('#' + singleRandomNumberTo24).addClass('selected');
            $('#' + singleRandomNumberTo32).addClass('selected');
            $('#' + singleRandomNumberTo40).addClass('selected');
        });
        
        $('.result-number-palate').append("<button class='single-number selected' id='" + singleRandomNumberTo8 + "'>" + $("#" + singleRandomNumberTo8).text() + "</button>");
        $('.result-number-palate').append("<button class='single-number selected' id='" + singleRandomNumberTo16 + "'>" + $("#" + singleRandomNumberTo16).text() + "</button>");
        $('.result-number-palate').append("<button class='single-number selected' id='" + singleRandomNumberTo24 + "'>" + $("#" + singleRandomNumberTo24).text() + "</button>");
        $('.result-number-palate').append("<button class='single-number selected' id='" + singleRandomNumberTo32 + "'>" + $("#" + singleRandomNumberTo32).text() + "</button>");
        $('.result-number-palate').append("<button class='single-number selected' id='" + singleRandomNumberTo40 + "'>" + $("#" + singleRandomNumberTo40).text() + "</button>");

        $('.number-box.special').find('.single-number').each(function(){
            var specialInnerNumber = parseInt($(this).text());
            $(this).attr('id', '0' + specialInnerNumber);
            $('#0' + special_singleRandomNumber).addClass('selected special');
        });

        $('.result-number-palate').append("<button class='single-number selected special' id='" + '0' + special_singleRandomNumber + "'>" + $("#" + special_singleRandomNumber).text() + "</button>");
    }

    $('#clear-all-numbers').on('click', function(){
        clearAllNumbers();
    });

    // changing lottery items
    var single_lottery = $('.lotteries-selection-menu').find('ul').find('li');

    function logoChange(element) {
        var active_lottery_logo = $(element).find('.lottery-icon').find('img').attr('src');
        
        $('.selected-lottery-logo').find('img').attr('src', active_lottery_logo);
    }

    single_lottery.each(function(){
        $(this).find('.single-lottery-item').on('click', function(){

            if($(this).parent().siblings().find('.single-lottery-item').hasClass('active')) {
                $(this).parent().siblings().find('.single-lottery-item').removeClass('active');
                $(this).addClass('active');
            }
            
            logoChange($(this));

            var active_lottery_name = $(this).find('.lottery-name').text();
            $('.part-lottery-info').find('.lottery-name').text(active_lottery_name);
            clearAllNumbers();
            randomNumberGenerate();
        });
    });

    // animate__animated animate__fadeInDown

    $('#auto-select-btn').on('click', function(){
        clearAllNumbers();
        randomNumberGenerate();
    });
});