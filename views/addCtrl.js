angularBrushup.controller('addCtrl', function($scope, $uibModalInstance, $rootScope, Upload) {
    console.log("angularBrushup->addCtrl");
    $scope.user = {};
    $scope.data = [];
    $scope.selectedCountry = [];
    $scope.country_list = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];
    $scope.popup = {
        opened: false
    };
    $scope.open = function() {
        $scope.popup.opened = true;
    }
    $scope.saveUser = function() {
        console.log($scope.user);
        $uibModalInstance.close($scope.user);
    }
    $scope.dynamicPopover = {
        content: 'Hello, World!',
        templateUrl: 'myPopoverTemplate.html',
        title: 'Title'
    };

    $scope.upload = function(file) {
        var form = document.getElementById('form');
        var formData = new FormData(form);
        console.log(formData, file);
        /* Upload.upload({
             url: '/upload',
             data: { file: file, 'user': $scope.user }
         }).then(function(resp) {
             console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
         }, function(resp) {
             console.log('Error status: ' + resp.status);
         }, function(evt) {
             var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
             console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
         });*/
    };
    $scope.stringModel = [];
    $scope.stringData = ['David', 'Jhon', 'Danny', ];
    $scope.stringSettings = {
        template: '{{option}}',
        smartButtonTextConverter(skip, option) {
            return option;
        },
    };
})
