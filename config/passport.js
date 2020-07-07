var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
  console.log( 'serializeUser' );
  done(null, user.username);
});
passport.deserializeUser(function(username, done) {
  console.log( 'deserializeUser' );
  done(null, username);
});

passport.use( 'branch', new LocalStrategy({
    usernameField : 'adminId',
    passwordField : 'adminPassword',
    passReqToCallback : true
  },function ( req, username, password, done ) {    
    var user = {};
    user.username = username;
    user.password = password;
    console.log(username +  password);
    return done(null, user);
  }
));
module.exports = passport;
