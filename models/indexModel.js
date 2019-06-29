const pool = require('./connection.js')

function indexModel() {
  this.registerUser = (userDetails) => {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        if(err) {
          console.log(err)   
          return }
        let sqlQuery = "insert into register values(NULL,?,?,?,?,?,?,?,0,'user')"
        let sqlData = [userDetails.name, userDetails.email,
        userDetails.password, userDetails.mobile,
        userDetails.address, userDetails.city,
        userDetails.gender]
        con.query(sqlQuery, sqlData, (err, result) => {
          con.release()
          err ? reject(err) : resolve(result);
        })
      })
    })
  }

  this.userLogin = (userDetails) => {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        let sqlQuery =
          "select * from register where email=? and password=? and status=1"
        let sqlData = [userDetails.email, userDetails.password]
        con.query(sqlQuery, sqlData, (err, result) => {
          con.release()
          err ? reject(err) : resolve(result);
        })
      })
    })
  }

}

module.exports = new indexModel()
//exporting instance of a prototype