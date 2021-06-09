# Wb Shop

![](https://i.imgur.com/9qhVHEC.png)

## 📝 Description

Wb shop is an e-commerce store.

Users can add products to the cart, delete them and change their quantity. The subtotal will be reflected based on the price of an item and its quantity in the basket.

Users need to authenticate themselves before they can go to a checkout page. If a user is not signed in and clicks on the checkout button, they will be re-directed to the sign-in page instead. Of course, there's no need to be authenticated to add items to the cart.

Products are pulled in from the "FakeStore API" and rendered on the server-side (SSR). Every product has its own "product page" where users can read the full-length description (the descriptions on the main product cards are truncated).

The state is managed with Redux. In order to avoid the loss of cart items during a refresh, the cart's contents are also stored in the local storage.

Firebase is used to authenticate users. Only sign up with e-mail and password is available as for now.

The UI is made presentable with the help of Ant Design library.

## 🥞 Stack

- Next.js
- TypeScript
- Redux
- Firebase
- Ant Design

## 🌎 Demo

https://wb-shop.vercel.app/
