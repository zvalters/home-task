## Assignment

In this assignment, you should develop a small business-form visualisation library.
Your solution should accept the plain JSON file as input and build the DOM-structure
to ensure a visual result comparable with the sample graphical design.
The JSON file contains the logical markup of the business form.
Ideally, your solution should be capable of downloading the JSON from the given URL
and build the user interface on the fly.
You should not implement any business-logic, just build the UI.
You should write this solution with Angular 2+ or React.

## Implementation

The main entry point for this business-form UI is the `<Dashboard />` component.
It accepts an URL prop that fetches the JSON file containing the markup for the form. 
The project has been built in React using Create React App.</br>
Example:
```
<Dashboard url={JSON_URL} />
```

## The Required JSON Structure

The **widgets** object array

First level of the markup containing all of the widgets to be put on the dashboard<br />
Currently supports only widgets of type **Form**<br />
A widget object can contain:<br />
* id : Number
* name : String
* type : String
* items : Object[]
---
The **items** object array of the Form type

Contains the form items.<br />
Currently supports only items of type **Section**<br />
A Form item object can contain:<br />
* header : String
* type : String
* columns: Number
* items : Object[]
---
The **items** object array of the Section type

Contains different Inputs that get placed in a Section<br />
Currently supported types:<br />
* input
* currency
* dropdown-input
* date
* search

All Section item objects contain:<br />
* label : String
* type : String
* required : Boolean

Depending on the type of Input additional properties are needed or are supported:

type:**input**
* value : String

type:**currency**
* value : Number
* precision : Number
* symbol : String (For example, EUR)

type:**dropdown-input**
* options : String[]
* percentage : Number ( 0 <= percentage <= 1)

type:**date**
* value : Date

type:**search**
* value : String

---

**Example input**
```
{
    "widgets": [{
        "id": 1,
        "name": "Blobex Corporation",
        "type": "form",
        "items": [{
            "type": "section",
            "header": "Opportunity Details",
            "columns": 2,
            "items": [{
                "type": "input",
                "label": "Opportunity Name",
                "value": "Acme - 1200 Widgets (Sample)",
                "required": true
            }, {
                "type": "dropdown-input",
                "label": "Stage + Probability (%)",
                "options": ["Proposal/Price Quote", "Option 2", "Option 3"],
                "percentage": 0.5,
                "required": true
            }, {
                "type": "currency",
                "label": "Amount + Currency",
                "value": 146,
                "symbol": "EUR"
            }, {
                "type": "date",
                "label": "Close Date",
                "value": "2014-09-04T00:00:00.000Z"
            }, {
                "type": "currency",
                "label": "Another Input",
                "value": 140000,
                "symbol": "EUR",
                "precision": 2
            }]
        }]
    }]
}
```

---

## Available Scripts

In the project directory, you can run:

```
npm install
```

Installs all of the necessary packages to run this project

```
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


