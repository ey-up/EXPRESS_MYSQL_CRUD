-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Anamakine: mysql
-- Üretim Zamanı: 04 Nis 2021, 12:32:46
-- Sunucu sürümü: 5.7.33
-- PHP Sürümü: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `db`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `Orders`
--

CREATE TABLE `Orders` (
  `orderId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `Order_Product`
--

CREATE TABLE `Order_Product` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `Products`
--

CREATE TABLE `Products` (
  `productId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `Product_Detail`
--

CREATE TABLE `Product_Detail` (
  `productDetailId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `detail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`orderId`);

--
-- Tablo için indeksler `Order_Product`
--
ALTER TABLE `Order_Product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `productId` (`productId`);

--
-- Tablo için indeksler `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`productId`);

--
-- Tablo için indeksler `Product_Detail`
--
ALTER TABLE `Product_Detail`
  ADD PRIMARY KEY (`productDetailId`),
  ADD KEY `productId` (`productId`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `Orders`
--
ALTER TABLE `Orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `Order_Product`
--
ALTER TABLE `Order_Product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `Products`
--
ALTER TABLE `Products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `Product_Detail`
--
ALTER TABLE `Product_Detail`
  MODIFY `productDetailId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Dökümü yapılmış tablolar için kısıtlamalar
--

--
-- Tablo kısıtlamaları `Order_Product`
--
ALTER TABLE `Order_Product`
  ADD CONSTRAINT `Order_Product_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `Orders` (`orderId`),
  ADD CONSTRAINT `Order_Product_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `Products` (`productId`);

--
-- Tablo kısıtlamaları `Product_Detail`
--
ALTER TABLE `Product_Detail`
  ADD CONSTRAINT `Product_Detail_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `Products` (`productId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
