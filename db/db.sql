CREATE DATABASE chatApp;
USE chatApp;

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY, 
    username VARCHAR(255) NOT NULL, 
    lastname VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Message (
    message_id INT AUTO_INCREMENT PRIMARY KEY, 
    post VARCHAR(255) NOT NULL, 
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Comment (
    comment_id INT AUTO_INCREMENT PRIMARY KEY, 
    comment VARCHAR(255) NOT NULL, 
    message_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (message_id) REFERENCES Message(message_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
