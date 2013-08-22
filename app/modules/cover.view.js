define([
    "app",
    "libs/spin",
    "backbone"
],

function( app, Spinner ) {

    return Backbone.View.extend({

        tagArray: [
            "bestof",
            "stories",
            "funny",
            "music"
        ],
        
        className: function() {
            return "cover-" + app.context;
        },

        serialize: function() {
            var ser = $.parseJSON(window.profileData) || {};

            return _.extend({ tags: this.getTags(), base: app.getBaseUrl() }, ser );
        },

        getTags: function() {
            return this.tagArray;
        }

    });

});