import shopify from "../shopify.js";

const FETCH_PRODUCTS_QUERY = `
{
    products(first: 10) {
      edges {
        node{
          id
          createdAt
          description
        }
      }
    }
  }`


 

// create products with Graphql api
 export default  async function fetchProducts(
  session
) {
  const client = new shopify.api.clients.Graphql({ session });

  try {
    const res = await client.query({
      data: {
         query: FETCH_PRODUCTS_QUERY
      }
  })

    return res.body.data.products.edges;
  } catch (error) {
    if (error instanceof GraphqlQueryError) {
      throw new Error(
        `${error.message}\n${JSON.stringify(error.response, null, 2)}`
      );
    } else {
      throw error;
    }
  }
}