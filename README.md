# User CRUD API with Clean Architecture

A clean architecture implementation of a user management API built with NestJS and TypeScript.

## Features

- Health check endpoint
- Ready for CRUD operations implementation
- Modular structure following clean architecture principles

## Technologies

- [NestJS](https://nestjs.com/) - Framework for building efficient, scalable Node.js server-side applications
- TypeScript - Strongly typed programming language
- ES Modules - JavaScript modules standard
- RxJS - Library for reactive programming

## Installation

```bash
# Clone the repository
git clone https://github.com/nunes-nd/user_crud_clean.git

# Install dependencies
npm install

# Development mode
npm run dev

# Build for production
npm run build

# Start in production
npm start
```

## API Endpoints

### Health Check
```
GET /api/health
```

**Response:**
```json
{
  "status": "ok"
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.