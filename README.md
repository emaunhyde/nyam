# Peckish 
## Description 

A single page React-based application - peckish - pulls information from Zomato (a restaurant listing API database) and displays results based on users' search input. The goal was to create an easy-to-use platform that renders all the information you need to find a restaurant, choose a meal off their menu, and place your order.

## Deploy  :key:

[Peckish](https://peckish-v1.herokuapp.com/)

## Technologies Used :bulb:

[x] HTML/CSS
[x] Javascript 
[x] React.js

## Building :package:
* [wireframes](src/Images/peckish_wireframe-01.jpg)
* [component hierarchy](src/Images/peckish_components-01.jpg)
* [screenshots](src/Images/peckish_screenshots-01.jpg)

## User Stories

* as someone feeling peckish I want to be able to quickly find restaurant options near me
* as someone feeling hangry I want a no-nonsense search format that makes it easy to find what I'm looking for and gives me only the information I need so that I can get my order in asap
* as someone about to order food I want to know what my menu options are so that I don't have to navigate anywhere separately to find that information

## MVP Goals

* have functioning components that update based on user search input to display matching results from API data
* utilize router/links to have navigation displayed on each page so user can easily navigate the site
* display a gallery of results based on the user's search input linking to a component providing additional information


## Stretch Goals
* be able to display the menu within the result component (displaying the menu requires a separate API fetch)
* be able to have different search parameters to offer users a refined search option
* have users select how many results they want displaying (some users like searching page after page, some like limiting their choices)
* a way to adjust search parameters on the gallery page so that a new search does not have to be created
* have the site be responsive on mobile and desktop devices
* zomato's API does not provide any images so one stretch goal is to incorporate a secondary image database API (Pexels) to render restaurant imagery that will be used throughout the site
  
## Installation Instructions 
* first, fork and clone the repo 
* next, npm i to install required packages
* finally, open up the files in your code editor and get to work

```
git clone your-link-or-ssh
cd peckish
npm i
code .
npm start
```
## Contribution Guidelines
Feel free to submit pull requests to this repo providing clear log messages for commits. 



