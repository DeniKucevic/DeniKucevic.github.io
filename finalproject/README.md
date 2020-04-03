L33T NEWS V1.0.0
================

L33T NEWS was my final project for IT Bootcamp that was ment to summ up the knowedge I have gethered over the 10 week course for HTML, CSS, JavaScript and React.

L33T NEWS is application that is gathering news from different API sources and has some special features like displaying statistics of covid-19 virus spread by countries.

To run the app:

    install node.js
    import project
    run it with npm start

Features
--------

-Application is displaying styled content and features many routes for displaying different content

-Navigation bar for easier manouvering trough content wich is displaying top news for selected category

-Search bar for finding news by enering search query wich is limited to use for only logged in users

-App name and logo on header has a purpose of returning back to the main page

-Default language for news is set on Serbian language

-Under search bar in header is selector for changing language

-Next to language selector is category selector wich will show latest news on the selected language

-COVID-19 button will display a list of virus spread statistics, the result will be paginated, selector is used to change amount of items per page and search will filter trough country names and display filtered country

-Header features a scroling weather app displaying weather in Belgrade, static weather app can be found on page footer

-Register form has validation of password and prevent user from etering empty fields, succsessful register will inform user about registration

-Register and login are setting token and id in locale storage for log in validation and prevent user from comming back on log in or register page

-My profile button will display user info pulled from server, new button called all user will show all users from the server, results are paginated and there is filter for finding users based on username

-Footer holds a button for returning back on top page

-Application is responsive and will show on all screen sizes

-News element title and image contains links that will open in new window and take user to the source on new tab

-User is required to confirm logging out of the application



Folder structure
----------------

The code of the app is in the src folder, folder contains subfolders for different routes on the app. 

-layout folder

    -PrivateRoutes folder are accsesable only for logged in users and lead to the profiles infos

    -PublicRoutes folder are accsesable to everybody and contain majority of the content

    -ProfileRoutes folder are not accsesable to loged in users and contain log in and register pages 

-Services folder contains API links and methods for retriving data

    -Auth.service folder contains links for log and register in services

    -CoetusService folder is holding data for geting users infos

    -NewsApi folder is holding files for fetching news and statistics

Support
-------

If you are having issues, please let me know.
I have a mailing list located at: denikucevic@gmail.com

SPECIAL THANKS
**************

I want to say thank you to the teachers at IT Bootcamp:

Dušan Bobičić
Cvijan Peranović
Andjela Bojić

for teaching us and providing support on our way of becoming front-end developers!