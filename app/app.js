define([
    "backbone.layoutmanager"
], function() {

    var app = {
        tags: "",

        metadata: $("meta[name=zeega]").data(),
        root: $("meta[name=zeega]").data("root"),

        getBaseUrl: function() {
            return "http:" + this.metadata.hostname + app.metadata.directory;
        },

        emit: function( event, args ) {
            // other things can be done here as well
            this.trigger( event, args );
        }
    };

    var JST = window.JST = window.JST || {};

    Backbone.LayoutManager.configure({
        manage: true,

        prefix: "app/templates/",

        fetch: function( path ) {
            path = path + ".html";

            if (JST[path]) {
                return JST[path];
            }

            var done = this.async();

            $.get( app.relativeBase + app.metadata.root + path, function(contents) {
                done(JST[path] = _.template(contents));
            });
        }
    });

    return _.extend(app, {
        Backbone: Backbone,
        $: jQuery
    }, Backbone.Events);
});