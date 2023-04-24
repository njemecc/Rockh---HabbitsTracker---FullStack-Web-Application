import { connectDB, disconnectDB, client } from "@/DB/main";

export async function POST(request) {
  let response;
  try {
    await connectDB();
    const db = client.db();
    const habbitDone = db.collection("habbit_done");
    const rekvest = await request.json();
    let from = rekvest["from"];
    from = new Date(from).toISOString();
    let to = rekvest["to"];
    to = new Date(to).toISOString();
    const email = rekvest["email"];
    const name = rekvest["name"];

    console.log(email, name, from, to);

    response = await habbitDone
      .find(
        {
          $and: [
            { name: name },
            { email: email },
            { date: { $gte: from } },
            { date: { $lte: to } },
          ],
        },
        {
          date: 1,
          answer: 1,
          success: 1,
        }
      )
      .toArray();

    console.log(response);
    await disconnectDB();
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify(response));
}
