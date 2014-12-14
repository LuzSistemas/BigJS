/**
 * Created by Pedro on 09/12/2014.
 */
window.BigJS.controller('MailInboxController', ['$scope', '$http', function ($scope, $http) {
    var inbox = {
        title: commonStrings.mail.inbox,
        icon: 'inbox',
        unreadCount: 2
    };

    $scope.mailbox = window.mailbox;
    $scope.mailbox.page =
    {
        current: 1,
        min: function () {
            var min = $scope.mailbox.pageSize * ($scope.mailbox.page.current - 1);
            return min;
        },
        max: function () {
            var max = $scope.mailbox.pageSize * $scope.mailbox.page.current;
            if (max > $scope.mailbox.mails.length){
                max = $scope.mailbox.mails.length;
            }
            return max;
        },
        mails: function () {
            return $scope.mailbox.mails.slice($scope.mailbox.page.min(), $scope.mailbox.page.max());
        },
        total: function () {
            return $scope.mailbox.mails().length();
        }
    }


    /*$scope.mailbox =
    {
        currentFolder: inbox,
        userTags:[
            {title: 'INCA'},
            {title: 'Pedro'}
        ],
        page: {
            min: 1,
            max: 15,
            total: 200,
            mails:[
                {
                    unread: true,
                    key: '123',
                    data: new Date(),
                    from: 'myself@google.com',
                    subject: 'Just a test...'
                }
            ]
        },
        userFolders:[
            {
                title: 'Teste Pasta 1',
                icon: 'eye',
                unreadCount: 10,
            }
        ],
        systemFolders:[
            inbox,
            {
                title: commonStrings.mail.folders.starred,
                icon: 'star',
                unreadCount: 1
            },
            {
                title: commonStrings.mail.folders.sent,
                icon: 'send',
                unreadCount: 0
            },
            {
                title: commonStrings.mail.folders.drafts,
                icon: 'pencil',
                unreadCount: 0
            },
            {
                title: commonStrings.mail.folders.trash,
                icon: 'trash',
                unreadCount: 0
            }
        ]
    };*/

    $scope.moveToFolder = function (folder)
    {
        debugger;
    };

    $scope.openFolder = function (folder)
    {
        debugger;
    };

    $scope.reportSpam = function ()
    {
        debugger;
    };

    $scope.archive = function ()
    {
        debugger;
    };

    $scope.trash = function ()
    {
        debugger;
    };

    $scope.nextPage = function ()
    {
        debugger;
    };

    $scope.previousPage = function ()
    {
        debugger;
    };

    $scope.tag = function (tag)
    {
        debugger;
    };

    $scope.star = function (mail)
    {
        debugger;
    };
}]);