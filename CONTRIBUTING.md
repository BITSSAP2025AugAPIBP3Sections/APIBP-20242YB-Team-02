 # Contributing to Practice Platform

Thank you for your interest in contributing to Practics Platform! We welcome contributions from the community and are grateful for your support in making financial privacy accessible to everyone.

This document provides guidelines for contributing to the project. Please take a moment to review these guidelines before submitting your contributions.

##  Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing Requirements](#testing-requirements)
- [Documentation](#documentation)
- [Community](#community)

##  Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive experience for everyone. We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Positive behaviors include:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behaviors include:**
- Trolling, insulting/derogatory comments, and personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

### Enforcement

Instances of unacceptable behavior may be reported by contacting the project team at antonyberlin2003@gmail.com. All complaints will be reviewed and investigated promptly and fairly.

##  Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v18 or higher
- **npm** or **pnpm** (latest version)
- **Git**
- **A code editor** (VS Code recommended)
- **Python** v3.11 or higher 
- **Docker & Docker Compose**
- **Supabase account**
- **Google Gemini API key**

### Initial Setup

1. **Fork the Repository**
   ```bash
   # Click the "Fork" button on GitHub
   # Then clone your fork
   git clone https://github.com/BITSSAP2025AugAPIBP3Sections/APIBP-20242YB-Team-02.git
   ```

2. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/BITSSAP2025AugAPIBP3Sections/APIBP-20242YB-Team-02.git

   ```

3. **Install Dependencies**
   ```bash
   cd frontend
   pnpm install
   cd ../api-gateway
   pip install -r requirements.txt
   cd ../user-service
   pip install -r requirements.txt
   cd ../file-service
   pip install -r requirements.txt
   cd ../question-service
   pip install -r requirements.txt
   ```

4. **Set Up Environment**
   ```bash
   
   # In each service directory
   # For each Python service
   cp .env.example .env

   # For frontend
   cp .env.example .env.local
   ```

5. **Verify Setup**
   ```bash
   # Test frontend build 
   cd frontend
   pnpm build
   
   # Test docker 
   docker-compose up --build
   ```

## 🛠️ How to Contribute

### Types of Contributions

We welcome various types of contributions:

####  Bug Reports
- Use the GitHub issue tracker
- Check if the bug has already been reported
- Include detailed steps to reproduce
- Provide environment details (OS, Node version, etc.)
- Add screenshots or error logs if applicable

####  Feature Requests
- Open an issue with the `enhancement` label
- Clearly describe the feature and its benefits
- Explain use cases and potential impact
- Discuss implementation approaches if possible

#### 📝 Documentation
- Fix typos or clarify existing documentation
- Add missing documentation
- Improve code comments
- Create tutorials or guides

#### 💻 Code Contributions
- Bug fixes
- New features
- Performance improvements
- Test coverage improvements
- Refactoring

#### 🎨 Design Contributions
- UI/UX improvements for the Next.js frontend
- Better layouts, accessibility improvements, or component design
- Branding updates (logos, color palette, typography)
- Visual documentation such as flow diagrams, architecture charts

## 🔄 Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
# Update your local main branch
git checkout main
git pull upstream main

# Create a new branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

**Branch Naming Convention:**
- `feature/` - New features (e.g., `feature/quiz-review-screen`)
- `fix/` - Bug fixes (e.g., `fix/file-upload-timeout`)
- `docs/` - Documentation updates (e.g., `docs/api-gateway-endpoints`)
- `refactor/` - Code refactoring (e.g., `refactor/api-gateway-routing`)
- `test/` - Test additions/improvements (e.g., `test/frontend-quiz-rendering`)
- `chore/` - Maintenance tasks (e.g., `chore/cleanup-env-files`)

### 2. Make Your Changes

#### For Backend Services(Fast API):
Each service has its own directory:
api-gateway/
user-service/
file-service/
question-service/

```bash

cd <service-name>

# Run the service locally
uvicorn app.main:app --reload

```

#### For Web Application Changes:

```bash
cd web

# Edit your files
# Run development server
pnpm dev

# Check TypeScript types
pnpm type-check

# Run linter (if configured)
pnpm run lint
```
# Build production
```bash 
pnpm run build
```

### 3. Write Tests

**All code contributions must include tests!**

#### Signup Tests:

```typescript
# tests/test_user_signup.py
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_user_signup():
    response = client.post("/signup", json={
        "email": "test@example.com",
        "password": "password123"
    })
    assert response.status_code == 200
    assert "id" in response.json()

```

#### Test Coverage Requirements:
- **Minimum 80% coverage** for new code
- Test happy paths and edge cases
- Test error conditions and reverts
- Test access control and permissions

### 4. Document Your Changes

- Update relevant service-level README files
- Add docstrings to Python functions
- Add TypeScript JSDoc comments
- Update main README.md if setup steps change
- Add inline comments for complex logic
- Update API documentation (OpenAPI auto-docs) if endpoints change

## 📏 Coding Standards


**Standards:**


- Follow PEP-8
- Use type hints everywhere
- Avoid business logic inside route handlers
- Handle errors with HTTPException
- Keep functions small and modular
- Use dependency injection via FastAPI’s Depends
- Use consistent naming conventions
- Log appropriately

### TypeScript/Next.js

```typescript
/**
 * Fetches quiz results for a user.
 */
export async function getQuizResults(userId: string) {
  const response = await fetch(`/api/results/${userId}`)
  return response.json()
}
```

**Standards:**
- Use TypeScript for type safety
- Use TypeScript for all files
- Use async/await
- No any unless unavoidable
- Keep components small and focused
- Extract shared logic into hooks
- Handle loading and error states
- Follow file structure conventions

### React Components

```tsx
interface QuizCardProps {
  title: string;
  onStart: () =  void;
}

export function QuizCard({ title, onStart }: QuizCardProps) {
  return (
    <div className="p-4 rounded-lg shadow">
      <h2>{title}</h2>
      <button onClick={onStart}>Start Quiz</button>
    </div>
  );
}
```

**Standards:**
- Functional components only
- Hooks for state and side-effects
- Strong typing for props + state
- Use Tailwind (if included) for styling
- Keep components composable
- Prefer server components unless interactivity required


## 📝 Commit Guidelines

### Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```bash
feat(questions): add Gemini-based MCQ generation
fix(file-service): resolve PDF parsing timeout
docs(readme): update environment setup instructions
```

### Commit Best Practices

- Write clear, descriptive commit messages
- Keep commits atomic (one logical change per commit)
- Reference issues when applicable
- Sign your commits (see CLA.md)

```bash
# Sign your commits
git commit -s -m "feat: add quiz generator"

# This adds: Signed-off-by: Your Name <your.email@example.com>
```

## 🔀 Pull Request Process

### Before Submitting

**Checklist:**
- [ ] Code follows project style guidelines
- [ ] Tests added/updated and passing
- [ ] Documentation updated
- [ ] Commits are signed (CLA compliance)
- [ ] Branch is up to date with main
- [ ] No merge conflicts
- [ ] Build succeeds
- [ ] Linter passes

### Creating a Pull Request

1. **Push Your Branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open Pull Request on GitHub**
   - Go to the Practice Platform repository
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template

3. **PR Title Format**
   ```
   <type>: Brief description of changes
   
   Example:
   feat: Add Gemini integration logic
   fix: Correct file extraction service crash
   docs: Update API gateway README
   ```

4. **PR Description Template**
   ```markdown
   ## Description
   Brief description of what this PR does.
   
   ## Type of Change
   - [ ] Bug fix (non-breaking change fixing an issue)
   - [ ] New feature (non-breaking change adding functionality)
   - [ ] Breaking change (fix or feature causing existing functionality to change)
   - [ ] Documentation update
   
   ## How Has This Been Tested?
   Describe the tests you ran and their results.
   
   ## Checklist
   - [ ] My code follows the project's style guidelines
   - [ ] I have performed a self-review of my code
   - [ ] I have commented my code, particularly in hard-to-understand areas
   - [ ] I have made corresponding changes to the documentation
   - [ ] My changes generate no new warnings
   - [ ] I have added tests that prove my fix is effective or that my feature works
   - [ ] New and existing unit tests pass locally with my changes
   - [ ] I have signed my commits (CLA compliance)
   
   ## Related Issues
   Closes #(issue number)
   
   ## Screenshots (if applicable)
   Add screenshots here
   ```

### Review Process

1. **Automated Checks**
   - CI/CD pipeline runs tests
   - Linter checks code style
   - Build verification

2. **Code Review**
   - At least one maintainer review required
   - Address all review comments
   - Update PR as needed

3. **Approval and Merge**
   - Maintainer approves PR
   - Squash and merge or rebase
   - Delete branch after merge

### Responding to Review Comments

- Be receptive to feedback
- Ask for clarification if needed
- Make requested changes promptly
- Reply to comments when changes are made
- Mark conversations as resolved when appropriate

## 🧪 Testing Requirements

### Testing

```bash


#Backend Tests 
pytest

#Frontend Tests
pnpm type-check
pnpm lint
pnpm build 

```

**Required Test Categories:**
- Unit tests for all functions
- Edge case and boundary testing
- Input validation testing
- API error handling tests
- File upload and extraction tests
- Supabase integration tests


**Manual Testing:**
- Frontend flows
- API Gateway routes
- Supabase authentication
- File upload & text extraction
- Gemini-based question generation

## 📚 Documentation

### What to Document

1. **Code Comments**
   - Explain WHY, not WHAT
   - Document complex algorithms
   - Explain business logic
   - Note any gotchas or edge cases

2. **API Documentation**
   - Function signatures
   - Parameter descriptions
   - Return values
   - Usage examples
   - Error conditions

3. **README Updates**
   - New features
   - Changed behavior
   - New dependencies
   - Configuration changes

4. **Changelog**
   - Keep CHANGELOG.md updated
   - Follow [Keep a Changelog](https://keepachangelog.com/) format

### Documentation Style

- Use clear, concise language
- Include code examples
- Add diagrams for complex flows
- Keep documentation up-to-date with code changes

## 💬 Community

### Communication Channels

- **GitHub Issues** - Bug reports, feature requests, discussions
- **GitHub Discussions** - General questions and community interaction
- **Email** - antonyberlin2003@gmail.com for private matters

### Getting Help

- Check existing documentation first
- Search closed issues for similar problems
- Ask questions in GitHub Discussions
- Be specific about your problem
- Include relevant code and error messages

### Providing Help

- Answer questions in Discussions
- Review pull requests
- Improve documentation
- Help triage issues

## 🏆 Recognition

Contributors are recognized in the following ways:

- Listed in CONTRIBUTORS.md (coming soon)
- Mentioned in release notes for significant contributions
- GitHub contributor badge
- Community recognition and thanks

## 📄 License

By contributing to Practice Platform, you agree that your contributions will be licensed under the MIT License. See [CLA.md](./CLA.md) for details on the Contributor License Agreement.

## ❓ Questions?

If you have questions not covered in this guide:

- Open a GitHub Discussion
- Email: antonyberlin2003@gmail.com
- Check the [README.md](./README.md) 
---

##  Thank You!

Thank you for contributing to Practice Platform! Your contributions help students learn more effectively and revise smartly.

---

**Last Updated:** November 30, 2025  
**Project:** Practice Platform
