//var Files = new FS.Collection("files", {
//    stores: [new FS.Store.FileSystem("files", {path: "~/uploads"})]
//});

Files = new FS.Collection("files", {
    stores: [new FS.Store.GridFS("filesStore")]
});

