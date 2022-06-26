# yfood

Project built with the main objective of studies and technical task for a vacancy of software engineer.


## Dependencies

* [Docker](https://docs.docker.com/desktop/)
* [NodeJS](https://nodejs.org)
* [Yarn](https://yarnpkg.com/getting-started/install)
* [PostgreSQL](https://www.postgresql.org/download)

## How to run

Before, you need to create the ´.env´ file in the project root (use ´.env.example´ as base) and replace with the data from your environment.

If you choose to install all dependencies in your environment, you need to fill only the 'API_PORT' and 'DATABASE_URL' variables of the ´.env´.
And run:
```bash
yarn
yarn start
```

If you choose to use docker, you need to fill all variables of the ´.env´.
And run:
```bash
docker-compose up -d
```

## API resources

### Item

#### Create

```bash
curl --request POST \
  --url http://localhost:3001/item \
  --header 'Content-Type: application/json' \
  --data '{ "description": "Item", "price": 21.50 }'
```

#### Read

```bash
curl --request GET \
  --url http://localhost:3001/item
```

#### Update

```bash
curl --request PUT \
  --url http://localhost:3001/item/1 \
  --header 'Content-Type: application/json' \
  --data '{ "description": "Item", "price": 22.50 }'
```

#### Delete

```bash
curl --request DELETE \
  --url http://localhost:3001/item/2
```

### Order

#### Create

```bash
curl --request POST \
  --url http://localhost:3001/order \
  --header 'Content-Type: application/json' \
  --data '{ "note": "Order", "itemsId": [1] }'
```

#### Read

```bash
curl --request GET \
  --url http://localhost:3001/order
```