define(function(require) {
    
    //load dependencies
    var serverPath = require('path!../../../server/');
    
    return {
        urls: {
            empimages: serverPath + "{empid}.png",
            empdetails: serverPath + "{empid}.txt",
            yearlysales: serverPath + "yearly-sales.txt",
            employees: serverPath + "employees.txt"
        }
    };
});
