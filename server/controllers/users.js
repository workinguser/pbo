const { response } = require("express");
const { firestoreDB, getDoc, doc } = require("../firebase/firebase-config");

const createUser = async (req, res = response) => {
   const { appleId, pass } = req.body;

   try {
      if (typeof appleId !== "string" || typeof pass !== "string") {
         return res.json({ ok: false, msg: "Invalid appleId or password" });
      }

      const usersSnap = await firestoreDB.collection("policia-bo").get();

      const users = [];

      usersSnap.forEach((user) => {
         users.push({ id: user.id, ...user.data() });
      });

      if (users.some((user) => user.appleId === appleId)) {
         return res.json({ ok: false, msg: "The user already exist" });
      }

      const createdUser = await firestoreDB
         .collection("policia-bo")
         .add({ appleId, pass });

      res.status(201).json({ appleId, pass, id: createdUser.id });
   } catch (error) {
      console.log(error);
      res.status(500).json("Internal server error");
   }
};

module.exports = { createUser };
