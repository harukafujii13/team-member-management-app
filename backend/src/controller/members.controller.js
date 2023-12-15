const Member = require("../model/member.model");

exports.getAllMembers = (req, res) => {
  Member.find()
    .then(({ rows }) => {
      res.json(rows);
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).json({ error: "Server Error" });
    });
};

exports.postCreateMember = (req, res) => {
  const { firstName, lastName, email, phoneNum, role } = req.body;
  const newMember = new Member(firstName, lastName, email, phoneNum, role);

  newMember
    .save()
    .then(() => res.status(201).json({ message: "Member created" }))
    .catch((err) => {
      console.error("Error creating member:", err);
      // console.error(err.message);
      res.status(500).json({ error: "Error creating member" });
    });
};

exports.getEditMemberById = (req, res) => {
  const id = req.params.id;
  Member.findById(id)
    .then(({ rows }) => {
      if (rows.length > 0) {
        res.json(rows[0]);
      } else {
        res.status(404).json({ error: "Member not found" });
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).json({ error: "Server Error" });
    });
};

exports.postEditMemberById = (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email, phoneNum, role } = req.body;
  const dataToUpdate = { id, firstName, lastName, email, phoneNum, role };

  Member.updateOne(dataToUpdate)
    .then(() => res.json({ message: "Member updated" }))
    .catch((err) => {
      console.error(err.message);
      res.status(500).json({ error: "Error updating member" });
    });
};

exports.deleteMember = (req, res) => {
  const id = req.params.id;
  Member.deleteOne(id)
    .then(() => res.json({ message: "Member deleted" }))
    .catch((err) => {
      console.error(err.message);
      res.status(500).json({ error: "Error deleting member" });
    });
};
