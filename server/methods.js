Meteor.methods({
    myMethods: function(doc) {
        try {
            check(doc, mySchema);
            mySchema.clean(doc);
        }catch(e){
            throw new Meteor.Error(e);
        }

        alert("cant save data")
    }});