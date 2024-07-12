import data from "../data/templates.json" assert { type: "json" };
const SERVER_URL = process.env.API_URL||"http://localhost:3000"

// processing the data for image url
const getProcessedData = (data) => {
  let processedData = data?.map((item) => {
    return {
      ...item,
      image: SERVER_URL + '/large/' + item?.image,
      thumbnail: SERVER_URL + '/thumbnails/' + item?.thumbnail,
    }
  })
  return processedData
}

// getting paginated data, because if we have large data, it's not optimal to dump all data at once
export const getData = (req, res) => {
  try {
    let proccessed_data = getProcessedData(data)

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;


    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedItems = proccessed_data.slice(startIndex, endIndex);

    const response = {
      page,
      limit,
      totalItems: proccessed_data.length,
      totalPages: Math.ceil(proccessed_data.length / limit),
      items: paginatedItems,
    };


    res.status(200).json({
      success: true,
      results: response,
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};