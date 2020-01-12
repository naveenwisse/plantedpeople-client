angular.module('controller.dialog.rate-business', [])
.controller('DialogRateBusinessController', function(
    $scope,
    $rootScope,
    $timeout,
    $log,
    $mdDialog,
    userService,
    toastService,
    businessId,
    resourceId
) {

    $scope.submit = function(form) {
        if (form.$valid) {
            $mdDialog.cancel();
            var data = {
                rating_money: $scope.reviewBusinessFormData.rating_money,
                rating_prof: $scope.reviewBusinessFormData.rating_prof,
                rating_over: $scope.reviewBusinessFormData.rating_over,
                review: $scope.reviewBusinessFormData.review,
                notes: $scope.reviewBusinessFormData.notes,
                resourceId: resourceId,
            };
            userService.addRating2Business(data).then(
                function(res) {
//                    $rootScope.$emit('business.reload-profile');
                    $rootScope.$emit('profile.get-feed');
                    toastService.showToast(res.data.message, "success", 2000);
                }
            );
        }
    };

    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };
});
