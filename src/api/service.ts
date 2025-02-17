type RequestOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: unknown;
  headers?: Record<string, string>;
};

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

class CustomFetch {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.request = this.request.bind(this);
  }

  async request(endpoint: string, options: RequestOptions) {
    const url = `${this.baseURL}${endpoint}`;
    const { method, data, headers } = options;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: data ? JSON.stringify(data) : undefined,
      });

      if (!response.ok) {
        const errorMessage = `Error: ${response.status} - ${response.statusText}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }

      return await response.json();
    } catch (error) {
      console.error('Fetch Error:', error);
      throw error;
    }
  }
}
const request = new CustomFetch(apiBaseUrl).request;
export { request };
