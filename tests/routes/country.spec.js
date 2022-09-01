/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: 'Milanea a la napolitana',
  resumen:'super milanesa',
  nivel:10,
  pasos:'1:comprarla en la carniceria,2:calentar aceite en una sarte,3:mandarla a la sarten hasta q se doren',
  img:'asdd'
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
      
    );
  });
});

