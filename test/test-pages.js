var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../server');

chai.use(require('chai-json'));


chai.use(chaiHttp);

describe('Init Test 0', function(){

    it('Check app status', function(done){
        chai.request(server).get('/test1').end((err,res)=>{
            should.not.exist(err);
            res.should.have.status(200);
            done()
        });
    })
})



it('First test', function(done){
    chai.request(server).get('/test1').end((err,res)=>{
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('test');
        res.body.should.have.property('test').eql('Testing!');
        done()
    });
})


it('Second test', function(done){
    chai.request(server).get('/test2').end((err,res)=>{
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.should.have.property('type');
        res.body.should.have.property('size');
        res.body.should.have.property('name').eql('extract_colors.png');
        res.body.should.have.property('type').eql('image/png');
        res.body.should.have.property('size').eql(613553);
        done()
    });
})



// {"name":"extract_colors.png","type":"image/png","size":613553}
// it('Second test', function(done){
//     request('http://localhost:3000/test2', function(error, response, body){
//         console.log(response.body);
//         // expect(response.body).to.jsonFile();

//         done();
//     })
// })