import axios from "axios";

interface RequestParams {
  api_key: string;
  type: string;
  search_term: string;
  sort_by: string;
}

export async function FetchSearch(searchTerm: string) {
  const params: RequestParams = {
    api_key: process.env.API_KEY_BLUECART || "",
    type: "search",
    search_term: searchTerm,
    sort_by: "best_seller",
  };

  try {
    const response = await axios.get("https://api.bluecartapi.com/request", {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
