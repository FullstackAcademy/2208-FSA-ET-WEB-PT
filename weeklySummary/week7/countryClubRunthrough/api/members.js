const express = require("express");
const { Member } = require("../db");
const router = express.Router();

// localhost:3000/api/members
router.get("/", async (req, res) => {
    res.send(await Member.getMemberAndAllRelationships());
});

// POST localhost:3000/api/members
router.post("/", async (req, res) => {
    try {
        // Check body sent up...
        // If no username, error out (501)
        if (!req.body.name) return res.sendStatus(505);

        // create data
        await Member.create({
            name: req.body.name
        });

        // Send back a 204
        res.sendStatus(204);
    } catch (err) {
        if (err.errors[0].type === 'Validation error') {
            return res.status(501).send(err.message);
        }
    }
})

// PUT localhost:3000/api/members
router.put("/:id", async (req, res) => {
    try {
        // Check body sent up...
        // If no username, error out (501)
        if (!req.body.name) return res.sendStatus(505);

        // create data
        const member = await Member.findByPk(req.params.id);
        await member.update({
            name: req.body.name
        });

        // Send back a 204
        res.sendStatus(204);
    } catch (err) {
        if (err.errors[0].type === 'Validation error') {
            return res.status(501).send(err.message);
        }
    }
})

router.delete("/:id", async (req, res) => {
    const memberToDelete = await Member.findByPk(req.params.id);
    console.log(memberToDelete)
    // If we don't find a member, send back a 404
    if (memberToDelete === null) {
        return res.sendStatus(404);
    }
    // If we do find a member,
    // delete it
    memberToDelete.destroy();
    // send back a 204
    return res.sendStatus(204);
});

module.exports = router;