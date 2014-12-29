	// d3.select("#main").append("h3").text("New heading!");
  var body = d3.select('#main');

  body.append("h1").text("Circular Forms")
  .style("color","blue");

  body.append("p").text("Where are they? I was promised crazy cirles and also data.")
  .style("color", "purple");



  var svgTest = d3.select("#main")
                .append("svg")
                .attr("width",500)
                .attr("height",200);

  svgTest.append("line")
      .attr("x1", 10)
      .attr("y1", 10)
      .attr("x2", 190)
      .attr("y2", 190)
      .attr("stroke-width", 5)
      .attr("stroke", "steelblue");
  svgTest.append("line")
      .attr("x1", 190)
      .attr("y1", 190)
      .attr("x2", 300)
      .attr("y2", 60)
      .attr("stroke", "#bc141a")
      .attr("stroke-width", 2);
  svgTest.append("circle")
      .attr("cx", 250)
      .attr("cy", 50)
      .attr("r", 40)
      .attr("fill","Green");
  svgTest.append("circle")
        .attr("cx", 125)
        .attr("cy", 150)
        .attr("r", 50)
        .attr("fill","blue");
  svgTest.append("circle")
              .attr("cx", 375)
              .attr("cy", 150)
              .attr("r", 50)
              .attr("fill","blue");
