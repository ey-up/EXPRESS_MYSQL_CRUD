CREATE DATABASE IF NOT EXISTS `db`;
CREATE TABLE Products (
    productId int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (productId)
    );

-- GRANT ALL ON `sss`.* TO 'user'@'%';

CREATE TABLE Orders (
    orderId int NOT NULL AUTO_INCREMENT,
    userId int NOT NULL,
    -- userName VARCHAR(50) NOT NULL,
    -- userSurname VARCHAR(50) NOT NULL,
    PRIMARY KEY (orderId)
    );


CREATE TABLE  Order_Product (
    id int NOT NULL AUTO_INCREMENT,
    orderId int NOT NULL,
    productId int NOT NULL,
    PRIMARY KEY (id),
	FOREIGN KEY (orderId) REFERENCES Orders(orderId),
    FOREIGN KEY (productId) REFERENCES Products(productId)
);

CREATE TABLE Product_Detail (
    productDetailId int NOT NULL AUTO_INCREMENT,
    productId int NOT NULL,
    detail VARCHAR(255) NOT NULL,
    FOREIGN KEY (productId) REFERENCES Products(productId),
    PRIMARY KEY (productDetailId)
    );



-- INSERT INTO `Products` (`productId`, `name`) VALUES 
-- (NULL, 'Telefon'),
-- (NULL, 'Bilgisayar'),
-- (NULL, 'Elbise');


-- INSERT INTO `Product_Detail` (`productDetailId`, `productId`, `detail`) VALUES 
-- (NULL, '1', 'detal11'),
-- (NULL, '1', 'detal12'),
-- (NULL, '2', 'detal21'),
-- (NULL, '2', 'detal22'),
-- (NULL, '3', 'detal31'),
-- (NULL, '3', 'detal32');
