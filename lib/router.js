Router.configure({
    layoutTemplate: "masterLayout",
    loadingTemplate: "loading",
    notFoundTemplate: '404'
})


Router.route('/',function(){
        this.render('videoUpload');
    },
    {
        name: 'videoUpload',
        data: function(){
            return {
                showVideos: Videos.find({}).fetch()
               //files: Files.find({}).fetch()

            }
        }

    });
