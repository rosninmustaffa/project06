CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

INSERT INTO 
  users (username, password) 
VALUES ('validUser1', 'validPassword1'),
       ('validUser2', 'validPassword2');