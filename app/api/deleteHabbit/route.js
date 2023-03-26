import { connectDB, disconnectDB, client } from "@/DB/main";

export async function POST(request) {
  let response;
  try {
    await connectDB();
    const db = client.db();
    const userHabbitsCollection = db.collection("user_habbits");
    const habbitToDelete = await request.json();
    const email = habbitToDelete["email"];
    const name = habbitToDelete["name"];
     
    const response = await userHabbitsCollection.deleteOne({
      $and: [{ name: name }, { email: email }],
    });

    console.log(response)
    console.log(email)
    console.log(name)
    await disconnectDB();
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify(response));
}
