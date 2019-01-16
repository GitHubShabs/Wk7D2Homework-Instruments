const PubSub = require('../helpers/pub_sub.js');

const FormView = function (container) {
  this.container = container;
};

FormView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
  });
};

FormView.prototype.render = function(instrument){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The ${instrument.name}, description '${instrument.description}', consist of the following instruments ${instrument.instruments}.`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};



module.exports = FormView;
