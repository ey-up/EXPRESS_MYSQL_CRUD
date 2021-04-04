
# Installation

git clone https://github.com/ey-up/EXPRESS_MYSQL_CRUD.git

npm install

docker compose up

node app.js

# Usage

http://localhost:30002/  --> phpMyAdmin

user: root

password: root

# EndPoints

Endpoint'lerin detaylı kullanımı için other klasöründe postman export'a bakabilirsiniz.

http://localhost:3000/products  (GET) : Tüm ürünleri getirir.

http://localhost:3000/order/2 (GET) : Sipariş id'yle ürün getirir.

http://localhost:3000/product/detail/6  (GET) : Ürün id'yle ürün detaylarını getirir.

http://localhost:3000/order (POST) : Sipariş ekler.

http://localhost:3000/product/ (POST) : Ürün ekler.

http://localhost:3000/product (PUT) : Ürün günceller

http://localhost:3000/product/1 (DELETE): Ürün siler


Not: 

Açılışta hiç veri olmadğından sipariş ekleyebilmek için önce ürün eklemek gerekiyor.

Other klasöründe database şeması, database export'u ve postman export'u bulunuyor.
