"use strict";
class Amazon1 {
    storeFile() {
        console.log("...storing");
    }
    getFile() {
        console.log("...getFile");
    }
    ;
    createServer() {
        console.log("...createServer");
    }
    listServers() {
        console.log("...listServers");
    }
    getCDNAddress() {
        console.log("...getCDNAddress");
    }
}
class Dropbox1 {
    storeFile() {
        console.log("...storing");
    }
    getFile() {
        console.log("...storing");
    }
    ;
}
let dropbox1 = new Dropbox();
