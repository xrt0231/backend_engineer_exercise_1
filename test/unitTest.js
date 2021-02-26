//Unit test part

//Load unit test module here we use 'Mocha'
var assert = require('assert');

//Load functions from digitsComma and pipeFunction
var comma = require('../apps/digitsComma');
var pipe = require('../apps/pipeFunction');

//Test of digitsComma function
it('Mark every three digits with comma', function(){
    let testComma = comma.commaEveryThreeDigits(123456.78);
        assert.strictEqual(testComma, '123,456.78');
});

//Test of pipe function
var pipe = require('../apps/pipeFunction');

it('Pipe functions with indefinite length', function(){
    let testPipe = pipe.operationName('thisIsATest');
        assert.strictEqual(testPipe, 'thisis');
});