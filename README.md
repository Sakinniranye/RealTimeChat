
# RealTimeChat

## Project Overview: RealTimeChat is a full-stack real-time chat application.

## Project Goals
- Real-time messaging between users
- User authentication (sign up, sign in, logout)
- Send text messages, images, and files
- Clean architecture and scalable real-time design
- Strong collaboration and version-control discipline

---

## Tech Stack

### Frontend
- Swift
- SwiftUI
- Xcode
- iOS Simulator

### Backend
- Node.js
- Express
- WebSockets
- MongoDB

---

Development Workflow

Branches
- main: Stable, demo-ready code only. No direct commits.

- dev: Integration branch where completed work is merged and tested.

feature/<name>
Used for new features. Always branch from dev.

bugfix/<name>
Used for fixing bugs. Branch from dev, or from main if fixing a production issue.

Workflow Steps
- Pull the latest dev
    - git checkout dev
    - git pull

- Create a new branch for your task
    - git checkout -b feature/<short-description>

- Make changes and commit frequently
    - git add .
    - git commit -m "feat: short description"

- Push your branch and open a Pull Request
    - git push -u origin feature/<short-description>

- Merge into dev after review and testing

- Merge dev into main when a sprint is complete and stable

Branch Cleanup: After a branch is merged, it should be deleted locally and remotely to keep the repository clean.


