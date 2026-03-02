// API Client for making HTTP requests
// Uses native fetch API (no external dependencies)

const API_BASE_URL = 'http://localhost:5000';

export const apiClient = {
  async post(endpoint, data = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Request failed');
      }

      return result;
    } catch (error) {
      throw error;
    }
  },

  async get(endpoint, headers = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Request failed');
      }

      return result;
    } catch (error) {
      throw error;
    }
  },

  async authGet(endpoint) {
    const token = localStorage.getItem('token');
    return this.get(endpoint, {
      Authorization: `Bearer ${token}`,
    });
  },
};

export default apiClient;
