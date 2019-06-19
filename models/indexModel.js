const pool = require('./connection.js')

function indexModel() 
{
  this.registerUser=(userDetails)=>{
  	console.log(userDetails)
  }	
}

module.exports = new indexModel() 
//exporting instance of a prototype
