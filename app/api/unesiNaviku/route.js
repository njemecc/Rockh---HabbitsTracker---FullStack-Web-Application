import { connectDB, disconnectDB, client } from "@/DB/main";

export async function POST(request) {
  let response;
  try {
    await connectDB();
    const db = client.db();
    const habbitDoneCollection = db.collection("habbit_done");
    const habbit = await request.json();
    const email = habbit["email"];
    const name = habbit["name"];
    const date = habbit["date"];
    console.log(habbit);
    const habbitAlredyExist = await habbitDoneCollection.countDocuments({
      $and: [{ name: name }, { email: email }, { date: date }],
    });

    if (habbitAlredyExist >= 1) {
      const deleteHabbit = await habbitDoneCollection.deleteMany({
        $and: [{ name: name }, { email: email }, { date: date }],
      });
    }

    response = await habbitDoneCollection.insertOne(habbit);
    await disconnectDB();
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify(response));
}
