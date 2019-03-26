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

var users = require ('./users').items;

var findUser = function (name, password){
  return users.find (function (item){
  	return item.name === name && item.password === password;
  })
}

//Login interface
app.post ('/login', function (req, res, next){
  var sess = req.session;
  var user = findUser (req.body.name, req.body.password);

  if (user){
  	req.session.regenerate (function (err){
  	  if (err){
  	    return res.json ({ ret_code: 2, ret_msg: '登入失敗'});
  	  }
  		req.session.loginUser = user.name;
  		res.json ({ ret_code: 0, ret_msg: '登入成功'});
  	});
  	  res.json ({ ret_code: 1, ret_msg: '帳號或密碼認證錯誤'});
  }
});

//Logout interface
app.post ('/logout', function (req, res, next){
  req.session.distroy (function (err){
  	if (err){
  	  res.json ({ ret_code: 2, ret_msg: '退出登入失敗'});
  	  return;
  	}
  	res.clearCookie(identityKey);
  	res.redirect('/');
  });
});

app.get ('/', function (req, res, next){
  var sess = req.session;
  var loginUser = sess.loginUser;
  var isLogined = !!loginUser;

  res.render ('index', {
  	isLogined: isLogined,
  	name: loginUser || ''
  });
});

