var angularBrushup = angular.module('angularBrushup', [
        'ui.router',
        'ui.bootstrap',
        'ui.mask',
        "xeditable",
        "ngTable",
        'ngFileUpload',
        'ngTagsInput',
        'ui.select2'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('allrecords');
        $stateProvider
            .state('add', {
                url: '/add',
                templateUrl: 'views/add.html',
                controller: 'addCtrl',
                cache:false
            })
            .state('allrecords',{
            	url:'/allrecords',
            	templateUrl:'views/allRecord.html',
            	controller:'allRecordCtrl'
            })
    })
  .run(function($httpBackend, $log) {
   /* $httpBackend.whenPOST('api/upload').respond(function(method, url, data) {
      // data is a FormData
      // TODO
      // read the content
      // store to local storage
      return [200, 'uploaded/path'];
    });*/

  });
