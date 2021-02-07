process.env.NODE_ENV = 'test';

const chai                  = require('chai');
const expect                = chai.expect;
const Connection            = require('../config/database');
const UserModel             = require('../models/user.model');

describe('Login feature', function(){

    describe('User Model', function(){

        it('Should return user info (including password) when the email is found in the database');

        it("Should return false when email doesn't exist in database");

        it("Should return true when email and password is correct");

        it('Should return the expected redirect_url (/success page) on success');

        it('Should return an error message saying: Email is required, when email is missing');

        it('Should return an error message saying: Password is required, when password is missing');

        it('Should return an error message saying: Email and password is required, when all fields are missing');
        
    });

    after(function(){
        /* close DB connection */ 
        Connection.end();
    });
});

