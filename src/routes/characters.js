const router = require("express").Router();
const { get } = require("axios");
const characterInfoFormatter = require("../helpers/");
const { isEqual } = require("lodash");
const { URL, STATUS_QUERY } = require("../config");
const {
  characterStatusValidator,
} = require("../validators/character-status.validator");

router.get("/all-characters", async (_, res) => {
  try {
    const {
      data: { results },
    } = await get(URL);

    const charactersInfo = characterInfoFormatter(results);

    res.status(200).json(charactersInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/character/:id", async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const { error } = characterStatusValidator.validate({ id });
    if (error) throw new Error(error);

    if (!isEqual(id, "alive"))
      throw new Error("The only status allow is Alive");

    const {
      data: { results },
    } = await get(`${URL}${STATUS_QUERY}${id}`);

    const charactersInfo = characterInfoFormatter(results);

    res.status(200).json(charactersInfo);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
