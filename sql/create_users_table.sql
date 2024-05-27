IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Users')
BEGIN
  CREATE TABLE Users(
    id INT PRIMARY KEY IDENTITY(1,1),
    first_name NVARCHAR(255) NOT NULL,
    last_name NVARCHAR(255) NOT NULL,
    address NVARCHAR(255),
    age INT NOT NULL,
    sex INT NOT NULL
  );

  INSERT INTO Users(first_name, last_name, address, age, sex)
  SELECT 'Mark', 'Oca', 'antipolo', 20, 1
  UNION ALL
  SELECT 'Yanyan', 'yan', 'padilla', 23, 1
  UNION ALL
  SELECT 'Dandan', 'dan', 'antipolo bayan', 25, 1
  UNION ALL
  SELECT 'Sef', 'm', 'gate2', 28, 1
END;