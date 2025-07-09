# Med-Care Application

A containerized medical care application built with Node.js and Docker.

## Features

- 🏥 Medical care management system
- 🐳 Fully containerized with Docker
- 🚀 CI/CD pipeline with GitHub Actions
- 📊 Health monitoring endpoints
- 🔒 Security best practices implemented

## Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for local development)
- Git

## Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd med-care

# Start all services
docker-compose up

# Start in detached mode
docker-compose up -d
```

### Local Development

```bash
# Build the image
docker build -t med-care .

# Run the container
docker run -p 3000:3000 med-care
```

### Node.js Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

## API Endpoints

- `GET /` - Welcome message and API info
- `GET /health` - Health check endpoint
- `GET /api` - API status and features

## Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/medcare
```

## Docker Services

- **backend**: Node.js API server (port 3000)
- **db**: PostgreSQL database (port 5432)

## CI/CD Pipeline

The GitHub Actions workflow automatically:
- Builds the Docker image on push to main
- Pushes to Docker Hub registry
- Runs tests and security checks

Add these secrets to your GitHub repository:
- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub access token

## Development

Available npm scripts:
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container
- `npm run docker:compose` - Start with Docker Compose

## Project Structure

```
med-care/
├── .github/workflows/     # GitHub Actions workflows
├── public/               # Static frontend files
├── server.js             # Main application entry point
├── package.json          # Node.js dependencies
├── Dockerfile           # Docker image configuration
├── docker-compose.yml   # Multi-service configuration
├── .gitignore          # Git ignore rules
├── .dockerignore       # Docker ignore rules
└── README.md           # This file
```

## Security

- Helmet.js for security headers
- CORS protection
- Input validation and sanitization
- Environment variable protection
- Docker security best practices

## Deployment

### Heroku

```bash
heroku create med-care-app
heroku stack:set container
heroku container:push web
heroku container:release web
```

### AWS ECS / Kubernetes

See deployment guides in the `/docs` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
