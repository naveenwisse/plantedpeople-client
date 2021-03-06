(function() {
    'use strict';
    // This module pulls all the controllers into one place
    angular.module('app.controllers', [
        'controller.login',
        'controller.registration',
        'controller.wrapper',
        'controller.calendar',
        'controller.contact',
        'controller.opportunity',
        'controller.settings',
        'controller.business-gallery',
        'controller.profile',
        'controller.profile-public',
        'controller.business',
        'controller.business-settings',
        'controller.reset',
        'controller.confirm',
        'controller.stripe-confirm',
        'controller.event',
        'controller.toast',
        'controller.dialog',
        'controller.users-admin',
        'controller.positions-admin',
        'controller.position-edit-admin',
        'controller.position-create-admin',
        'controller.terms-admin',
        'controller.term-create-admin',
        'controller.term-edit-admin',
        'controller.dialog.add-skills',
        'controller.dialog.profile-education',
        'controller.dialog.add-experience',
        'controller.dialog.create-business',
        'controller.dialog.edit-profile',
        'controller.profile-all-events',
        'controller.dialog.add-event',
        'controller.dialog.edit-event',
        'controller.dialog.add-resources',
        'controller.dialog.add-resource',
        'controller.dialog.edit-resource',
        'controller.dialog.rate-user',
        'controller.dialog.rate-business',
        'controller.dialog.biz-edit-address',
        'controller.dialog.user-edit-address',
        'controller.dialog.accept-job',
        'controller.dialog.payment',
        'controller.dialog.add-tasting',
        'controller.dialog.accept-tasting',
        'controller.dialog.accept-reschedule',
        'controller.dialog.password-prompt',
        'controller.dialog.accept-employee',
        'controller.tasting',
        'controller.competition',
        'controller.dialog.add-competition',
        'controller.dialog.accept-competition',
        'controller.employees',
        'controller.products',
        'controller.businesses',
        'controller.dialog.add-product',
        'controller.dialog.reasons-suspend',
        'controller.dialog.add-event-products',
        'controller.dialog.review-product',
        'controller.dialog.view-product-reviews',
        'controller.dialog.view-business-reviews',
        'controller.dialog.add-competing-employees',
        'controller.dialog.profile-accept-competition',
        'controller.dialog.add-check-in',
        'controller.dialog.user-edit-phone',
        'controller.dialog.apply-tasting',
        'controller.dialog.additional-comment',
        'controller.businesses-admin',
        'controller.dialog.map',
        'controller.jobs-coord',
        'controller.job'
    ]);
})();
