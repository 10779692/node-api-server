# GraphQL API Node Project - Jared Reed

## Instructions

```
npm install
npm run dockerStart
npm run deploy
docker-compose up -d
npm run start
npm run load
```
## Queries

### Retrieve all Apple products by id and Name
```
query {
  products {
    id
    name
  }
}
```
### Retrieve one Apple product
```
query {
  products(where: {
    id: "__INSERT ID HERE__"
  }) {
	  id
    name
    price
  }
}
```
### Retrieve all Apple products by id, Name, Price, Description
```
query {
  products {
    id
    name
    price
    desc
  }
}
```
## Mutations

### Create a new Apple product
```
mutation {
  createProduct(
    data: {
      price: 00
      desc: "__INSERT DESCRIPTION HERE__"
      name: "__INSERT NAME HERE__"
    }
  ) {
    id
    name
    price
    desc
  }
}
```
### Update an Apple product
```
mutation {
  updateProduct(
    data: {
      price: 00
    }
    where: {
      id: "__INSERT ID HERE__"
    }
  ) {
    id
    name
    price
  }
}
```
### Delete an Apple product
```
mutation {
  deleteProduct(where: {
    id: "__INSERT ID HERE__"
  }) {
    name
    price
    desc
  }
}
```# GRAPHQL-NODE-API
