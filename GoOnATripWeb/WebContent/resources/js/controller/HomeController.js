'use strict';

App.controller('HomeController', ['$scope', function($scope) {
          var self = this;
//          self.categories=async;
          
}]);
function HomeController($scope) {
    var vm = this;
    
    
    vm.contentStyle = {'background':'#2E618C'};
    vm.displayName = 'Fanciest Schedule Picker';
    
    vm.opened = {start: false, end: false};
    
    vm.open = function ($event, scheduleName) {
      $event.preventDefault();
      $event.stopPropagation();
      // closes any other windows
      for (var x in vm.opened) {
        if (!(x === scheduleName)) vm.opened[x] = false;
      }

      // closes or opens datepicker, depending on it's current state
      vm.opened[scheduleName] = !vm.opened[scheduleName];
    };
    
    vm.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };
    
    vm.pickDate = function() {
      alert("date")
      vm.time.setHours(12);
      vm.time.setMinutes(0);
    }
    
    vm.pickTime = function() {
      alert("time")
      vm.date.setHours(vm.time.getHours());
      vm.date.setMinutes(vm.time.getMinutes());
    }

  }