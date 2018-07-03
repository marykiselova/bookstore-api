'use strict';

module.exports = function(Book) {

    Book.validatesUniquenessOf('name', {
        message: 'name is not unique',
        ignoreCase: "true"
      });
    

};
