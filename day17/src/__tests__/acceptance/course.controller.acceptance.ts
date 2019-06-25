import { Day17Application } from "../..";
import { Client, expect } from "@loopback/testlab";
import { setupApplication } from "./test-helper";


describe('Courses Feature', () => {
  let app: Day17Application;
  let client: Client;

  before('setupApplication', async () => {
    ({ app, client } = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('Should return list of courses via GET', async () => {
    await client.post('/courses').send({
      name: 'Full Stack'
    });
    
    const response = await client.get('/courses');
    expect(response.status).to.equal(200);

    const responseBody = response.body;
    expect(responseBody).to.be.an.Array();
    expect(responseBody.length).to.be.greaterThan(0);
  });

  it('Should create a new Course using POST', async () => {
    const response = await client.post('/courses').send({
      name: 'Full Stack'
    });
    expect(response.status).to.equal(204);
  });

  describe('smaller thing', () => {
    it('does smth else', () => {
      return true;
    });
  });
});




