const { executeQuery } = require("./config/dbPool");

async function setupDatabase() {
  const createUsersTableQuery = `
    IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Users')
    BEGIN
      CREATE TABLE Users(
        id INT PRIMARY KEY IDENTITY(1,1),
        first_name NVARCHAR(255) NOT NULL,
        last_name NVARCHAR(255) NOT NULL,
      )
    END
  `;
}
