# Computer Components Order Form

This project consists of a computer parts ordering form showcasing nine items, developed in React and styled using CSS.To avoid the need to leave the initial page and also to ensure that the form is capable of providing a simple and easy process for the user experience, I have included a modal that will take care of managing the final part of the order. 

The ordering process starts by clicking on the select button of the desired item. The modal opens,  displaying the selected items and providing a smooth user experience by staying on the initial page. The modal functions as a shopping cart. Alternatively, the modal shopping cart can be accessed via the shopping cart icon in the top right corner of the page. I implemented the quantity feature in the modal, which allows users to change the number of items. If the modal is closed without deleting items, they will remain in the basket. This option allows us to continue adding items to the basket. 

After the Proceed to Checkout button is clicked, a checkout page and a thank you page are implemented. All in the modal without leaving the initial page.


## Features

1. **Product Listing**:
   - Displays 9 different computer components.
   - Each product has a select button to add it to the cart.

2. **Cart Modal**:
   - Clicking the select button opens a modal showing the selected items.
   - The cart can also be accessed from the cart icon in the top right corner.
   - The modal allows users to increase or decrease the quantity of items.
   - Items remain in the cart even if the modal is closed without deletion, allowing users to continue adding items.

3. **Ordering Process**:
   - After selecting items, users proceed to a payment form.
   - Upon finalizing the payment, a thank you page is displayed.

## Components

- **App.js**: The main component that holds the state and renders other components.
- **Products.js**: Displays the list of products.
- **SortProducts.js**: Allows sorting of products.
- **FilterProductos.js**: Provides filtering options for products.
- **Card.js**: Represents individual product cards.
- **CartModal.js**: The modal that acts as the cart, showing selected items and allowing quantity adjustments.
- **FinalPayment.js**: The payment form component.
- **Confirmation.js**: Displays a thank you message after payment is finalized.

## Styles

- **App.css**: Contains all the CSS styles used in the application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
