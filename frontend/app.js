const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Get the backend API URL from environment variable or use a default value
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost";
console.log(`Using backend API URL: ${BACKEND_URL}`);

// Route to fetch list of countries from the backend
app.get("/countries", async (req, res) => {
  try {
    const CUSTOM_HOST_HEADER = process.env.CUSTOM_HOST_HEADER || "custom-host-header.example.com";
    // Define custom headers including the Host header
    const customHeaders = {
      Host: CUSTOM_HOST_HEADER, // Replace with your desired custom Host header value
      // Add other headers if needed
    };

    // Send GET request to backend API with custom headers
    const response = await axios.get(`${BACKEND_URL}/countries`, { headers: customHeaders });
    const countries = response.data;
    res.json(countries);
  } catch (error) {
    console.error("Error fetching countries:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "An error occurred while fetching countries" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
