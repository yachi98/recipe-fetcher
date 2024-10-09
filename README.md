# Recipe Finder App

This is a simple React web application that allows users to browse and view recipes. The app fetches recipes from the DummyJSON API and uses a Service Worker for caching API responses to improve performance.

## Features

- Dropdown Menu: A dropdown list that retrieves and displays recipe names from the DummyJSON API.
- Recipe Details: When a recipe is selected, detailed information about the recipe is displayed, including ingredients, instructions, and other key details.
- Service Worker: The app includes a service worker that caches recipe data. If a recipe is cached, it will be retrieved from the cache on future requests, reducing unnecessary API calls.
- Tailwind CSS: The app uses Tailwind CSS for responsive and modern styling.

## Techstack

- React
- Tailwind CSS
- Service Worker
- DummyJSON API

## Installation and setup

Ensure you have the following installed:

- Node.js (version 14 or higher)
- npm
- git

## Steps

1. Clone the repository: `git clone https://github.com/yachi98/recipe-fetcher`

2. Install dependencies:  `npm install` 

3. Start the development server: `npm start`


