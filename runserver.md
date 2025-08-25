# SCS Sails App

A lightweight Sails.js application with valid dependencies and proper structure.

## Features

- ✅ Lightweight Sails.js setup
- ✅ Valid dependencies (no hallucinated packages)
- ✅ Proper MVC structure
- ✅ Security guardrails
- ✅ Health check endpoint
- ✅ Basic user model and service
- ✅ Authentication policy
- ✅ Custom responses
- ✅ Simple frontend with CSS/JS

## Quick Start

### Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd scs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:1337`

### Production

For production deployment:

```bash
npm start
```

## Project Structure

```
scs/
├── api/
│   ├── controllers/     # Request handlers
│   ├── models/         # Data models
│   ├── services/       # Business logic
│   ├── policies/       # Authentication/authorization
│   ├── responses/      # Custom response helpers
│   └── helpers/        # Utility functions
├── assets/
│   ├── css/           # Stylesheets
│   ├── js/            # Client-side JavaScript
│   └── images/        # Static images
├── config/            # Configuration files
├── views/             # EJS templates
└── app.js            # Application entry point
```

## API Endpoints

- `GET /` - Homepage (serves HTML or JSON based on Accept header)
- `GET /health` - Health check endpoint
- `GET /api/v1/users` - List users (requires authentication)

## Configuration

Key configuration files:

- `config/app.js` - Application settings
- `config/routes.js` - Route definitions
- `config/datastore.js` - Database configuration
- `config/http.js` - HTTP server settings

## Security Features

- Input validation on all endpoints
- CORS configuration
- CSRF protection (configurable)
- Secure session handling
- Authentication policies
- No hardcoded secrets

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm run build` - Build assets
- `npm run lint` - Run ESLint

### Adding New Features

1. **Controllers**: Add to `api/controllers/`
2. **Models**: Add to `api/models/`
3. **Services**: Add to `api/services/`
4. **Policies**: Add to `api/policies/`
5. **Routes**: Update `config/routes.js`

## Dependencies

### Core Dependencies
- `sails` - Sails.js framework
- `sails-hook-orm` - Object-relational mapping
- `sails-hook-sockets` - WebSocket support
- `sails-hook-http` - HTTP server
- `sails-hook-responders` - Response handling
- `sails-hook-grunt` - Asset pipeline (disabled)
- `sails-hook-policies` - Policy system
- `sails-hook-validation` - Data validation
- `sails-hook-cors` - CORS support
- `sails-hook-security` - Security features

### Development Dependencies
- `eslint` - Code linting
- `mocha` - Testing framework

## Environment Variables

- `PORT` - Server port (default: 1337)
- `HOST` - Server host (default: 0.0.0.0)
- `NODE_ENV` - Environment (development/production)
- `SESSION_SECRET` - Session secret key
- `ALLOWED_ORIGINS` - CORS allowed origins (comma-separated)

## License

MIT
