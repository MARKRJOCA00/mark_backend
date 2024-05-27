const { executeQuery } = require("../../config/dbPool.js");

async function getUsers(req, res) {
  try {
    const users = await executeQuery("Select * from Users");
    res.json({ users: users, count: users.length });
  } catch (err) {
    console.error("Error fetching users: ", err);
    res.status(500).send("Error fetching users");
  }
}

async function createUser(req, res) {
  try {
    const { firstName, lastName, age, address, sex } = req.body;
    const query = `INSERT INTO Users (first_name, last_name, address, age, sex) OUTPUT INSERTED.* VALUES (@first_name, @last_name, @address, @age, @sex)`;
    const params = [
      { name: "first_name", type: sql.NVarChar, value: firstName },
      { name: "last_name", type: sql.NVarChar, value: lastName },
      { name: "age", type: sql.Int, value: age },
      { name: "address", type: sql.NVarChar, value: address },
      { name: "sex", type: sql.Int, value: sex },
    ];
    const newUser = await executeQuery(query, params);
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).send("Error creating user");
  }
}

module.exports = {
  getUsers,
};
