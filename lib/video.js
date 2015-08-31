Videos = new Mongo.Collection('videos');
Videos.attachSchema(new SimpleSchema({

    name:{
        type:String,
        label: "Please enter your name"
    },


    videoUpload: {
        type: String,
        label: "Upload files",
        autoform: {
            afFieldInput: {
                type: "cfs-file",
                collection: "files"
            }
        }
    },

    createdAt: {
        type: Date,
        label: Date,
        autoform: {
            omit: true
        },
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            }
        }
    }
}));
