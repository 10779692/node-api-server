# GraphQL API Node Project - Jared Reed

## Instructions

```
npm install
npm run dockerStart
docker-compose up -d
npm run deploy
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
    location
    employee
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
    location
    employee
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
      location: "__INSERT LOCATION HERE__"
      employee: "__INSERT EMPLOYEE HERE__"
    }
  ) {
    id
    name
    price
    desc
    location
    employee
  }
}
```
### Update an Apple product
```
mutation {
  updateProduct(
    data: {
      name
      price
      location
      employee
    }
    where: {
      id: "__INSERT ID HERE__"
    }
  ) {
    id
    name
    price
    location
    employee
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
    location
    employee
  }
}
```# GRAPHQL-NODE-API
