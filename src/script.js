var table = [15, 36, 18, 29, 23, 38, 12, 30, 11];
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", "100%")
  .attr("height", "100%");
svg
  .selectAll("rect")
  .data(table)
  .enter()
  .append("rect")
  .attr("width", "50")
  .attr("height", function (d, i) {
    return d * 7;
  })
  .attr("class", "barre")
  .attr("x", function (d, i) {
    return (i * 60 + 25);
  })
  .attr("y", (d) => 300 - d * 7);
svg
  .selectAll("text")
  .data(table)
  .enter()
  .append("text")
  .text(function (d) {
    return d * 7;
  })
  .attr("class", "text")
  .attr("x", function (d, i) {
    return (i * 60 + 40);
  })
  .attr("y", (d) => 300 - d * 7);
