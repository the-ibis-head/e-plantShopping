# Paradise Nursery Shopping Application

## Introduction

This is React TypeScript project built with Vite. It uses Redux, Tailwind, ShadCN UI components, and generates initial plant data using Faker.

## Features

- [x] Landing page
- [x] About Us information
- [x] Plant listings grouped by category
- [x] Add-to-cart controls
- [x] Quantity management and item deletion
- [x] Dynamic cart totals
- [x] Checkout placeholder message

## How To Run

```bash
npm install
npm run dev
```

## Architecture

The application currently exposes Home, Plants, and Cart routes/pages. Redux Toolkit is connected through a Provider, with the product slice, and with the cart slice including reducers for adding, removing, increasing, and decreasing item quantities.
