# E-commerce Admin Dashboard
E-commerce managers require a comprehensive understanding of sales, revenue, and inventory status for effective decision-making. The objective here is to develop a web-based admin dashboard that centralizes all these crucial data points.
## Project Setup

```sh
cd EcommerceAdminDashboard
```
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
## Project Dependencies

```sh
"pinia": "^2.1.6",
"pinia-plugin-persistedstate": "^3.2.0",
"vue": "^3.3.4",
"vue-chartjs": "^5.2.0",
"vue-router": "^4.2.4",
"vuetify": "^3.3.19"
```
## How to navigate through the app
"main.ts" serves as the entry point of this vue application. It contains all the necessary imports required for the project.

"App.vue" contains the main layout design for the application including the header, sidebar and main div where the route components render.

"src" folder contains a "views" folder which contains both the views in this application i.e. Overview & Inventory. Where "Overview" displays the sales, orders and sales trends whereas "Inventory" view is responsible for managing products e.g. add/edit product (edit product is not available ATM)

All other sub-components could be found in components folder.
