const request = require('supertest');
const app = require('../server');

describe('Med-Care API', () => {
  describe('GET /', () => {
    it('should return welcome message', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);
      
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Welcome to Med-Care API');
      expect(response.body).toHaveProperty('version');
      expect(response.body).toHaveProperty('endpoints');
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);
      
      expect(response.body).toHaveProperty('status');
      expect(response.body.status).toBe('OK');
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('environment');
    });
  });

  describe('GET /api', () => {
    it('should return API information', async () => {
      const response = await request(app)
        .get('/api')
        .expect(200);
      
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Med-Care API v1.0.0');
      expect(response.body).toHaveProperty('status');
      expect(response.body.status).toBe('active');
      expect(response.body).toHaveProperty('features');
      expect(Array.isArray(response.body.features)).toBe(true);
    });
  });

  describe('GET /nonexistent', () => {
    it('should return 404 for non-existent routes', async () => {
      const response = await request(app)
        .get('/nonexistent')
        .expect(404);
      
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Not Found');
      expect(response.body).toHaveProperty('message');
    });
  });
});