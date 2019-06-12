'use strict';

var pathFn = require('path');
var Promise = require('bluebird');
var fs = require('./fs');
var spawn = require('./spawn');
var parseConfig = require('./parse_config');

function gitDeploy(args) {
    if (!args.base_dir) throw new TypeError('base_dir is required!');
    if (!args.repo && !args.repository) throw new TypeError('repo or repository is required!');

    var baseDir = args.base_dir;
    var deployDir = pathFn.join(baseDir, '.deploy_git');
    var publicDir = args.public_dir || pathFn.join(baseDir, 'public');
    var extendDirs = args.extend_dirs;
    var ignoreHidden = args.ignore_hidden;
    var ignorePattern = args.ignore_pattern;
    var message = commitMessage(args);
    var verbose = !args.verbose;

    function git() {
        var len = arguments.length;
        var args = new Array(len);

        for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
        }

        return spawn('git', args, {
            cwd: deployDir,
            verbose: verbose,
            stdio: 'inherit'
        });
    }

    function setup() {
        var userName = args.name || args.user || args.userName || '';
        var userEmail = args.email || args.userEmail || '';

        return userName && git('config', '--global', 'user.name', userName).then(function () {
            return userEmail && git('config', '--global', 'user.email', userEmail);
        });
    }

    function push(repo) {
        return git('remote', 'set-url', '–-push', 'origin', repo.repository).then(function () {
            return git('push', '–-mirror');
        });
    }

    return new Promise(function (resolve, reject) {
        try {
            setup().then(function () {
                return parseConfig(args);
            }).each(function (repo) {
                return push(repo);
            }).then(function () {
                resolve();
            });
        } catch (e) {
            reject(e);
        }
    });
}

function commitMessage(args) {
    var message = args.m || args.msg || args.message || 'Site updated: ' + new Date().toString();
    return message;
}

module.exports = gitDeploy;
