const { initializeApp } = require("firebase-admin/app");
const { credential } = require("firebase-admin");
const firebaseJSON = require("./firebase.json");

const { getDoc, doc } = require("firebase/firestore");

const { getFirestore } = require("firebase-admin/firestore");

initializeApp({ credential: credential.cert(firebaseJSON) });

const firestoreDB = getFirestore();

module.exports = { firestoreDB, getDoc, doc };
