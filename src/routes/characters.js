const router = require("express").Router();
const { get } = require("axios");
const characterInfoFormatter = require("../helpers/");
const { isEqual } = require("lodash");
const { URL, STATUS_QUERY } = require("../config");
const { characterStatusValidator } = require("../validation");
const Joi = require("joi");

router.get("/all-characters", async (_, res) => {
  try {
    const {
      data: { results },
    } = await get(URL);

    const charactersInfo = characterInfoFormatter(results);

    res.status(200).json(charactersInfo);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.get("/character/:id", async (req, res) => {
  const {
    params: { id },
  } = req;

  const result = Joi.validate(id, characterStatusValidator);
  const charactersInfo = characterInfoFormatter(result, id);
  const valid = error == null;

  try {
    const {
      data: { results },
    } = await get(`${URL}${STATUS_QUERY}${id}`);

    res.status(200).json(charactersInfo);
  } catch (error) {
    console.log("error", error);
    res.status(400).send({ error });
  }
});

module.exports = router;
