const { client } = require("../db/connect");
const seedTableData = async () => {
  await client.connect();
  const query = `INSERT INTO users (name) VALUES ('user1'), ('user2'), ('user3');
   INSERT INTO movies (title, is_favorite , year, runtime, genre, writer) 
   VALUES ('Spider man', FALSE, '08-02-2017', '140 min', 'Action', 'Steve Ditko'),
          ('Harry potter', TRUE, '08-02-2022', '80 min', 'Adventure', 'Super huveo');
   INSERT INTO user_movies (user_id, movie_id) VALUES (1,1), (1,2), (2,1), (3,1);
        `;
  client
    .query(query)
    .then((res) => {
      console.log(res);
      client.end();
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
};

client.on("remove", () => {
  console.log("client removed");
  process.exit(0);
});

module.exports = {
  seedTableData,
};

require("make-runnable");
