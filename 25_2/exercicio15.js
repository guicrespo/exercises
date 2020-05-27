db.superheroes.find({ $and: [{ "aspects.weight": { $gt: 80, $lt: 100 } }, { race: { $in: ["Human", "Mutant"] } }, { publisher: { $not: { $eq: "DC Comics" } } }] });
