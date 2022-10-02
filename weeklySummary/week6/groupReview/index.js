const express = require("express");
const { User, Puppy, Breed, Bone } = require("./db");
const app = express();

app.get('/puppy/:id', async (req, res) => {
    const puppy = await Puppy.findByPk(req.params.id, {
        include: [
            Breed,
            Bone,
            { model: User, as: "walkedBy" },
            { model: User, as: "ownedBy" }
        ]
    });
    res.send(puppy);
})

// Find a specific user
// Give back the dogs they're walking
app.get('/users/:id', async (req, res) => {
    const walking = await User.findByPk(req.params.id, {
        include: [
            { model: Puppy, as: "walker" },
            { model: Puppy, as: "owner" }
        ]
    });

    res.send(walking);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})