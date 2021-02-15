const chai                  = require('chai');
const expect                = chai.expect;
const UserModel             = require('../models/user.model');

describe('Login feature', function(){

    describe('User Model', function(){

        it('Given email and password as input, it should return user info (including password) when the email is found in the database');

        it("Given email and password as input, it should return false when email doesn't exist in database.");

        it("Given email and password as input, it should return true when email and password is correct");

        it('Given email and password as input, it should return the expected redirect_url (/success page) on success');

        it('Given password as input, it should return an error message saying: Email is required, when email is missing');

        it('Given email as input, it should return an error message saying: Password is required, when password is missing');

        it('Given empty input, it should return an error message saying: Email and password is required, when all fields are missing');
        
    });
});

