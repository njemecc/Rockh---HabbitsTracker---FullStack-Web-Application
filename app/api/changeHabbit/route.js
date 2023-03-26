import { connectDB, disconnectDB, client } from "@/DB/main";

export async function POST(request) {
  let response;
  try {
    await connectDB();
    const db = client.db();
    const userHabbitsCollection = db.collection("user_habbits");
    const changedHabbit = await request.json();
    const email = changedHabbit["email"];
    const oldName = changedHabbit["oldName"];
    
    console.log(oldName)

     response = await userHabbitsCollection.updateOne({
      $and: [{ name: oldName }, { email: email }],
    },{$set: {name:changedHabbit["name"],question:changedHabbit["question"],currency:changedHabbit["currency"],goal:changedHabbit["goal"],image:changedHabbit["imageUrl"]}});

    console.log(changedHabbit["imageUrl"])
 
    await disconnectDB();
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify(response));
}
