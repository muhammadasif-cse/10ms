export async function fetchAPI(url: string, options: RequestInit = {}) {
  try {
    const response = await fetch(url, {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      ...options,
    });
    return await response.json();
  } catch (error) {
    console.error(`Fetch error for ${url}:`, error);
    throw error;
  }
}
