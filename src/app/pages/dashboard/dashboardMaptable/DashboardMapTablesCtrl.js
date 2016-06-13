/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardMapTablesCtrl', DashboardMapTablesCtrl);

  /** @ngInject */
  function DashboardMapTablesCtrl($scope,baConfig) {
   var layoutColors = baConfig.colors;
    $scope.metricsTableData = [
      { image: 'app/browsers/europe.png',
        browser: 'Austria',
        users: '10,392',
        percent: '45%',
        isPercentUp: true,
        color: layoutColors.successLight
      },
      { image: 'app/browsers/europe.png',
        browser: 'Ireland',
        users: '7,873',       
        percent: '28%',
        isPercentUp: true,
       color: layoutColors.danger
      },
      { image: 'app/browsers/europe.png',
        browser: 'Denmark',
        users: '5,890',
        percent: '17%',
        isPercentUp: false,
       color: layoutColors.primary
      },
      { image: 'app/browsers/europe.png',
        browser: 'Finland',
        users: '4,001',
        percent: '14%',
        isPercentUp: true,
       color: layoutColors.primary
      },
      { image: 'app/browsers/europe.png',
        browser: 'Sweden',
        users: '1,833',
        percent: '5%',
        isPercentUp: false,
       color: layoutColors.successLight
      },
      { image: 'app/browsers/europe.png',
        browser: 'Great Britain',
        users: '4,001',   
        percent: '14%',
        isPercentUp: true,
       color: layoutColors.primary
      },
      { image: 'app/browsers/europe.png',
        browser: 'Spain',
        users: '4,001',
        percent: '14%',
        isPercentUp: true,
       color: layoutColors.successLight
      },
      {
        image: 'app/browsers/europe.png',
        browser: 'Poland',
        users: '4,001',
        percent: '14%',
        isPercentUp: true,
          color: layoutColors.danger
      }
    ];
  }

})();
