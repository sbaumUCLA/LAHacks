angular.module('app', [])
  .controller('mycontroller', function($scope, $http) {
      // Function to be called when pressing ENTER
      $scope.gifs = [];

      $scope.myFunc = function() {

        //$http.post("colourloversscrape.php", {
        //    // Values you with to send to php page
        //    "mood": $scope.mood
        //}).success(function(data, status) {
        //    $.getScript("colors.js", function(){
        //    colors = getColors(data);]
        //    });
        //}).error(function(data, status) {
        //    $scope.data = data || "Request failed";
        //    $scope.status = status; 
        //});

        $http.post("giphyscrape.php", {
            // Values you with to send to php page
            "mood": $scope.mood
        }).success(function(data, status) {
            //console.log(data);
            $.getScript("gifs.js", function() { 
              gif_urls = getGifs(data);
              console.log(gif_urls);

              $.each(gif_urls, function(i, link) {
                $scope.gifs.push({
                  url: link});
                console.log($scope.gifs);
              });
            });


        }).error(function(data, status) {
            $scope.data = data || "Request failed";
            $scope.status = status; 
        });

      }
  });
