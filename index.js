/// Task 2: Declare and initialize the attendee object
const attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

// Task 3: Function to log the attendee's name
function logAttendeeName(attendeeObj) {
    console.log(attendeeObj.name);
}

// Task 4: Function to log the ticket price
function logTicketPrice(attendeeObj) {
    console.log(attendeeObj.ticketPrice);
}

// Task 5: Function to update the ticket type
function updateTicketType(attendeeObj, newTicketType) {
    attendeeObj.ticketType = newTicketType;
}

// Task 6: Function to update the ticket price
function updateTicketPrice(attendeeObj, newTicketPrice) {
    attendeeObj.ticketPrice = newTicketPrice;
}

// Task 7: Function to remove the event property
function removeEventProperty(attendeeObj) {
    delete attendeeObj.event;
}

// Task 8: Function to add a checked-in property with value true
function addCheckedInProperty(attendeeObj) {
    attendeeObj.checkedIn = true;
}

// Export for automated testing (needed for the tests to work)
module.exports = {
    attendee,
    logAttendeeName,
    logTicketPrice,
    updateTicketType,
    updateTicketPrice,
    removeEventProperty,
    addCheckedInProperty
};