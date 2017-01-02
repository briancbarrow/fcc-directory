const express = require('express')
const mongoose = require('mongoose')
const FewestGuesses = require('./models/guesses')
const bodyParser = require('body-parser')
const url = require('./config')

let app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = 8080
const
