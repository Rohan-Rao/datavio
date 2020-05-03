CREATE TABLE register(
    id INT(11) AUTO_INCREMENT,
    email_id VARCHAR(30) NOT NULL UNIQUE,
    user_password BLOB NOT NULL,
    registered_with ENUM('DATAVIO', 'GOOGLE', 'FACEBOOK') NOT NULL,
    is_email_verified BOOLEAN DEFAULT 0,
    is_logged_in BOOLEAN DEFAULT 0,
    last_logged_in DATETIME,
    PRIMARY KEY (id)
);