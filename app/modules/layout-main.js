 define([
    "app",
    "modules/sidebar",
    "modules/feed.view",
    "modules/cover.view",
    "modules/footer",
    "modules/zeega-projects.collection",
    "backbone"
],

function( app, SidebarView, FeedView, CoverView, FooterView, ZeegaCollection ) {

    return Backbone.Layout.extend({

        el: "#main",
        template: "layout-main",

        beforeRender: function(){
            zeegas = new ZeegaCollection( app.metadata );

            this.insertView( ".cover-wrapper", new CoverView({ template: "cover-" + app.context }) );
            this.insertView( ".content", new FeedView({ collection: zeegas }) );
        }
    });

});
