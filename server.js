const app = require("./app");
const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     app.listen(PORT);
//     console.log("Database connection successful");
//   })
//   .catch((error) => {
//     console.log(error.massage);
//   });