angular.module('starter.controllers', [])

.controller('Tab1Ctrl', function($state,$scope,$rootScope,Tab1Service,$ionicTabsDelegate,$ionicSlideBoxDelegate,$ionicScrollDelegate) {
  



$scope.goDetails = function(item){

  $state.go('tab.tab1-details',{id:item.id,title:item.title});
}






// var  page=1;
// var isLock=false;
// var hasmore=false;


// $scope.items = [];

// $scope.loadMore = function(){
    
//   if(isLock){

//     return;
//   }
//   isLock = true;
  
//   page++;
//   // console.log(isLock);

//   Tab1Service.getList(classify[0].url+"?page="+page)
//   .success(function(data){
//     // console.log(page);
//     // console.log(classify[0].url);
//     // 
//     // console.log(data.data.length);
//      // console.log(data);
//     if (data.data.length==0) {
//       $scope.hasmore = true;
//       // return;
//     }

   

//   // console.log($scope.hasmore);
//    // console.log(page); 
//     $scope.items = $scope.items.concat(data.data);


//   }).finally(function(error){
     
//     isLock = false;

//     $scope.$broadcast('scroll.infiniteScrollComplete');
//     $scope.$broadcast('scroll.refreshComplete');



//   });



// };





  $rootScope.imgUrl = imgUrl;
  // var classify = Tab1Service.getClassify();
  // $scope.slides = classify;
  // $scope.tabs = classify;

  // console.log(classify);

  // var slideIndex = 0;


var classify = Tab1Service.getClassify()
$scope.slides = classify;
$scope.tabs = classify;












var getData = function (index) {
    var c = classify[index];
    // 安卓平台不会自动触发加载
    // 
    

    if (ionic.Platform.isAndroid()) {
        c.doRefresh();


    }  

    if (index!=0) {
      c.doRefresh();
    }


    // ;

    // 初始化数据，和回调函数 
    c.isload = false;
    c.callback = function () {

        // c.isLock = false;
        
        $scope.$broadcast('scroll.infiniteScrollComplete');
        $scope.$broadcast('scroll.refreshComplete');
    }
}





getData(0);








// $scope.doRefresh = function(){
//   page = 1;
//   $scope.slides.items =[];
//   $scope.loadMore();
// console.log('sasasaassa');

//   // .doRefresh(index);
// }




// var getData = function(index){

//      var c = classify[index];


//      console.log(c);

//      if(ionic.Platform.isAndroid()){
//       c.doRefresh();
//      }
//      c.isload = false;

//      c.callback = function(){
//     $scope.$broadcast('scroll.infiniteScrollComplete');
//     $scope.$broadcast('scroll.refreshComplete');
//      }
// }

// getData(0);





  // Tab1Service.getList(classify[0].url)
  // .then(function(response){


  //     // console.log(response.data.data);

  //   if(response.status==200){
  //     $scope.items = response.data.data;
  //     // console.log(response.data);
  //   }

  // },function(error){
  //  console.log(error);
  // });





  $scope.slideChanged = function(index){

  
    
   getData(index);

    // console.log(dat);


    $ionicTabsDelegate._instances[1].select(index);


     $ionicScrollDelegate.scrollTop();
  };

  $scope.$on('$ionicView.afterEnter',function(){
    $ionicTabsDelegate._instances[1].select($ionicSlideBoxDelegate.currentIndex());
  });
   
   $scope.selectedTab =function(index){

   $ionicSlideBoxDelegate.slide(index);
   }

})
.controller('Tab1DetailsCtrl', function($scope,$stateParams,Tab1Service) {


var id = $stateParams.id;

$scope.title = $stateParams.title;


Tab1Service.getDetails(id)
.success(function(response){
$scope.item = response;
})
 


})
.controller('Tab2Ctrl', function($scope) {})
.controller('Tab3Ctrl', function($scope) {})
.controller('Tab4Ctrl', function($scope) {})



.controller('AccountCtrl', function($scope) {
 
});
