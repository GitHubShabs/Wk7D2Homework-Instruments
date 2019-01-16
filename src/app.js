const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/result_view.js');
const FormView = require('./views/form_view.js');
const Data = require('./data/instrument_family_data.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectElement = document.querySelector('#instrument-dropdown');
    const instrumentDropdown = new SelectView(selectElement);
    instrumentDropdown.bindEvents();

    const infoDiv = document.querySelector('#instrument-info')
    const instrumentInfoDisplay = new FormView(infoDiv);
    instrumentInfoDisplay.bindEvents();

    const instrumentsDataSource = new InstrumentFamilies(Data);
    instrumentsDataSource.bindEvents();
  });
