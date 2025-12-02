function convertJsonToObject() {
    const jsonInput = document.getElementById('jsonInput').value;
    try {
      const jsonObject = JSON.parse(jsonInput);
      document.getElementById('objectOutput').textContent = JSON.stringify(jsonObject, null, 2);
    } catch (error) {
      document.getElementById('objectOutput').textContent = 'Invalid JSON!';
    }
  }
function convertJsonToDate() {
    const dateInput = document.getElementById('dateInput').value;
    try {
      const jsonDate = JSON.parse(dateInput);
      const dateObject = new Date(jsonDate.date);
      document.getElementById('dateOutput').textContent = `Date Object: ${dateObject}`;
    } catch (error) {
      document.getElementById('dateOutput').textContent = 'Invalid JSON or date format!';
      }

    }
      function convertJsonToCsv() {
    const jsonCsvInput = document.getElementById('jsonCsvInput').value;
    try {
      const jsonArray = JSON.parse(jsonCsvInput);
      const headers = Object.keys(jsonArray[0]);
      const csvRows = [
        headers.join(','),
        ...jsonArray.map(row => headers.map(header => row[header]).join(','))
      ];
      document.getElementById('csvOutput').textContent = csvRows.join('\n');
    } catch (error) {
      document.getElementById('csvOutput').textContent = 'Invalid JSON format!';
    }
  }

