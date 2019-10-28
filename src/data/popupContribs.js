const alyssa = {
  name: "Alyssa Pursel",
  facebook: "alyssapurselcrochetandcraft"
};

const pixelstudio = {
  name: "Pixels2dio",
  etsy: "PIXELs2dio",
  twitter: "Magmakensuke",
  facebook: "pixels2dio"
};

const popupContribs = {
  DedenneCordKeeper: {
    prize: "Dedenne Cord Keeper",
    name: "Dystortion.tv"
  },
  Diglet: {
    prize: "Diglet Plush",
    name: "Dystortion.tv"
  },
  Ditto: {
    prize: "Ditto Plush",
    ...alyssa
  },
  StarmanStoutGlossPaper: {
    prize: "Starman Stout Gloss Paper",
    ...pixelstudio
  },
  MythraPyra: {
    prize: "Mythra & Pyra Print",
    ...pixelstudio
  },
  SSBUMural: {
    prize: "Huge SSBU Mural",
    ...pixelstudio
  },
  WindwakerCanvas: {
    prize: "Windwaker Canvas (Two Winners)",
    ...pixelstudio
  },
  LinkClimbing: {
    prize: "Breath of the Wild Mural",
    ...pixelstudio
  },
  LinkMotorcycle: {
    prize: "Breath of the Wild Fifth Divine Beast Print",
    ...pixelstudio
  }
};

export default popupContribs;
