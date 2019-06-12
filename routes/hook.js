'use strict';

var router = require('express').Router();
var handler = require('../public/js/handler');

/**
 * 触发同步的钩子程序
 */
router.post('/sync', function (req, res, next) {
    console.log('即将执行自动编译同步程序');

    setTimeout(function () {
        handler();
    }, 10000);

    res.status(200).json({
        message: 'success'
    });
});

module.exports = router;
