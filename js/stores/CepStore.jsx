var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CepConstants = require('../constants/CepConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _address = [];
var _loading = false;

/**
 * Search an address with cep
 * @param  {string} cep
 */
function search(cep) {

    _loading = true;

    var url = "http://api.postmon.com.br/v1/cep/";
    var param = cep;

    var xhr= $.get(url+param , function(data) {});

    xhr.done(function(data) {
        setAddress(data);
    }.bind(this));

}

function setAddress(data){

    _address = [
        {label: 'Logradouro', value:  data.logradouro},
        {label: 'Número', value: data.numero}, 
        {label: 'Complemento', value: data.complemento}, 
        {label: 'Bairro', value: data.bairro}, 
        {label: 'Cidade', value: data.cidade}, 
        {label: 'Estado', value: data.estado}
    ];

    _loading = false;

    CepStore.emitChange();
}



var CepStore = assign({}, EventEmitter.prototype, {

    getAddress: function() {
        return _address;
    },

    isLoading: function(){
        return _loading;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

AppDispatcher.register(function(action) {
  
  var cep;

  switch(action.actionType) {
    case CepConstants.CEP_SEARCH:
        cep = action.cep.trim();
        if (cep !== '') {
            search(cep);
            CepStore.emitChange();
        }
        break;

    default:

  }

});

module.exports = CepStore;