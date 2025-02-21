module.exports.shopData = { "users": [
      {
        "id": 1,
        "name": "John Doe",
        "username": "johndoe123",
        "email": "john.doe@example.com",
        "address": {
          "street": "123 Main St",
          "suite": "Apt 4B",
          "city": "New York",
          "zipcode": "10001",
          "geo": {
            "lat": "40.7128",
            "lng": "-74.0060"
          }
        },
        "phone": "+1-555-123-4567",
        "website": "johndoe.com",
        "company": {
          "name": "Doe Corp",
          "catchPhrase": "Innovative solutions for a better tomorrow",
          "bs": "harness real-time e-markets"
        },
        "isActive": true,
        "hobbies": ["reading", "traveling", "coding"]
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "username": "janesmith456",
        "email": "jane.smith@example.com",
        "address": {
          "street": "456 Elm St",
          "suite": "Suite 200",
          "city": "Los Angeles",
          "zipcode": "90001",
          "geo": {
            "lat": "34.0522",
            "lng": "-118.2437"
          }
        },
        "phone": "+1-555-987-6543",
        "website": "janesmith.com",
        "company": {
          "name": "Smith Innovations",
          "catchPhrase": "Transforming ideas into reality",
          "bs": "e-enable strategic applications"
        },
        "isActive": false,
        "hobbies": ["painting", "hiking", "photography"]
      },
      {
        "id": 3,
        "name": "Alice Johnson",
        "username": "alicej",
        "email": "alice.johnson@example.com",
        "address": {
          "street": "789 Oak St",
          "suite": "Unit 5",
          "city": "Chicago",
          "zipcode": "60601",
          "geo": {
            "lat": "41.8781",
            "lng": "-87.6298"
          }
        },
        "phone": "+1-555-456-7890",
        "website": "alicejohnson.com",
        "company": {
          "name": "Johnson & Co",
          "catchPhrase": "Empowering your business",
          "bs": "streamline end-to-end systems"
        },
        "isActive": true,
        "hobbies": ["cooking", "yoga", "gardening"]
      }
    ],
    "posts": [
      {
        "userId": 1,
        "id": 1,
        "title": "First Post",
        "body": "This is the first post by John Doe. Welcome to my blog!"
      },
      {
        "userId": 2,
        "id": 2,
        "title": "Exploring Nature",
        "body": "Today, I went hiking in the mountains. The view was breathtaking!"
      },
      {
        "userId": 3,
        "id": 3,
        "title": "Cooking Adventures",
        "body": "Tried a new recipe today. It turned out amazing!"
      }
    ],
    "products": [
      {
        "id": 101,
        "name": "Smartphone X",
        "price": 799.99,
        "inStock": true,
        "features": ["5G", "128GB Storage", "12MP Camera"]
      },
      {
        "id": 102,
        "name": "Laptop Pro",
        "price": 1299.99,
        "inStock": false,
        "features": ["16GB RAM", "512GB SSD", "Intel i7 Processor"]
      },
      {
        "id": 103,
        "name": "Wireless Earbuds",
        "price": 149.99,
        "inStock": true,
        "features": ["Noise Cancellation", "20hr Battery Life", "Bluetooth 5.0"]
      }
    ]
  }