function status(request, response) {
  response.status(200).json({itallo: "Guedes"});
}

export default status;