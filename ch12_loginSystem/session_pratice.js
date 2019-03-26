var express = require ('express');
var app = express ();
var session = require ('express-session');
var FileStroe = require ('session-file-store');

var identityKey = 'skey';

app.use (session({
	name: identityKey,
	secret: 'mashroom',
	store: new FileStroe (),
	saveUninitialized: false,
	resave: false,
	cookie: { maxAge: 600 * 1000} // ten minutes expired.
}));