//cfs.allow({
//    insert: function(userId, doc) {
//        return true;
//    },
//    download: function(userId) {
//        return true;
//    }
//});

Files.allow({
    download: function () {
        return true;
    },
    fetch: null
});

//Template.registerHelper('geturl', function(_id) {
//    f = Files.findOne(_id);
//    return f.url();
//})
