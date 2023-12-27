const {MongoClient} = require("mongodb");
const Db = process.env.ATLAS_URI;
const certPath = process.env.CERT_PATH;
const client = new MongoClient(Db,
    {ssl: true, tlsCertificateKeyFile: certPath});

var _db;

module.exports = {
  connectToServer: function () {
    client.connect()
    .then(db => {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("employees");
        console.log("Successfully connected to MongoDB.")
      }
    })
    .catch(err => {
      console.error(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
