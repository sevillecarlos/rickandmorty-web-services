const { size } = require("lodash");
module.exports = characterInfoFormatter = (data) =>
  data.map(({ id, name, status, species, gender, origin, image, episode }) => {
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
  });
