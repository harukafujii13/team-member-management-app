const Member = require("../model/member.model");

exports.getAllMembers = (req, res) => {
  Member.find()
    .then(({ rows }) => {
      res.render("members", { model: rows });
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Server Error");
    });
};

exports.getCreateMember = (req, res) => {
  res.render("create", { model: {} });
};

exports.postCreateMember = (req, res) => {
  const { firstName, lastName, email, phoneNum, role } = req.body;
  const newMember = new Member(firstName, lastName, email, phoneNum, role);

  newMember
    .save()
    .then(() => res.redirect("/members/all"))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Error creating member");
    });
};

exports.getEditMemberById = (req, res) => {
  const id = req.params.id;
  Member.findById(id)
    .then(({ rows }) => {
      if (rows.length > 0) {
        res.render("edit", { model: rows[0] });
      } else {
        res.status(404).send("Member not found");
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Server Error");
    });
};

exports.postEditMemberById = (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email, phoneNum, role } = req.body;
  const dataToUpdate = { id, firstName, lastName, email, phoneNum, role };

  Member.updateOne(dataToUpdate)
    .then(() => res.redirect("/members/all"))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Error updating member");
    });
};

exports.deleteMember = (req, res) => {
  const id = req.params.id;
  Member.deleteOne(id)
    .then(() => res.redirect("/members/all"))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Error deleting member");
    });
};
