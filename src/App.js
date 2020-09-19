import React from 'react';
import Dashboard from './components/Dashboard';

function App() {

  let data = {
    "widgets": [
      {
        "id": 1,
        "name": "Blobex Corporation",
        "type": "form",
        "items": [
          {
            "type": "section",
            "header": "Opportunity Details",
            "columns": 2,
            "items": [
              {
                "type": "input",
                "label": "Opportunity Name",
                "value": "Acme - 1200 Widgets (Sample)",
                "required": true
              },
              {
                "type": "dropdown-input",
                "label": "Stage + Probability (%)",
                "options": [
                  "Proposal/Price Quote",
                  "Option 2",
                  "Option 3"
                ],
                "percentage": 0.5,
                "required": true
              },
              {
                "type": "currency",
                "label": "Amount + Currency",
                "value": 146,
                "symbol": "EUR"
              },
              {
                "type": "date",
                "label": "Close Date",
                "value": "2014-09-04T00:00:00.000Z",
              },
              {
                "type": "currency",
                "label": "Another Input",
                "value": 140000,
                "symbol": "EUR",
                "precision": 2
              }
            ]
          }
        ]
      }
    ]
  };

  let dataLong = {
    "widgets": [
      {
        "id": 1,
        "name": "Blobex Corporation",
        "type": "form",
        "items": [
          {
            "type": "section",
            "header": "Opportunity details",
            "columns": 2,
            "items": [
              {
                "type": "input",
                "label": "Opportunity name",
                "value": "Acme - 1200 Widgets (Sample)",
                "required": true
              },
              {
                "type": "currency",
                "label": "Ammount + currency",
                "value": 146,
                "symbol": "EUR"
              },
              {
                "type": "currency",
                "label": "Another input",
                "value": 140000,
                "symbol": "EUR",
                "precision": 2
              }
            ]
          },
          {
            "type": "section",
            "header": "Opportunity details",
            "columns": 2,
            "items": [
              {
                "type": "input",
                "label": "Opportunity name",
                "value": "Acme - 1200 Widgets (Sample)",
                "required": true
              },
              {
                "type": "currency",
                "label": "Ammount + currency",
                "value": 146,
                "symbol": "EUR"
              },
              {
                "type": "currency",
                "label": "Another input",
                "value": 140000,
                "symbol": "EUR",
                "precision": 2
              }
            ]
          },
          {
            "type": "section",
            "header": "Opportunity details",
            "columns": 1,
            "items": [
              {
                "type": "input",
                "label": "Opportunity name",
                "value": "Acme - 1200 Widgets (Sample)",
                "required": true
              },
              {
                "type": "currency",
                "label": "Ammount + currency",
                "value": 146,
                "symbol": "EUR"
              },
              {
                "type": "currency",
                "label": "Another input",
                "value": 140000,
                "symbol": "EUR",
                "precision": 2
              }
            ]
          },
          {
            "type": "section",
            "header": "Opportunity details",
            "columns": 3,
            "items": [
              {
                "type": "input",
                "label": "Opportunity name",
                "value": "Acme - 1200 Widgets (Sample)",
                "required": true
              },
              {
                "type": "currency",
                "label": "Ammount + currency",
                "value": 146,
                "symbol": "EUR"
              },
              {
                "type": "currency",
                "label": "Another input",
                "value": 140000,
                "symbol": "EUR",
                "precision": 2
              }
            ]
          }
        ]
      }
    ]
  };

  console.log(data);

  return (
    <div className="App">
      <Dashboard data={data} />
    </div>
  );
}

export default App;
