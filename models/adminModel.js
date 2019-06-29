const pool = require('./connection.js')

function adminModel() 
{
  this.fetchuser=()=>{
  	return new Promise((resolve,reject)=>{
  		pool.getConnection((err,con)=>{
  			let sqlQuery="select * from register where role='user'"
  			con.query(sqlQuery,(err,result)=>{
  				con.release()
  				err ? reject(err) : resolve(result);
  			})	
  		})		
  	})
  }
  
  this.manageuserstatus=(urlobj)=>{
  	return new Promise((resolve,reject)=>{
  		pool.getConnection((err,con)=>{
  			if(urlobj.s=='block')
  			{
  				var sqlQuery="update register set status=0 where regid=?"
  			}
  			else if(urlobj.s=='unblock')
  			{
  				var sqlQuery="update register set status=1 where regid=?"
  			}
  			else
  			{
  				var sqlQuery="delete from register  where regid=?"	
  			}		
  			var sqlData=[urlobj.regid]	
  			con.query(sqlQuery,sqlData,(err,result)=>{
  				con.release()
  				err ? reject(err) : resolve(result);
  			})	
  		})		
  	})
  }
  
}

module.exports = new adminModel() 
//exporting instance of a prototype

