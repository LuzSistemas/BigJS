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
            title: commonStrings.mail.view,
            description: "Permissão para visualizar e-mails no sistema."
        }],
        action: function(req, res) {
            debugger;
            models.system.Mailbox.findOne({userId: req.user._id}, function(err, mailbox)
            {
                if (!err && mailbox)
                {
                    models.system.Mail.find({}, function(err, mails){
                        _.forEach(mails, function (m){
                            luzUtil.processEmail(m);
                        });

                        res.render('\\mail\\index', {
                            mailbox: mailbox
                        });
                    });
                }
                else{
                    res.send('error');
                }
            });
        }
    }
};

module.exports = {
    controller: mailIndexController,
    menuItem: {
        title: commonStrings.mail.inbox,
        icon: "fa-envelope"
    },
    page: {
        title: commonStrings.mailBox,
        header: {
            title: commonStrings.mail.inbox,
            description: 'Bem-vindo aos seus e-mails.',
            icon: 'fa-envelope'
        }
    }
};