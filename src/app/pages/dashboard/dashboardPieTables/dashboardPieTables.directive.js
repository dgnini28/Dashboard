(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardPieTables', dashboardPieTables);

  /** @ngInject */
  function dashboardPieTables() {
    return {
      restrict: 'E',
      controller: 'DashboardPieTablesCtrl',
      templateUrl: 'app/pages/dashboard/dashboardPieTables/dashboardPieTables.html'
    };
  }
})();