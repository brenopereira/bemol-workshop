const mongoose = require("mongoose");

const Client = mongoose.model("Client");

module.exports = {
  async index(req, res) {
    var aggregate = Client.aggregate();

    const clientes = Client.aggregatePaginate(aggregate, {
      page: req.query.page,
      limit: 1
    })
      .then(function(result) {
        res.json({
          clients: result.docs,
          page: result.page,
          total: result.totalDocs,
          next: result.nextPage,
          previous: result.prevPage
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  async show(req, res) {
    const client = await Client.findById(req.params.id);

    return res.json(client);
  },
  async create(req, res) {
    const client = await Client.create({
      name: "Breno Pereira",
      phone: "+5592900000000"
    });

    return res.status(200).send(client);
  },
  async delete(req, res) {
    await Client.findByIdAndDelete(req.params.id);

    return res.send("Deleted with success");
  }
};
