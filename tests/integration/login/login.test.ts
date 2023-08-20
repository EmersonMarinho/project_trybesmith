import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginService from '../../../src/services/login.service';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should fail when the password is incorrect', async function () {
    const mockUser = {
      id: 1,
      username: 'Emerson',
      level: 15,
      vocation: 'Elite Knight',
      password: 'TrybePassword'
    };

    const mockUserRequired = UserModel.build(mockUser);
    sinon.stub(UserModel, 'findOne').resolves(mockUserRequired);

    const response = await chai.request(app)
      .post('/login')
      .send({ username: mockUser.username, password: 'sapatilha' });

    expect(response).to.have.status(401);
  });

  it('should return 200 and the token', async function () {
      const user = { username: 'user1', password: 'password1' };
      const loginMock = sinon.mock(loginService);
      loginMock.expects('login').once().withArgs(user).resolves({ status: 200, message: 'token' });
  });

  it('should return 400 when username is not provided', async function () {
      const user = { password: 'password1' };
      const loginMock = sinon.mock(loginService);
      loginMock.expects('login').once().withArgs(user).resolves({ status: 400, message: '"username" and "password" are required' });
  });

  it('should return 400 when password is not provided', async function () {
      const user = { username: 'user1' };
      const loginMock = sinon.mock(loginService);
      loginMock.expects('login').once().withArgs(user).resolves({ status: 400, message: '"username" and "password" are required' });
  });

  it('should return 401 when username or password is invalid', async function () {
      const user = { username: 'user1', password: 'password1' };
      const loginMock = sinon.mock(loginService);
      loginMock.expects('login').once().withArgs(user).resolves({ status: 401, message: 'Username or password invalid' });
  });

});
