#!/bin/bash

# Med-Care Environment Setup Script
# This script helps set up your development environment securely

set -e

echo "🏥 Med-Care Environment Setup"
echo "=============================="

# Check if .env already exists
if [ -f ".env" ]; then
    echo "⚠️  .env file already exists!"
    read -p "Do you want to overwrite it? (y/N): " -r
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Setup cancelled."
        exit 0
    fi
fi

# Copy template
echo "📋 Copying .env.example to .env..."
cp .env.example .env

echo "✅ .env file created!"
echo ""
echo "🔐 Security Setup Required:"
echo ""
echo "1. Edit .env file and update the following values:"
echo "   - JWT_SECRET (use a strong 64+ character secret)"
echo "   - POSTGRES_PASSWORD (use a strong password)"
echo "   - API_KEY (if you have one)"
echo "   - SMTP credentials (if using email features)"
echo ""
echo "2. Generate a secure JWT secret:"
echo "   node -e \"console.log(require('crypto').randomBytes(64).toString('hex'))\""
echo ""
echo "3. Never commit the .env file to version control!"
echo ""
echo "4. For GitHub Actions, add these secrets to your repository:"
echo "   - DOCKER_USERNAME"
echo "   - DOCKER_PASSWORD"
echo "   - JWT_SECRET"
echo "   - DATABASE_URL (for production)"
echo ""
echo "📖 For detailed instructions, see SECURITY.md"
echo ""

# Check if Node.js is available for JWT generation
if command -v node &> /dev/null; then
    echo "🔑 Here's a secure JWT secret you can use:"
    echo "   $(node -e "console.log(require('crypto').randomBytes(64).toString('hex'))")"
    echo ""
fi

echo "✨ Setup complete! Remember to:"
echo "   1. Edit .env with your actual values"
echo "   2. Run 'npm install' to install dependencies"
echo "   3. Run 'npm run dev' to start development"
echo ""
echo "Happy coding! 🚀"
