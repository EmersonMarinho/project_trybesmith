import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 201 and the created product', async function () {
    const product = { name: 'Product 1', description: 'Description 1', price: 10 };
    const productMock = sinon.mock(ProductModel);
    productMock.expects('create').once().withArgs(product).resolves(product);

    const response = await chai.request(app).post('/products').send(product);

    expect(response.status).to.equal(201);
    expect(response.body).to.deep.equal(product);
    productMock.verify();
  });
});
