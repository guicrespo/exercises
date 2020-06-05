1.
db.clientes.aggregate([
  { $match: { sexo: "MASCULINO" } }
]);

2.
db.clientes.aggregate([
  {
    $match: {
      $and: [
        { sexo: "FEMININO" },
        {
          dataNascimento: {
            $gte: ISODate('1995-01-01'),
            $lte: ISODate('2005-12-31')
          }
        }
      ]
    }
  }
]);

3.
db.clientes.aggregate([
  {
    $match: {
      $and: [
        { sexo: "FEMININO" },
        {
          dataNascimento: {
            $gte: ISODate('1995-01-01'),
            $lte: ISODate('2005-12-31')
          }
        }
      ]
    }
  },
  { $limit: 5 }
]);

4.
db.clientes.aggregate([
  {
    $match: { "endereco.uf": "SC" }
  },
  {
    $group: {
      _id: "$endereco.uf",
      count: { $sum: 1 }
    }
  }
]);

5.
db.clientes.aggregate([
  { $group: { _id: "$sexo", total: { $sum: 1 } } }
]);

6.
db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: "$sexo",
        uf: "$endereco.uf"
      },
      total: { $sum: 1 }
    }
  },
  { $sort: { "_id.uf": 1, "_id.sexo": 1 } }
]);

7.
db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: "$sexo",
        uf: "$endereco.uf"
      },
      total: { $sum: 1 }
    }
  },
  { $sort: { "_id.uf": 1, "_id.sexo": 1 } },
  {
    $project: {
      _id: 0,
      estado: "$_id.uf",
      sexo: "$_id.sexo",
      total: 1
    }
  }
]);

8.
db.vendas.aggregate([
  { $match: { status: { $in: ["ENTREGUE", "EM SEPARAÇÃO"] } } },
  { $group: { _id: "$clienteId", total: { $sum: "$valorTotal" } } },
  { $sort: { total: -1 } },
  { $limit: 5 }
]);

9.
db.vendas.aggregate([
  {
    $match: {
      status: { $in: ["ENTREGUE", "EM SEPARACAO"] },
      dataVenda: { $gte: ISODate("2019-01-01"), $lte: ISODate("2019-12-31") }
    }
  },
  { $group: { _id: "$clienteId", total: { $sum: "$valorTotal" } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
]);

10.
db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1
      }
    }
  },
  { $match: { totalCompras: { $gt: 5 } } },
  { $group: { _id: null, clientes: { $sum: 1 } } },
  { $project: { _id: 0 } }
]);

// outra forma
db.vendas.aggregate([
  { $group: { _id: "$clienteId", compras: { $sum: 1 } } },
  { $match: { compras: { $gt: 5 } } },
  { $count: "clientes" }
]);

11.
db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate("2020-01-01"), $lte: ISODate("2020-03-31") } } },
  { $group: { _id: "$clienteId", compras: { $sum: 1 } } },
  { $match: { compras: { $lt: 3 } } },
  { $count: "clientes" }
]);

12.
db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate("2020-01-01"), $lte: ISODate("2020-12-31") } } },
  {
    $lookup: {
      from:"clientes",
    }
  }
]);
