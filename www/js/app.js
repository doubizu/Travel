
angular.module('Travel', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.homepage', {
    url: '/homepage',
    views: {
      'tab-homepage': {
        templateUrl: 'templates/tab-homepage.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.find', {
      url: '/find',
      views: {
        'tab-find': {
          templateUrl: 'templates/tab-find.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.find-detail', {
      url: '/find/:listId',
      views: {
        'tab-find': {
          templateUrl: 'templates/find-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.my', {
    url: '/my',
    views: {
      'tab-my': {
        templateUrl: 'templates/tab-my.html',
        controller: 'AccountCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/homepage');

});
