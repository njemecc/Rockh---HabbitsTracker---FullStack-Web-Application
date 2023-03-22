import { connectDB, disconnectDB, client } from "@/DB/main";

export async function POST(request) {
  let response;
  try {
    await connectDB();
    const db = client.db();
    const userHabbitsCollection = db.collection("user_habbits");
    const data = await request.json();

    console.log(data.email);
    console.log(data.name);

    const nameInDBS = await userHabbitsCollection
      .find({ $and: [{ email: data.email }, { name: data.name }] }, { name: 1 })
      .toArray();

    console.log(nameInDBS);

    if (nameInDBS.length != 0) {
      response = "That habbit name alredy exists!";
    } else {
      response = await userHabbitsCollection.insertOne(data);
    }

    await disconnectDB();
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify(response));
}
