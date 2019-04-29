alert("Loaded")

// Get request for data
$.get('localhost:3000/api/data', {data:"Give me data"}, function(data, status){
    return console.log(data)
})
