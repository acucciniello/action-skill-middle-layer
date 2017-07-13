// read the intentSchema.json
// for each slot type create a new file under entities

var jsonfile = require('jsonfile')
var path = 'intentSchema.json'
var outputFile = ''
jsonfile.readFile(path, function(err, obj) {
  // for each one, create a new file under intents with that name
  for (var i = 0; i < obj.intents.length; i++ ) {
    console.log(obj.intents[i])
    var newJSON = {
      "name": obj.intents[i].intent
    }
    outputFile = obj.intents[i].intent.toString() + '.json'
    jsonfile.writeFile(outputFile, newJSON, function (err) {
      if (err) {
        console.log(err)
      }
    })
  }
})
