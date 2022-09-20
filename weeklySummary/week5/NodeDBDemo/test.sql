-- Deletes a table from our database
DROP TABLE IF EXISTS demo;

-- Create a table from scratch
CREATE TABLE demo(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

-- Create new row for the table
INSERT INTO demo(name)
VALUES ('Ben');

-- Grab info from the table
SELECT * FROM demo;

