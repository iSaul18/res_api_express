const { request, response } = require("express");

const getUsers = (req = request, res = response) => {
    const params = req.query;

    res.json({
        msg: "Get API! (Controller)",
        ...params,
    });
};

const createUser = (req = request, res = response) => {
    const data = req.body;

    res.json({
        msg: "Post API! (Controller)",
        body: data,
        name: data.name,
    });
};

const updateUser = (req = request, res = response) => {
    const id = req.params.id;
    res.json({
        msg: "Put API! (Controller)",
        data: "id: " + id + " updated!",
    });
};

const deleteUser = (req = request, res = response) => {
    res.json({
        msg: "Delete API! (Controller)",
    });
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};
