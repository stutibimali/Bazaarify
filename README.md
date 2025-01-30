## Project Overview
This project displays various financial and operational metrics in a dashboard format, including data on revenue cycle, open orders, held revenue, account receivable, and other performance indicators. The dashboard is designed with several interactive elements like dropdowns, charts, and metrics to allow users to filter and analyze data in real-time.

## Key Elements of the Code:

### External Resources:

1. Fonts: The Assistant font is used for the typography.
2. DevExtreme: Used for rich UI components and charts (CSS and JavaScript).
3. Bootstrap: For responsive layout styling.
3. jQuery: For DOM manipulation and event handling.

### HTML Structure:

1. Header: Contains a navigation bar with a logo and user display name (Sheriff).
2. Main Content: Organized into multiple sections and cards:
3. Revenue Metrics: Displays total revenue cycle, open orders, held revenue, and accounts receivable data.
4. Charts: Line charts for tracking trends in open orders, held revenue, and accounts receivable.
5. Key Performance Indicators (KPIs): Metrics like open orders count, revenue count, and days outstanding are displayed.
6. Goal Tracking: Donut charts to visualize billing, payment activity, denials, and 90+ AR against set goals.

### Data Filters:

Dropdowns (styled as pdx-dd) are used for filtering the displayed data, such as branch and data inclusion options.

### Charts and Graphs:

The page makes use of interactive charts (pdx-line-chart, pdx-donut) for visualizing data trends. These likely require the DevExtreme library.

### CSS Styles:

Custom styling is applied through a local CSS file prochant.css (though it isn't included here).
Additional DevExtreme and Bootstrap classes are used for layout and card styling.

### Scripts:

JavaScript (via DevExtreme library) is included to provide interactivity for charts, dropdowns, and other dynamic components.
The script index.js is used to handle the front-end logic, such as initializing charts and managing user input.

## Features:
1. Data Metrics: Real-time data about revenue cycle performance, including open orders, held revenue, and receivables.
2. KPIs: Key performance indicators show trends and changes (e.g., percentages, counts, and days) compared to the previous month.
3. Charts: Line charts and donut charts show trends and progress toward goals.
4. Interactivity: Dropdowns and clickable elements allow for filtering and exploring data.

## Technologies Used:
1. HTML/CSS: For layout and styling.
2. JavaScript/jQuery: For dynamic interactivity and data manipulation.
3. DevExtreme: For advanced data visualizations and UI components.
4. Bootstrap: For responsive design.

## How to Use:
Open the HTML file in a browser to see the dashboard.
The filters can be adjusted using the dropdown menus, which will likely update the displayed data (though the logic to update is in index.js).
The charts and KPIs will dynamically update to reflect the selected data.

## Requirements:
DevExtreme library for charts and UI components.
jQuery for DOM manipulation and event handling.

## Conclusion:
This dashboard is designed to display detailed financial and operational metrics for revenue cycle management. It uses dynamic components and charts for a smooth and interactive user experience, with the backend logic handled in index.js. The design is responsive, allowing for easy access on different screen sizes.
