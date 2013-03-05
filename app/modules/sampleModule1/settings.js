define(function(require) {
    
    //load dependencies
    var serverPath = require('path!../../../server/');
    
    return {
        urls: {
            departments: serverPath + "departments.txt"
        }
    };
}); 
