angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.service("Tab1Service",function($http){


   this.getDetails = function(id){

     return $http.get(urls.show + id);
   }






  this.getClassify = function()
  {

   

   return [
        {
          name: '国际新闻',
          isload: true, 
          url: domain + 'other/list',
          page: 1,
          items: [],
          // isLock : false,
          loadMore: function () {
            $this = this;
            console.log(this.url);
            console.log("正在加载更多数据..." + this.page);



            $http.get(this.url + "?page=" + this.page )
            .success(function (response) {


          if (response.data.length==0) {
             $this.isload = true;
              return;
             }
             $this.page++;

              // this.items = $this.items.concat(response.data);

            $this.items = $this.items.concat(response.data);


              $this.callback();       


            });


          },
          doRefresh: function () {
            $this = this;
            console.log("正在执行refresh操作...");
            $http.get($this.url).success(function (response) {
              $this.page = 2;
              console.log(response);
              $this.items = response.data;
              $this.callback();
            });
          },
          callback: function () {
            //回掉函数
            // console.log('claback');
            // console.log(this.items);
          }
        },
        {
          name: '国内新闻',
          isload: true, 
          url: domain + 'info/list',
          page: 1,
          items: [],
          loadMore: function () {
            $this = this;
            console.log("正在加载更多数据..." + this.page);
            console.log(this.url);
            $http.get(this.url + "?page=" + this.page )
            .success(function (response) {
             console.log(response);

          if (response.data.length===0) {
             $this.isload = true;
              return;
             }
             $this.page++;

              // this.items = $this.items.concat(response.data);
               
            $this.items = $this.items.concat(response.data);


              $this.callback();


            });


          },
          doRefresh: function () {
            $this = this;
            console.log("正在执行refresh操作...");
            $http.get($this.url).success(function (response) {
              $this.page = 2;
              console.log(response);
              $this.items = $this.items.concat(response.data);
              $this.callback();
            });
          },
          callback: function () {
            //回掉函数
            // console.log('claback');
            // console.log(this.items);
          }
        },
      ]

    // viewable: true, url: domain + '/info/list', page: 1, rows: 20
 //   return [

 //   {
 //    name:"国际新闻",
 //    isload:true,
 //    items:[],
 //    loadMore:function(){

 //      $this = this;
 //      console.log('正在加载数据...'+this.page);
 //      $http.get(this.url+'?page='+this.page)
 //      .success(function(response){
 //        this.items = this.items.concat(data.data);
 //        this.page++;
 //        this.callback();
 //      });


 //    },
 //    doRefresh:function(){

 //    },
 //    callback:function(){

 //    },
 //   viewable:true,
 //   url:domain + 'other/list',
 //   page:1,
 //   rows:20
 // },
   
 //   {
 //    name:"国际新闻",
 //    isload:true,
 //    items:[],
 //    loadMore:function(){

 //      $this = this;
 //      console.log('正在加载数据...'+this.page);
 //      $http.get(this.url+'?page='+this.page)
 //      .success(function(response){
 //        this.items = this.items.concat(data.data);
 //        this.page++;
 //        this.callback();
 //      });


 //    },
 //    doRefresh:function(){

 //    },
 //    callback:function(){

 //    },
 //   viewable:true,
 //   url:domain + 'other/list',
 //   page:1,
 //   rows:20
 // },

 // {
 //    name:"国际新闻",
 //    isload:true,
 //    items:[],
 //    loadMore:function(){

 //      $this = this;
 //      console.log('正在加载数据...'+this.page);
 //      $http.get(this.url+'?page='+this.page)
 //      .success(function(response){
 //        $this.items = $this.items.concat(data.data);
 //        $this.page++;
 //        $this.callback();
 //      });


 //    },
 //    doRefresh:function(){

 //    },
 //    callback:function(){

 //    },
 //   viewable:true,
 //   url:domain + 'other/list',
 //   page:1,
 //   rows:20
 // },


 //   ]
  }


  this.getList = function(url){

    return $http.get(url);

  }




});
