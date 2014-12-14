/**
 * Created by Pedro on 27/11/2014.
 */
var azure = require('azure-storage');
var strings = require("../../commonStrings");
var luzUtil = require("../../LuzUtil");
var config = require("../../config");
var guid = require("easy-guid");
var mailIncomingController = {
    post: {
        api: true,
        auth: luzUtil.allowAnonymous,
        action: function(req, res)
        {
            try
            {
                var blobService = azure.createBlobService(config.mail.azureStorageAccount, config.mail.azureStorageKey);
                blobService.createContainerIfNotExists('mails', function(error, result, response) {
                    var key =  guid.new(16) + ".json";
                    blobService.createBlockBlobFromText('mails', key, JSON.stringify(req.body), function(e, resu, resp) {
                        if (!e){
                            luzUtil.handleIncomingSendGridMail(key, req);
                            res.status(200);
                            res.send("OK");
                        }
                        else
                        {
                            res.status(500);
                            res.send(e);
                        }
                    });
                });
            }
            catch (ex)
            {
                res.status(500);
                res.send(ex);
            }
        }
    }
};

module.exports = {
    controller: mailIncomingController
};