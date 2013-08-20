define([
    // Application.
    "app",

    // Modules.
    "modules/initializer"
],

function(app, Initializer) {

    // Defining the application router, you can attach sub routers here.
    var Router = Backbone.Router.extend({
        routes: {
            "": "index",
            "@:username": "profile",
            "tag/:tag": "tag"
        },

        index: function() {
            app.context = "Index";
            initialize();
        },

        profile: function( username ) {
            app.context = "Profile";
            app.metadata.localPath = "@" + username;
            initialize();
        },

        tag: function( tag ) {
            app.context = "Tag";
            app.metadata.localPath = "tag/" + tag;
            initialize();
        }

    });

    /* create init fxn that can only run once per load */
    var init = function() {
        new Initializer();
    };
    var initialize = _.once( init );

    return Router;

});
