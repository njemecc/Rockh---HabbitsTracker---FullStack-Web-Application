import { connectDB, disconnectDB, client } from "@/DB/main";

export async function POST(request) {
  let habbits;
  let photo;
  try {
    await connectDB();
    const email = await request.json();
    const db = client.db();
    const userHabbitsCollection = db.collection("user_habbits");

    const usersCollection = db.collection("users");

    habbits = await userHabbitsCollection.find({ email: email }).toArray();
    photo = await usersCollection
      .find({ email: email }, { photo: 1 })
      .toArray();

    photo = photo[0].photo;

    console.log("photo je", photo);

    //await disconnectDB();
  } catch (error) {
    console.error(error);
  }
  console.log(habbits);

  console.log("bidibao", JSON.stringify([habbits, photo]));

  return new Response(JSON.stringify([habbits, photo]));
}
