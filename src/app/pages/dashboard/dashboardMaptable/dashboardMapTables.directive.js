(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardMapTables', dashboardMapTables);

  /** @ngInject */
  function dashboardMapTables() {
    return {
      restrict: 'E',
      controller: 'DashboardMapTablesCtrl',
      templateUrl: 'app/pages/dashboard/dashboardMaptable/dashboardMapTables.html'
    };
  }
})();