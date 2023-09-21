url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

let dropdownMenu = d3.select("#selDataset");



function init() {
    d3.json(url).then(function(data) {
        console.log(data)
    
        data.names
    
        console.log(data.names)
    
        let array = data.names
    
        array.forEach(name => {
            dropdownMenu.append("option").text(name).attr("value", name)
        });
    
    })
}

d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {

    let dropdownMenu = d3.select("#selDataset");

    let datatset = dropdownMenu.property("value")

    
}