# Challenge 13: E-Commerce Back End

## Description

Simulated E-Commerce back end. Comes with API routes that allow you to do the following:

- Look up all products, tags and categories in the database
- Look up only one product, tag or category in the database
- Add a new product, tag or category in the database
- Update a new product, tag or category in the database

#### [Click Here](https://drive.google.com/file/d/1DgDTJZpiMzhtQOZ-SFGHXXT5E2KJZCkK/view?usp=sharing) to see a demonstration video of the app in use

## Installation

Install this in a node.js environemnt with the following node packages:

- MySQL2
- Sequelize
- Dotenv

## Usage

1. To start, establish the connection to the server and its MySQL.
2. Create the database by entering the following has been established, seed the database by entering "npm run seed" in the command line. This will seed the database.
3. Then, enter "npm start" to start the app.
4. The API routes shown below can be used to interact with the database.

### GET routes

- Display all products: /api/products
- Show a product by ID: /api/products/Product_ID
- Display all tags: /api/tags
- Show a tag by ID: /api/tags/Tag_ID
- Display all categories: /api/categories
- Show a category by ID: /api/categories/Category_ID

### POST routes

- Create a product: /api/products
- Create a tag: /api/tags
- Create a category: /api/categories

### PUT routes

- Update a product by ID: /api/products/Product_ID
- Update a tag by ID: /api/tags/Tag_ID
- Update a category by ID: /api/categories/Category_ID

### DELETE routes

- Delete a product by ID: /api/products/Product_ID
- Delete a tag by ID: /api/tags/Tag_ID
- Delete a category by ID: /api/categories/Category_ID

## License

No license

## Credits/Contributors

Created by Daniel Yoshizawa

## Questions/Contact

If you have any further questions, please contact the author at:

- Email: [daniely079@gmail.com](mailto:daniely079@gmail.com)
- Github URL: [https://github.com/DYoshizawa079](https://github.com/DYoshizawa079)
