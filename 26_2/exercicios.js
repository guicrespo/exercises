db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            31557600000
          ]
        }
      }
    }
  },
  // { $match: { idade: { $gte: 18, $lte: 25 } } },
  // { $count: "jovens" }
  {
    $lookup: {
      from: "vendas",
      let: { id_cliente: "$clienteId" },
      pipeline: [
        {
          $match:
          {
            $expr: { $eq: ["$clienteId", "$$id_cliente"] },
            dataVenda: { $gte: ISODate("2019-06-01"), $lte: ISODate("2020-03-31") }
          }
        },
        {
          $project: { compras: "$itens" }
        },
      ],
      as: "compras"
    }
  }
]).itcount();
