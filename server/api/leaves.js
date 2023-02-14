const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const Leave = require("../models/Leave");

const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

router.get("/", async (req, res) => {
    try {
        let leaves = await Leave.find({});
        if (leaves.length == 0) return res.json({ msg: "No leaves found" });

        return res.json(leaves);
    } catch (e) {
        return res.status(400).json({ e, msg: "Cannot retrieve items" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        let leaves = await Leave.findById(req.params.id);
        if (leaves.length == 0)
            return res.json({
                msg: "No leaves found",
            });
        return res.json(leaves);
    } catch (e) {
        return res.json({
            e,
            msg: "leave cannot be found",
        });
    }
});

router.post("/", auth, async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).send({
                message: "You are not a user",
            });
        }

        let form = new formidable.IncomingForm();

        form.parse(req, async (e, fields, files) => {
            const leave = new Leave(fields);

            // console.log(leave);

            let oldPath = files.image.filepath;
            let newPath =
                path.join(__dirname, "../public") +
                `/${files.image.newFilename}-${files.image.originalFilename}`;
            let rawData = fs.readFileSync(oldPath);
            fs.writeFileSync(newPath, rawData);
            leave.image = `/${files.image.newFilename}-${files.image.originalFilename}`;
            leave.userId = req.user._id;
            leave.name = req.user.name;
            leave.username = req.user.username;
            leave.save();

            return res.status(200).json({
                leave,
                message: "Leave added successfully",
            });
        });
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Cannot add leave",
        });
    }
});

router.put("/:id", auth, async (req, res) => {
    try {
        const leave = await Leave.findById(req.params.id);
        if (!leave) return res.status(400).json({ message: "Leave not found" });
        const editLeave = await Leave.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.json({
            editLeave,
            message: "Leave application processed successfully",
        });
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Cannot edit leave",
        });
    }
});

module.exports = router;
