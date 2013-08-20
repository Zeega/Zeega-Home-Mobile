define([
    "app",
    "libs/spin",
    "backbone"
],

function( app, Spinner ) {

    return Backbone.View.extend({
        
        className: function() {
            return "cover-" + app.context.toLowerCase();
        },

        serialize: function() {
            return $.parseJSON(window.profileData) || {};
        }

    });

});