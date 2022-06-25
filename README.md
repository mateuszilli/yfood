# yfood


curl --request POST \
  --url http://localhost:3001/item \
  --header 'Content-Type: application/json' \
  --data '{
	"description": "Item",
	"price": 21.50
}'

curl --request GET \
  --url http://localhost:3001/item

curl --request PUT \
  --url http://localhost:3001/item/1 \
  --header 'Content-Type: application/json' \
  --data '{
	"description": "Item"
}'

curl --request DELETE \
  --url http://localhost:3001/item/2

curl --request POST \
  --url http://localhost:3001/order \
  --header 'Content-Type: application/json' \
  --data '{
	"note": "Order",
	"itemsId": [1]
}'

curl --request GET \
  --url http://localhost:3001/order