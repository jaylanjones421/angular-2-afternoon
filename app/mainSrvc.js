angular.module("devmtnTravel").service("mainSrvc", function($http) {
  this.getTravelInfo = () =>
    $http({
      method: "GET",
      url: "https://practiceapi.devmountain.com/api/travel/travel-info"
    });
  this.getPackageInfo = () =>
    $http({
      method: "GET",
      url: "https://practiceapi.devmountain.com/api/travel/package-info"
    });
});
