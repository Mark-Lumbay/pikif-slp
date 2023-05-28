# An Information Management System Designed for Philippine Island Kids International Foundation Incorporated.

# Introduction

Philippine Island Kids International Foundation Inc (PIKIFI) is a non-profit organization dedicated to providing access to education and resources for children from underserved communities, particularly those who have been victims of abuse.

During our Data Gathering, we were it was apparent to us that they were having difficulties in managing the information of their students, as they were only using one laptop to input information where they made use of Microsoft Excel. This brings problems regarding the security, integrity, and efficiency of their work.

Our team provided a solution to their problems in the form of an Information Management System that caters to their needs

# System URL

https://pikif-3470c.web.app/

# Features:

This section provides the list of key features and functionalities

1. Perform Create, Read, and Updating of student data (no delete because client specified not to delete anything)
2. Filter table based on a selected category
3. Search for students using their names
4. Sort the columns in alphabetical order or ascending/descending order for numeric fields
5. Generate a report - this function is basically getting all the students who fit a specific category and exporting their basic and important data as a PDF or CSV file.
6. Accounts Management - The users are able to change their names, email, and password. They can also reset their passwords through sending a password reset link to their emails.
7. Role-based access - There are three roles: Teacher, SocDev Worker, and Administrators.
   Teachers can only read student data and perform adding new findings.
   SocDev Workers can read and update student data, however, they cannot manage the account of other users
   Administrators can do the same functions as the SocDev workers, but in addition they can manage the accounts of the users of the system (e.g. changing the role of other user accounts, and setting their active status to inactive and vice versa.)
8. Accounting - Each action that is performed by a user is logged in order to uphold accountability in the system.

# Technologies used

Frontend:
Quasar Framework
Tailwind CSS
Firebase Client-side library

Backend:
Axios
Express JS
Firebase Admin-SDK

# Deployment Details

Product backend is deployed in Railway, while database and frontend are hosted by Firebase. The reason why we did not host the backend through firebase cloud functions was because it would need a credit card for its free use, and when you exceed the quota, it will automatically charge the bill to your account. We wanted to avoid this, so we deployed the backend to Railway, which is a free alternative.
