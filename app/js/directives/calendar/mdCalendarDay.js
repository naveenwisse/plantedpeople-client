(function() {
    'use strict';

    angular
        .module('md.calendar')
        .controller('MdCalendarDayCtrl', function($scope, $sce, calendarHelper, calendarConfig) {

            var vm = this;

            vm.calendarConfig = calendarConfig;
            vm.$sce = $sce;

            $scope.$on('calendar.refreshView', function() {
                vm.dayViewSplit = vm.dayViewSplit || 30;
                vm.dayViewHeight = calendarHelper.getDayViewHeight(
                    vm.dayViewStart,
                    vm.dayViewEnd,
                    vm.dayViewSplit
                );

                vm.view = calendarHelper.getDayView(
                    vm.events,
                    vm.currentDay,
                    vm.dayViewStart,
                    vm.dayViewEnd,
                    vm.dayViewSplit
                );

            });

            vm.eventDragComplete = function(event, minuteChunksMoved) {
                var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
                var newStart = moment(event.startsAt).add(minutesDiff, 'minutes');
                var newEnd = moment(event.endsAt).add(minutesDiff, 'minutes');
                delete event.tempStartsAt;

                vm.onEventTimesChanged({
                    calendarEvent: event,
                    calendarNewEventStart: newStart.toDate(),
                    calendarNewEventEnd: event.endsAt ? newEnd.toDate() : null
                });
            };

            vm.eventDragged = function(event, minuteChunksMoved) {
                var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
                event.tempStartsAt = moment(event.startsAt).add(minutesDiff, 'minutes').toDate();
            };

            vm.eventResizeComplete = function(event, edge, minuteChunksMoved) {
                var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
                var start = moment(event.startsAt);
                var end = moment(event.endsAt);
                if (edge === 'start') {
                    start.add(minutesDiff, 'minutes');
                } else {
                    end.add(minutesDiff, 'minutes');
                }
                delete event.tempStartsAt;

                vm.onEventTimesChanged({
                    calendarEvent: event,
                    calendarNewEventStart: start.toDate(),
                    calendarNewEventEnd: end.toDate()
                });
            };

            vm.eventResized = function(event, edge, minuteChunksMoved) {
                var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
                if (edge === 'start') {
                    event.tempStartsAt = moment(event.startsAt).add(minutesDiff, 'minutes').toDate();
                }
            };

        })
        .directive('mdCalendarDay', function() {

            return {
                templateUrl: 'calendar/calendarDayView.html',
                restrict: 'EA',
                require: '^mdCalendar',
                scope: {
                    events: '=',
                    currentDay: '=',
                    onEventClick: '=',
                    onEventTimesChanged: '=',
                    onTimespanClick: '=',
                    dayViewStart: '=',
                    dayViewEnd: '=',
                    dayViewSplit: '='
                },
                controller: 'MdCalendarDayCtrl as vm',
                bindToController: true
            };

        });
})();
