interface CloudProvider {
    storeFile: () => void
    getFile: () => void
    createServer?: () => void
    listServers?: () => void
    getCDNAddress?: () => void
}


class Amazon1 implements CloudProvider {
    public storeFile() {
        console.log("...storing");
    }

    public getFile() {
        console.log("...getFile");
    };

    public createServer() {
        console.log("...createServer");
    }
    public listServers() {
        console.log("...listServers");
    }
    public getCDNAddress() {
        console.log("...getCDNAddress");
    }
}

class Dropbox1 implements CloudProvider {
    public storeFile() {
        console.log("...storing");
    }

    public getFile() {
        console.log("...storing");
    };
}

let dropbox1: CloudProvider = new Dropbox();
