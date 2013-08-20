define([
    "app",
    "modules/initializer"
],

function(app, Initializer) {

    var Router = Backbone.Router.extend({

        routes: {
            "": "index",
            "@:username": "profile",
            "tag/:tag": "tag"
        },

        index: function() {
            app.context = "index";
            app.relativeBase = "";
            initialize();
        },

        profile: function( username ) {
            app.context = "profile";
            app.relativeBase = "";
            app.metadata.localPath = "@" + username;
            initialize();
        },

        tag: function( tag ) {
            app.context = "tag";
            app.relativeBase = "../";
            app.metadata.localPath = "tag/" + tag;
            app.tags = tag;
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
