/**
 * @author Yulistiyan Wardhana
 */

Calendar = function() {

	/**
	 * Such of function that creates an event within Android's calendar.
	 * This function still could be modified as you wish, depend on the usability
	 * 
	 * @title The title of the event
	 * @description The description of the event
	 * @begins a time when the event starts. This parameter's type is date, contains year,month,day,hour,minute,second
	 * @ends a time when the event stops. This parameter's type is date, contains year,month,day,hour,minute,second
	 */
	createEvent() = function(title, description, begins, ends, minutesReminder) {
		var CALENDAR_TO_USE = 3;
		var calendar = Ti.Android.Calendar.getCalendarById(CALENDAR_TO_USE);

		// Create the event
		var eventBegins = begins;//new Date(2010, 11, 26, 12, 0, 0);
		var eventEnds = ends;//new Date(2010, 11, 26, 14, 0, 0);
		var details = {
			title : title,
			description : description,
			begin : eventBegins,
			end : eventEnds
		};


		var event = calendar.createEvent(details);

		// Now add a reminder via e-mail for 10 minutes before the event.
		var reminderDetails = {
			minutes : minutesReminder,
			method : Ti.Android.Calendar.METHOD_EMAIL
		};
		event.createReminder(reminderDetails);
	}
}
