Instructions:

1. Clone the parent directory and navigate to this directory.

2. Generate Google Sheets API Key by following step 1 in this guide:<br>
[https://developers.google.com/sheets/api/quickstart/nodejs](https://developers.google.com/sheets/api/quickstart/nodejs)

3. Put `client_secret.json` file generated in step 2 in this directory.

4. Open sheetInfo.js and edit all of the constants to match that of your Google Sheet change log.<br>
Make sure you have all of the corresponding columns in the sheet.

5. Navigate to this directory and run `npm install` (or `yarn install`)

6. Run `npm start` (or `yarn start`)

7. If running for the first time, you will be asked to navigate to a url authorize the app. Simply navigate to the provided url, sign into your google account (that you used in step 2) and paste the code into the terminal.