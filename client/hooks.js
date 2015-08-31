AutoForm.addHooks(
    ["insertForm"],
    {
        before   : {
            method: CfsAutoForm.Hooks.beforeInsert
        },
        after    : {
            method: CfsAutoForm.Hooks.afterInsert
        }
    }
);

Template.registerHelper('debug', function(item){
    console.log(item);
})

Template.registerHelper('geturl', function(_id) {
    return Files.findOne(_id).url();
});