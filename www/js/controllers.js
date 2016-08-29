angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicSlideBoxDelegate) {
	
	  //下面轮播的来回切换
    $scope.index = 0;
    $scope.go = function (index) {
      $ionicSlideBoxDelegate.slide(index);
    }
     // 列表的按钮
    $scope.items = [{
    	img:"img/tubiao1.png",
    	name:"同城活动吧"
    },{
    	img:"img/tubiao2.png",
    	name:"大话生活"
    },{
    	img:"img/tubiao3.png",
    	name:"创意生活吧"
    },{
    	img:"img/tubiao4.png",
    	name:"学习部落"
    }]
    //详情的信息
    $scope.datas = [{
    	img:"img/tong1.png",
    	name:"同城活动吧",
      title:"那个地方真的是还好玩哦",
      titleimg:"img/img1.jpg",
      names:"少年",
      coum:"15"
    },{
    	img:"img/tong2.png",
    	name:"大话生活",
       title:"那个地方真的是还好玩哦",
      titleimg:"img/img2.jpg",
       names:"不一样的精彩",
      coum:"30"
    }]
})

.controller('ChatsCtrl', function($scope) {
  
    $scope.lists = [{
    	img:"img/ben.png",
    	name:"同城活动吧",
      introduction:"太好吃了，哈哈哈哈"
    },{
    	img:"img/ben.png",
    	name:"大话生活",
       introduction:"太好吃了，哈哈哈哈"
    },{
    	img:"img/ben.png",
    	name:"创意生活吧",
       introduction:"太好吃了，哈哈哈哈"
    },{
    	img:"img/ben.png",
    	name:"学习部落",
       introduction:"太好吃了，哈哈哈哈"
    },{
    	img:"img/ben.png",
    	name:"学习部落",
       introduction:"太好吃了，哈哈哈哈"
    }]
})

.controller('ChatDetailCtrl', function($scope, $stateParams,find) {
  $scope.list = find.get($stateParams.listID);
})

.controller('AccountCtrl', function($scope) {
   $scope.mys = [{
    	img:"img/ben.png",
    	name:"我的话题"
    },{
    	img:"img/ben.png",
    	name:"个性装扮"
    },{
    	img:"img/ben.png",
    	name:"我的设置"
    },{
    	img:"img/ben.png",
    	name:"个人资料"
    },{
    	img:"img/ben.png",
    	name:"关于我们"
    }]
  // $scope.settings = {
  //   enableFriends: true
  // };
});
