db.superheroes.find({ $and : [{ "race": { $not: { $eq: "Human" } } }, { "aspects.height": { $not: { $gt: 180 } } }] })

db.superheroes.find({ $nor: [{ race: "Human" }, { "aspects.height": { $gt: 180 } }]})
