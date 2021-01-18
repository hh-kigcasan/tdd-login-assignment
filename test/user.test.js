process.env.NODE_ENV = 'test';

const chai                  = require('chai');
const chaiHttp              = require('chai-http');
const expect                = chai.expect;
const Connection            = require('../config/database');
const UserModel             = require('../models/user.model');
const App                   = require ('../app');

chai.use(chaiHttp);

describe('Login feature', function(){

    describe('User Model', function(){

        it('Should return expected data when the email is found in the database');

        it("Should return expected data when email doesn't exist in database");

        it("Should return expected data when email and password is correct");

        it('Should return the expected redirect_url on success');

        it('Should return expected data when email is missing');

        it('Should return expected data when password is missing');

        it('Should return expected data when all fields are missing');
        
    });

    after(function(){
        /* close DB connection */ 
        Connection.end();
    });
});

