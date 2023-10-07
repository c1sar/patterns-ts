"use strict";
class Amazon {
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
class Dropbox {
    storeFile() {
        console.log("...storing");
    }
    getFile() {
        console.log("...storing");
    }
    ;
}
let dropbox = new Dropbox();
dropbox.getFile();
