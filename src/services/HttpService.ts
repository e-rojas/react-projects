class HttpService {
  static async postQuery<T>(url: string, query: string): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
      }),
    });

    return response.json();
  }
  static async fetch<T>(path: string): Promise<T> {
    const url = `${process.env.REACT_APP_API_URL}${path}`;

    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  }
}

export default HttpService;
