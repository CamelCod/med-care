# 

4. Refer to `SECURITY.md` for detailed troubleshooting
5. Look at GitHub Actions logs for error details
6. Verify Docker Hub credentials
7. Check that secret names match exactly (case-sensitive)
   If you encounter issues:

## 🆘 Need Help?

- **GitHub secrets are for CI/CD and production**
- **The `.env` file is for local development only**
- **Rotate secrets regularly**
- **Use different secrets for development and production**
- **Never commit actual secrets to your repository**

## ⚠️ Security Notes

---

4. Watch your workflow run and push to Docker Hub

5. Check the **Actions** tab in your GitHub repository

```sh
git push origin main
git commit -m "Test CI/CD pipeline"
git add .
```bash
```

6. Commit and push to main branch:

7. Make a small change to your code

### 5. Testing

- ✅ Use secure secrets (never exposed in logs)
- ✅ Push the image to Docker Hub automatically
- ✅ Build your Docker image on every push to main
   After adding secrets, your GitHub Actions workflow will:

### 4. Verify Setup

8. Use this token as your `DOCKER_PASSWORD` secret
9. Copy the token (you can only see it once!)
10. Give it a name like "GitHub Actions"
11. Click **New Access Token**
12. Click **Security** tab
13. Click your username (top right) → **Account Settings**
14. Sign in to your account
15. Go to [Docker Hub](https://hub.docker.com)

### 3. How to Create Docker Hub Access Token

- **Value:** Your email service app password
- __Name:__ `SMTP_PASS`

   - **Value:** Your email service username

- __Name:__ `SMTP_USER`

#### For Email Services (If Using)

- **Value:** Your production database password
- __Name:__ `POSTGRES_PASSWORD`

   - **Value:** `postgres://username:password@host:port/database`

- __Name:__ `DATABASE_URL`

#### For Production Database (When Deploying)

```md
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```bash
- **Value:** Use the generated secret from setup script or generate new one:
- **Name:** `JWT_SECRET`
#### For Application Security (Recommended)

- To create: Docker Hub → Account Settings → Security → New Access Token
- **Value:** Your Docker Hub **access token** (NOT your password!)
- **Name:** `DOCKER_PASSWORD`  

- **Value:** Your Docker Hub username
- **Name:** `DOCKER_USERNAME`
#### For Docker Hub CI/CD (Required)


4. Click **New repository secret**
3. Click **Secrets and variables** → **Actions** (left sidebar)
2. Click **Settings** (top menu)
1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/med-care`

## Quick Setup Steps
GitHub Repository Secrets Setup Guide
```