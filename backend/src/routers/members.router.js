const router = require("express").Router();

const {
  getAllMembers,
  postCreateMember,
  getEditMemberById,
  postEditMemberById,
  deleteMember,
} = require("../controller/members.controller");

router.get("/all", getAllMembers);
router.post("/create", postCreateMember);
router.get("/edit/:id", getEditMemberById);
router.post("/edit/:id", postEditMemberById);
router.delete("/delete/:id", deleteMember);

module.exports = router;
