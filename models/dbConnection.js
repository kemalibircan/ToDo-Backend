const Pool = require('./dbConnector')

const dbConnection = async() => {
     try {
          await Pool.connect()
          console.log('Database Connection Successful')
     } catch (error) {
          console.log('DB Connecetion Lose')
     }
}
module.exports = dbConnection;