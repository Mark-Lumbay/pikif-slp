# An Information Management System for Philippine Island Kids International Foundation Inc.

This Information Management System is an output of the following students from Xavier University - Ateneo de Cagayan:

- Mark Christopher Lumbay
- Kit Francis Sajulga
- Jan Hakeem Sangkula
- Renee Denise Rimando
- Eric Canete
- Ethan Valdehueza

## Introduction

This system was made according to the results of our analysis of what transpired during our requirements gathering last April 2023. The system fulfills all of the agreed-upon functional and non-functional requirements, where the system would ultimately help PIKIFI perform their job more effectively, efficiently, and securely.

## System URL

https://pikif-3470c.web.app/

## Features

- Perform Create, Read, and Updating of student data (no delete because client specified not to delete anything)
- Filter table based on a selected category
- Search for students using their names
- Sort the columns in alphabetical order or ascending/descending order for numeric fields
- Generate a report - this function is basically getting all the students who fit a specific category and exporting their basic and important data as a PDF or CSV file.
- Accounts Management - The users are able to change their names, email, and password. They can also reset their passwords through sending a password reset link to their emails.
- Role-based access - There are three roles: Teacher, SocDev Worker, and Administrators. Teachers can only read student data and perform adding new findings. SocDev Workers can read and update student data, however, they cannot manage the account of other users Administrators can do the same functions as the SocDev workers, but in addition they can manage the accounts of the users of the system (e.g. changing the role of other user accounts, and setting their active status to inactive and vice versa.)
- Accounting - Each action that is performed by a user is logged in order to uphold accountability in the system.

## Technologies Used

- Firebase Firestore Database
- Firebase Authentication
- Quasar Framework
- Tailwind CSS
- Axios
- Express JS
- Node JS

## Folder Structure
- pikif-api: This folder contains the backend/server side code for the system
- pikifi-app: This code is depracated and is not used in the system. This was the old code for the frontend.
- pikif-quasar: This contains the currently used code for the front-end of the system.
