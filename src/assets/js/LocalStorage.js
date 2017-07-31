/**
 * desc: 本地存储模块
 * date: 2017-07-29
 **/

const LocalStorage = {
    set: function(key, value) {
        window.localStorage[key] = value;
    },
    get: function(key) {
        return window.localStorage[key] == undefined ? "" : window.localStorage[key];
    },
    setObject: function(key, value) {
        window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
        return JSON.parse(window.localStorage[key] || '{}');
    },
    remove: function(key) {
        window.localStorage.removeItem(key);
    }
};

export {
    LocalStorage
};
