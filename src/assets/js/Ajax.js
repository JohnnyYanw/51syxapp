/**
 * desc: 数据请求模块
 * date: 2016-09-02
 * author: maicon
 **/

import $ from 'jquery';
import {LocalStorage} from './LocalStorage';

const Ajax = function(url, data, beforeSend, success, error, complete) {
    $.ajax({
        type: 'post',
        url: url,
        timeout: 5000,
        dataType: 'json',
        beforeSend: function() {
            beforeSend();
        },
        success: function(d) {
            success(d);
        },
        error: function(d) {
            error(d);
        },
        complete: function(d) {
            complete(d);
        }
    })
};

export {
    Ajax
};