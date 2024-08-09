# QuadB-Task

## Project Description

This project fetches the top 10 results from a specified API, stores specific fields (`name`, `last`, `buy`, `sell`, `volume`, `base_unit`) of those results in a MongoDB database, and retrieves the stored data to display on the frontend.

## Prerequisites

Ensure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)
- MongoDB

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/amanguptaofficial/QuadB-Task.git

cd QuadB-Task/backend

PORT=4000
MONGODB_URL=/**Your mongodb url**/

npm start

