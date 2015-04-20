'use strict';

var Router = require('../src/js/router.js'),
  PageView = require('../src/js/framework/page');

describe('Router', function() {

  var router;

  beforeEach(function() {
    router = new Router();
  });

  describe('The Routes', function() {

    describe('home', function() {
      xit('should load the home screen', function() {
        router.home();
      });
    });

    describe('contacts', function() {
      xit('should load the contacts screen', function() {
        router.contacts();
        expect(true).toBeTruthy();
      });
    });

  });

  describe('changeView', function() {

    var view;

    beforeEach(function() {
      view = new PageView();
    });

    describe('Loading a new view', function() {

      it('should set the set the current view', function() {
        router.changeView(view);
        expect(router.currentView).toEqual(view);
      });

      it('should render the current view', function() {
        spyOn(view, 'render').and.callThrough();
        router.changeView(view);
        expect(view.render).toHaveBeenCalled();
      });

      it('should setup the buttons', function() {
        spyOn(view, 'setButtonEvents');
        router.changeView(view);
        expect(view.setButtonEvents).toHaveBeenCalled();
      });

      xit('should render the view in the watch face', function() {

      });

    });

    describe('When there is an existing view', function() {

      it('should remove the old view', function() {
        spyOn(router, '_removeOldView');
        router.currentView = new PageView();
        router.changeView(view);
        expect(router._removeOldView).toHaveBeenCalled();
      });

    });

  });

});