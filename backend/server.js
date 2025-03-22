import app from "./index.js";
import Connect from "./db/Connect.js";
import { config } from "dotenv";
config({ path: "./.env.local" });

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Server is running!");
  });

app.listen(PORT,async () => {
    await Connect();
    console.log(`Port running on ${PORT}`);
});
