const router = require("express").Router();
const { get } = require("axios");
const { size } = require("lodash");
const Joi = require("joi");
const URL = require("../config");

router.get("/all-characters", async (_, res) => {
  try {
    const {
      data: { results },
    } = await get(URL);

    const charactersInfo = results.map(
      ({ id, name, status, species, gender, origin, image, episode }) => {
        return {
          id,
          name,
          status,
          species,
          gender,
          origin,
          image,
          episodeSize: size(episode),
        };
      }
    );
    
    res.status(200).json(charactersInfo);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.get("/characters");

module.exports = router;
