interface CloudHostingProvider {
    createServer?: () => void
    listServers?: () => void
}

interface CDNProvider {
    getCDNAddress?: () => void
}

interface CloudStorageProvider {
    storeFile: () => void
    getFile: () => void
}


class Amazon implements CloudHostingProvider, CDNProvider, CloudStorageProvider {
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

class Dropbox implements CloudStorageProvider {
    public storeFile() {
        console.log("...storing");
    }

    public getFile() {
        console.log("...storing");
    };
}

let dropbox: CloudStorageProvider = new Dropbox();
dropbox.getFile();

