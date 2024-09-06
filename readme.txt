# Blockhouse Assignment

## Project Overview

This project is a web application that integrates a Django backend with a Next.js frontend to visualize data using various charts. The application includes a set of REST API endpoints for retrieving data and frontend components for displaying that data in different chart formats, including candlestick, bar, line, and pie charts.

## Project Structure

- **blockhouse-assignment/**: Root directory containing the project files.
  - **backend/**: Contains the Django backend code.
  - **frontend/**: Contains the Next.js frontend code.
  - **screenshots/**: Contains screenshots of the application.
  - **readme.txt**: Additional project details or notes.

## Libraries and Tools Used

- **Backend**:
  - Django
  - Django REST framework
  - `chartjs-chart-financial` (for financial charts)

- **Frontend**:
  - Next.js
  - React
  - Chart.js
  - `chartjs-adapter-moment` (for time-based charts)
  - `chartjs-chart-financial` (for financial charts)

## Setup Instructions

### Backend

1. **Create the Project**:
  
   python -m django startproject charts_api
    

2. **Create a Virtual Environment**:
   
   python -m venv venv
 

3. **Activate the Virtual Environment**:
   - On Windows: 
     .\venv\Scripts\activate
   
   - On macOS/Linux:
     source venv/bin/activate
 

4. **Install Dependencies**:
   Navigate to the `backend/` directory and install the required Python packages:
  
   pip install -r requirements.txt
  

5. **Migrate Database**:
   Apply database migrations:
  
   python manage.py migrate
  

6. **Run the Server**:
   Start the Django development server:
   
   python manage.py runserver
    

7. **API Endpoints**:
   The backend provides the following API endpoints:
   - `/api/candlestick-data/`
   - `/api/line-chart-data/`
   - `/api/bar-chart-data/`
   - `/api/pie-chart-data/`

### Frontend

1. **Create the Project**: 
   npx create-next-app@latest frontend
  

2. **Install Dependencies**:
   Navigate to the `frontend/` directory and install the required npm packages:
   
   npm install
 

3. **Run the Development Server**:
   Start the Next.js development server:
 
   npm run dev
   

4. **View the Application**:
   Open `http://localhost:3000` in your web browser to view the application.

## Approach and Thought Process

The project was developed with a focus on creating a clean and intuitive dashboard for visualizing data. The approach includes:

- **Backend**: 
  - Implemented RESTful API endpoints using Django and Django REST framework to provide data for various charts.
  - Utilized hardcoded data structures for simplicity and to demonstrate the functionality of the charts.
  
  **Django Backend Folder Structure**:
 
  blockhouse-assignment/
  ├── backend/charts_api
  │   ├── charts_api/
  │   │   ├── __init__.py
  │   │   ├── asgi.py
  │   │   ├── settings.py
  │   │   ├── urls.py
  │   │   ├── wsgi.py
  │   ├── api/
  │   │   ├── __init__.py
  │   │   ├── views.py
  │   │   ├── urls.py
  │   │    
  │   ├── manage.py
  │   ├── requirements.txt
  

- **Frontend**:
  - Developed using Next.js and React to build a responsive and interactive user interface.
  - Used Chart.js for creating different types of charts, including candlestick, bar, line, and pie charts.
  - Ensured responsiveness and data clarity by applying styles and configuring chart options.

  **Next.js Frontend Folder Structure**:
 
  blockhouse-assignment/
  ├── frontend/
  │   ├── components/
  │   │   ├── CandlestickChart.jsx
  │   │   ├── LineChart.jsx
  │   │   ├── BarChart.jsx
  │   │   ├── PieChart.jsx
  │   ├── pages/
  │   │   ├── api/
  │   │   │   ├── fetchData.js
  │   │   ├── _app.jsx
  │   │   ├── index.jsx
  │   ├ 
  │   │    
  │   ├── styles/
  │   │   ├── BarChart.css
  │   │   ├── CandlestickChart.css
  │   │   ├── Chart.module.css
  │   │   ├── Home.module.css
  │   │   ├── LineChart.css
  │   ├── .babelrc
  │   ├── next.config.js
  │   ├── package.json
  │   ├── tsconfig.json  # If using TypeScript
 
## Screenshots

Refer to the `screenshots/` directory for visual representations of the application:
- **Dashboard Chats.png**
- **Responsive Dashboard.png**

 