const db = require("./db");
const Member = require("./members");
const Facility = require("./facilities");
const Booking = require("./bookings");

// Facilities => Bookings
Booking.belongsTo(Facility);
Facility.hasMany(Booking);

// Members => Bookings
Booking.belongsTo(Member, { as: "booker", foreignKey: "bookerId" }); // bookerId
Member.hasMany(Booking, { foreignKey: "bookerId" });
// Booking: {
//     id: qsfw123-fwef-2fasdfs-asdf,
//     booker: Member {
//         name: Ben
//     }
// }

// booking.setBooker(ben);

// Members => Members
Member.belongsTo(Member, { as: "sponsor", foreignKey: "sponsorId" });
Member.hasMany(Member, { as: "sponsee", foreignKey: "sponsorId" });

// Member {
//     id: 123e2-2334-213423,
//     name: ben
//     sponsor: Member {
//         name: izzy
//         ...
//     },
//     sponsee: [
//         Member { name: louis}
//     ]
// }

// Member => Member
// Ben => Louis
// Louis => Izzy
// Member.belongsToMany(Member, { as: "friend", throughTable: "friends"});

module.exports = {
    db,
    Member,
    Facility,
    Booking
}