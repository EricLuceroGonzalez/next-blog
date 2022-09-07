import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    // Store in db
    const newMessage = { email, name, message };
    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.databaseName}:${process.env.databasePass}@cluster0.j4waz.mongodb.net/${process.env.database}?retryWrites=true&w=majority`
      );
      console.log("good from api/contact");
    } catch (error) {
      res.status(500).json({ message: "Could not connect to db" });
      return;
    }
    // Access the db:
    const db = client.db();
    try {
      const result = await db.collection("blog-Messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message error" });
      return;
    }
    client.close()
    res.status(201).json({ message: "Successfully stored" });
  }
}

export default handler;
