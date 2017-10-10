This repository contains two tools to help automate Salesforce ant deployments.

The first tool connects with a deployment/config/change log hosted on Google Sheets and generates a package.xml from all of the components listed on the sheet. This requires the object name, API name, etc of all components on the log to be explicitly listed.

The second tool combines multiple package.xml files into one comprehensive package. All you have to do is provide the pointers to the packages and the tools will do the rest of the work. This is really useful in generating a complete package for a push to production.

Comprehensive installation and use instructions are in each of the tools folders.