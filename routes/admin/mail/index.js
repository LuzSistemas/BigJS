/**
 * Created by Pedro on 03/12/2014.
 */
/* GET home page. */
var util = require('util');
var fs = require('fs');
var uuid = require('node-uuid');

var mailIndexController = {
    get: {
        necessaryPermissions: [{
            key: 'viewMail',
            title: commonStrings.viewMail,
            description: "Permissão para visualizar e-mails no sistema."
        }],
        action: function(req, res) {
            res.send('indo...');
        }
    }
};

module.exports = {
    controller: mailIndexController,
    menuItem: {
        title: commonStrings.mailBox,
        icon: "fa-envelope"
    },
    page: {
        title: commonStrings.mailBox,
        header: {
            title: commonStrings.mailBox,
            description: 'Bem-vindo aos seus e-mails.',
            icon: 'fa-envelope'
        }
    }
};