const route = require('express').Router();
const { Router } = require('express');
const {articles, users} = require('./controllers')

//router-article
route.get('/', aricles.index);
route.post('/article', )