const PubSub = require('../helpers/pub_sub.js');
const instrumentFamilyData = ('../data/instrument_family_data.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('Instruments:all-instruments-ready', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishInstrumentDetail = function(instrumentIndex){
  const selectedInstrument = this.data[instrumentIndex];
  PubSub.publish('Instruments:selected-instrument-ready', selectedInstrument)
};







module.exports = InstrumentFamilies;
