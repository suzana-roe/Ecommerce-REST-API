const pool = require('../../db');
const queries = require('./queries');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    pool.query(queries.getUserById, [user_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUser = (req, res) => {
    const {first_name} = req.body;
    pool.query(queries.checkNameExists, [first_name], (error, results) => {
        if (results.rows.length) {
            res.send("User already exists")
        }
        pool.query(queries.addUser, [first_name], (error, results) => {
            if (error) throw error;
            res.status(201).send("user created successfully");
        }
        );
    });
};

const removeUser = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    pool.query(queries.removeUser, [user_id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("user does not exist in the database");
        }
        pool.query(queries.removeUser, [user_id], (error, results) => {
            if (error) throw error;
            res.status(200).send("user removed successfully");
        });
    });
};

const updateUser = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    const {first_name} = req.body;

    pool.query(queries.getUserById, [user_id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist in the database");
        }

        pool.query(queries.updateUser, [first_name, user_id], (error, results) => {
            if (error) throw error;
            res.statys(200).send("user updated successfully");
        });
    });
};

module.exports = {
    getUsers,
    getUserById,
    addUser,
    removeUser,
    updateUser,
};