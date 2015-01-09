'use strict';

angular.module('myApp.map', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/map', {
    templateUrl: 'map/map.html',
    controller: 'MapController'
  });
}])




.controller('MapController',['$scope', function($scope) {

  var circle = {};
  var circleDble ={};

  $scope.circleDble = function (){
    d3.select('#circleMain').selectAll('*').remove();
  };

  $scope.circle = function () {









// start scale and transition example



      var w = 500;
      var h = 300;
      var padding = 40;
      var dataset = [
              {
                x: 5,
                y: 20,
                r: 10,
                color:"red"
              },
              {
                x: 480,
                y: 90,
                r: 20,
                color:"blue"
              },
              {
                x: 250,
                y: 50,
                r: 15,
                color:"yellow"
              },
              {
                x: 100,
                y: 33,
                r: 7,
                color:"steelblue"
              },
              {
                x: 330,
                y: 95,
                r: 18,
                color:"green"
              },
              {
                x: 410,
                y: 12,
                r: 19,
                color:"purple"
              },
              {
                x: 475,
                y: 44,
                r: 25,
                color:"orange"
              },
              {
                x: 25,
                y: 67,
                r: 12,
                color:"brown"
              },
              {
                x: 85,
                y: 21,
                r: 5,
                color:"pink"
              },
              {
                x: 220,
                y: 88,
                r: 3,
                color:"turquoise"
              }
              ];

        var xScale = d3.scale.linear()
                   .domain([0, d3.max(dataset, function(d) { return d.x; })])
                   .range([padding, w - padding]);

        var yScale = d3.scale.linear()
                   .domain([0, d3.max(dataset, function(d) { return d.y; })])
                   .range([h - padding, padding]);

        var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom")
                    .ticks(5);

        var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .ticks(5);


        //Create SVG element
        d3.select('#circleMain').selectAll('*').remove();
        var svg = d3.select("#circleMain")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

            svg.append("g")
           .attr("id","circles")
           .selectAll("circle")
           .data(dataset)
           .enter()
           .append("circle")
           .attr("cx", w / 2)
           .attr("cy", h / 2)
           .attr("r", 1)
           .attr("fill", function(d){
             //return d.color;
             if (xScale(d.x) < w /2) {
               return "blue";
             }else {
               return d.color;
             }
           })
           .transition()
           .duration(5000)
           .attr("cx", function(d) {
            return xScale(d.x);
           })
           .attr("r", function(d) {
             return d.r;
           })
           .attr("cy", function(d) {
             return yScale(d.y);
           })
           .attr("fill", function(d){
               if (xScale(d.x) < w /2) {
                 return "blue";
               }else {
                 return d.color;
               }

           });

           svg.append("g")
                .transition()
                .duration(500)
                .attr("class", "x axis")
                .attr("transform", "translate(0," + (h - padding + 5) + ")")
                .call(xAxis);

          svg.append("g")
                .transition()
                .duration(500)
                .attr("class", "y axis")
                .attr("transform", "translate(" + (padding - 5) + ",0)")
                .call(yAxis);

      };

}]);
