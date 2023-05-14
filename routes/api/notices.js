const express = require("express");
const router = express.Router();

const ctrlWrapper = require("../../decorators/ctrlWrapper");
const authenticate = require("../../middleware/authenticate");

const {
	add,
	getCategory,
	getOne,
	getByTitle,
	getByOwnerId,
	del,
} = require("../../controllers/notices");

const {
	addNoticeValidation,
	getNoticeCategoryValidation,
} = require("../../middleware/noticeValidation");

router.get("/", getNoticeCategoryValidation, ctrlWrapper(getCategory));
router.get("/:id", ctrlWrapper(getOne));
router.get("/find", ctrlWrapper(getByTitle));
router.get("/user", authenticate, ctrlWrapper(getByOwnerId));
router.post("/", authenticate, addNoticeValidation, ctrlWrapper(add));
router.delete("/:id", authenticate, ctrlWrapper(del));

module.exports = router;