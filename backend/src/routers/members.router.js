const router = require("express").Router();

const {
  getAllMembers,
  getCreateMember,
  postCreateMember,
  getEditMemberById,
  postEditMemberById,
  deleteMember,
} = require("../controller/members.controller");

router.get("/all", getAllMembers);
router.route("/create").get(getCreateMember).post(postCreateMember);
router.route("/edit/:id").get(getEditMemberById).post(postEditMemberById);
router.delete("/delete/:id", deleteMember);

module.exports = router;
