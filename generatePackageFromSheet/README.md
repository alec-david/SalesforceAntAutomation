Instructions:

1. Ensure node.js is installed. To check, open a terminal and type <br>
`node -v`<br>
It should return 'vX.X.X'<br>
Recommended version is v6 or greater.
In not installed, install it here: [https://nodejs.org/en/](https://nodejs.org/en/)

2. Clone the parent directory and navigate to this directory.

3. Generate Google Sheets API Key by following step 1 in this guide:<br>
[https://developers.google.com/sheets/api/quickstart/nodejs](https://developers.google.com/sheets/api/quickstart/nodejs)

4. Put `client_secret.json` file generated in step 3 in this directory.

5. Open sheetInfo.js and edit all of the constants to match that of your Google Sheet change log.<br>
Make sure you have all of the corresponding columns in the sheet.

6. Navigate to this directory and run `npm install` (or `yarn install`)

7. Run `npm start` (or `yarn start`)

<br><br><br>
TODO:
+ ~~Filter multiple versions of flow~~
+ ~~Move package.xml and deployment steps into own folder~~
+ ~~Add check to not add manualstep to package~~
+ ~~Add Check to not add delete Category~~
+ ~~Maybe add a step to generate a list of pre/post deployment steps, stuff to delete~~