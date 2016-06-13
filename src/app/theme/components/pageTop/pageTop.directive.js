/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('pageTop', pageTop);
  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/pageTop/pageTop.html',
      link: function(scope,$window) {
        scope.abc = function($event) {
          switch ($event.target.textContent) {
            case 'Grey':
              $('.page-top').css("background-color", "gray");
              $('.al-sidebar').css("background-color","gray");
              break;
            case 'Brown':
              $('.page-top').css("background-color", "brown");
              $('.al-sidebar').css("background-color","brown");
              break;
            case 'Green':
              $('.page-top').css("background-color", "cadetblue");
              $('.al-sidebar').css("background-color","cadetblue");
              break;
            default:
         }
       }
            
window.addCart = function($scope, $http, $window, $document) {
    
    $scope.images = getData();
    $scope.count = getValue();
    $scope.images = getData();
    $scope.count = getValue();
    
    var getValue = function() {
        return $window.sessionStorage.length;
    }
      
    var getData = function(){
      var json = [];
      $.each($window.sessionStorage, function(i, v){
        json.push(angular.fromJson(v));
      });
      return json;
    }

    $scope.addItem = function(id){
        var image = document.getElementById('img'+id);
        json = {
          id: id,
          img: image.src
        }
        $window.sessionStorage.setItem(id, JSON.stringify(json));
        $scope.count = getValue();
        $scope.images = getData();
    }
 }
      }
    };
  }

})();