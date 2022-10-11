const { db, Member, Facility, Booking } = require("./db");

const seedDb = async () => {
    try {
        await db.sync({ force: true, logging: false });

        const ben = await Member.create({
            name: "ben"
        });
        const louis = await Member.create({
            name: "louis"
        });
        const izzy = await Member.create({
            name: "izzy"
        });
        const mae = await Member.create({
            name: "mae",
            // sponsorId: izzy.id
        });

        // izzy => mae, ben => louis
        await mae.setSponsor(izzy);
        await ben.setSponsor(izzy);
        await louis.setSponsor(ben);

        const members = await Member.getAllMembersAndSponsees()
        console.log(members.map(member => member.toJSON()));

        await Facility.create({
            name: "Place"
        });

        await Facility.create({
            name: "Other Place"
        });

        await Booking.create();
        await Booking.create();
        await Booking.create();
    } catch (err) {
        console.error(err.message);
    }
};

seedDb();