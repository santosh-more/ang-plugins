angularBrushup.controller('allRecordCtrl', function($scope, $rootScope, $stateParams, $uibModal, NgTableParams, $log) {
        console.log("angularBrushup->allRecordCtrl");
        var scope = $scope;
        $scope.data = [{
            name: "santosh",
            email: "santosh@gmail.com",
            dob: "26-April-2017",
            contact: 9527217674,
            gender: 'Male',
            country: 'India',
            tags: [{ 'text': 'cricket' }, { 'text': 'Music' }],
            skills: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado"]
        }];
        $scope.tableParams = new NgTableParams({
            sorting: { name: "asc" },
            filter: { name: 'T' }
        }, { dataset: $scope.data });
        $scope.addRecordModal = function(size, parentSelector) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'views/add.html',
                controller: 'addCtrl',
                size: size,
                backdrop: true,
                keyboard: true,
                resolve: {
                    modalData: function() {
                        $scope.tableParams.reload();
                    }
                },
                closed: function(res) {
                    $scope.tableParams.reload();
                }
            })
            modalInstance.result
                .then(function(data) {
                    console.log(data);
                    data.dob = new Date(data.dob);
                    $scope.data.push(data);
                    $scope.tableParams.reload();
                    console.log($scope.data);
                }, function() {
                    $log.info('Modal dismissed at :', new Date());
                })
        }
        $scope.removeUser = function(index) {
            console.log(index);
            $scope.data.splice(index, 1);
            $scope.tableParams.reload();
        };
        $scope.dummyData = function() {
            console.log("HEYYYYYYYYYYY");
            $scope.data.push({
                name: "santosh",
                email: "santosh@gmail.com",
                dob: "26-April-2017",
                contact: 9527217674,
                gender: 'Male',
                country: 'India',
                tags: [{ 'text': 'cricket' }, { 'text': 'Music' }],
                skills: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado"]
            })
            $scope.tableParams.reload();
        }
        $scope.updateUser = function($data, $index) {
            console.log("Updated successfully", $scope.data, $data);
        }

    })
    /*    $scope.tableParams = new ngTableParams({
            page: 1, // show first page
            count: 10, // count per page
            filter: {
                name: 'M' // initial filter
            },
            sorting: {
                name: 'asc' // initial sorting
            }
        }, { dataset: $scope.data }, {
            total: $scope.data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter

                var sampoData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;

                sampoData = params.filter() ? $filter('filter')(sampoData, params.filter()) : sampoData;

                $scope.data = sampoData.slice((params.page() - 1) params.count(), params.page() params.count());

                params.total(orderedData.length);
                // set total for recalc pagination
                $defer.resolve($scope.data);
            }
        });
    */
