# NewsWave

**NewsWave** is a local news web application that fetches and displays the latest news based on various categories like India, Global, Business, Science, Entertainment, Health, and Sports. The app uses the **NewsAPI** to fetch news data and is designed to run on a local server without a backend.

## Table of Contents

- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [API Key Setup](#api-key-setup)
- [Running the Application](#running-the-application)
- [How to Use](#how-to-use)
- [Technologies Used](#technologies-used)

---

## Requirements

Before running **NewsWave**, ensure that you have the following installed on your local machine:

- A **NewsAPI** key (for fetching news data)
- A browser (e.g., Google Chrome, Firefox)
- A local server to run the project (e.g., [Live Server extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer))

---

## Setup Instructions

1. **Clone the Repository**: First, clone the repository to your local machine.

   ```bash
   git clone https://github.com/gkdey17cse/Newswave.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd NewsWave
   ```

3. **Add NewsAPI Key**:

   - Visit [NewsAPI](https://newsapi.org/) and sign up for a free API key.
   - Once you have your API key, open the `index.html` file.
   - Replace `YOUR_API_KEY_HERE` in the following JavaScript section with your actual API key:

   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

   For example

   ```javascript
   const apiKey = "0ff66e6300054551b98cc2ba4a6fda06";
   ```

---

## Running the Application

To run the application locally, follow these steps:

1. **Open the Project Directory in VS Code (or any code editor)**:

   - Open the `NewsWave` directory in your preferred code editor.

2. **Install Live Server Extension (for VS Code users)**:

   - If you're using [VS Code](https://code.visualstudio.com/), install the "Live Server" extension from the marketplace.

3. **Start Live Server**:

   - Right-click on the `index.html` file and select "Open with Live Server".
   - This will start a local development server, and the application will be hosted at:

   ```text
   http://127.0.0.1:5500
   ```

   Open this URL in your browser to view the application.

---

## How to Use

Once the server is up and running, you can use the application in the following ways:

1. **Browse News Categories**:

   - On the homepage, you'll see various buttons such as **India**, **World**, **Business**, **Science**, **Entertainment**, **Health**, and **Sports**. Clicking any of these will display the latest news in that category.

2. **Search for News**:

   - Use the search bar to enter keywords or topics you want to search for, and press the "Search" button. The app will fetch and display relevant news articles.

3. **Dropdown Navigation**:

   - For categories like **Business**, **Science**, **Entertainment**, and **Sports**, you can hover over the respective buttons to view more sub-categories (e.g., Market, Corporates, Startups for Business).

4. **Dynamic News Display**:
   - The application dynamically loads news articles based on the category you select or search term you input.

---

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS (TailwindCSS for styling)
  - JavaScript (Vanilla JS for dynamic content and dropdown functionality)
- **API**:
  - [NewsAPI](https://newsapi.org/) (to fetch news data)

---

## Additional Information

- **NewsAPI** provides access to news from various sources. Please note that if you use the free plan, there might be limitations on the number of requests per day.
- Ensure that you keep your API key confidential. Do not expose it in public repositories or front-end code.

---

**!! Enjoy reading the latest news with NewsWave !!**
