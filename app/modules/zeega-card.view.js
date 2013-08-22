define([
    "app",
    "modules/zeega-viewer",
    "backbone"
],

function( app, ZeegaViewer ) {

    return Backbone.Layout.extend({

        tagName: "article",
        template: "zeega-card",
        className: "zeega-card",

        
        serialize: function() {
            return _.extend({
                    base: app.getBaseUrl()
                },
                this.model.toJSON()
            );
        }

    });

});
