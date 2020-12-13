# Personal Trainer App 2020

This is a simple personal trainer app done with React, as a final assignment for front end development course at Haaga-Helia Applied University.

## Components

- [App](/src/App.js) -- Root component that contains Drawer and Router components
- [Drawer](/src/components/Drawer.js) -- Component for displaying a Material-UI Clipped Drawer
- [Customers](/src/components/Customers.js) -- Main component that shows 10 customers as a default. Enables 
sorting, filtering, adding, editing and deleting a customer
- [Addcustomer](/src/components/Addcustomer.js) -- Dialog for adding a new customer
- [Editcustomer](/src/components/Editcustomer.js) -- Dialog for editing a customer
- [Trainings](/src/components/Trainings.js) -- Main component that shows 10 trainings as a default. Enables sorting, filtering, adding and deleting a training
- [Addtraining](/src/components/Addtraining.js) -- Dialog for adding a new training
- [Trainingcalendar](/src/components/Trainingcalendar.js) -- Component that uses React-big-calendar to show all the trainings in the calendar
- [Home](/src/components/Home.js) -- Just a simple home screen for further development

## Existing components & libraries used

- [ReactRouter](https://reactrouter.com/) for navigation
- [Material-UI Clipped Drawer](https://material-ui.com/components/drawers/#clipped-under-the-app-bar) for menu
- [Material-UI AppBar](https://material-ui.com/components/app-bar/) for showing the App's name on top of the screen
- [Material-UI Icons](https://material-ui.com/components/material-icons/) for drawer elements
- [React-table (version 6)](https://github.com/tannerlinsley/react-table/tree/v6) for showing, searching and filtering customer and training data in a table on Customers and Trainings components
- [Moment.js](https://momentjs.com/) for modifying dates
- [React-big-calendar](https://www.npmjs.com/package/react-big-calendar) for displaying events in a calendar


## How to try this out

- clone this repository
- install the following dependencies:
- npm install @material-ui/core
- npm install @material-ui/icons
- npm install react-router-dom
- npm install react-table
- npm install moment
- npm install react-big-calendar

## Improvement ideas

- before saving the training, check that customer exists in the database with the given id
- add customers to a drop-down list for selection when creating a new training
- show customer name instead of id
- show customer's own training on one page by clicking the customer on the table
