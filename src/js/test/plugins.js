﻿define([
    'backbone',
    'backbone.marionette',
    'chai',
    'jquery.hoverIntent',
    'jquery',
    'jquery.qtip',
    'jquery.transit',
    'jquery-ui',
    'underscore',
    'mocha',
    'selectize',
    'sinon'
], function (Backbone, Marionette, chai) {

    window.expect = chai.expect;
    window.mocha.setup('bdd');

    //  Finally, load the tests:
    require(['test/test'], function () {
        window.mocha.run();
    });
});