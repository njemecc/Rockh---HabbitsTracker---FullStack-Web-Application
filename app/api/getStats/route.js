import { connectDB, disconnectDB, client } from "@/DB/main";

export async function POST(request) {
  let response;
  try {
    await connectDB();
    const db = client.db();
    const habbitDoneCollection = db.collection("habbit_done");
    const habbitInfo = await request.json();
    const email = habbitInfo["email"];
    const name = habbitInfo["name"];

    const numberOfCompleted = await habbitDoneCollection.countDocuments({
      $and: [
        {
          email: email,
        },
        {
          name: name,
        },
        {
          success: true,
        },
      ],
    });

    const numberofFailed = await habbitDoneCollection.countDocuments({
      $and: [
        {
          email: email,
        },
        {
          name: name,
        },
        {
          success: false,
        },
        // {
        //   answer: { $not: "0" },
        // },
      ],
    });

    const numberofSkipped = await habbitDoneCollection.countDocuments({
      $and: [
        {
          email: email,
        },
        {
          name: name,
        },
        {
          success: false,
        },
        {
          answer: "0",
        },
      ],
    });

    const allItems = await habbitDoneCollection
      .find(
        {
          $and: [
            {
              email: email,
            },
            {
              name: name,
            },
          ],
        },
        {
          answer: 1,
        }
      )
      .toArray();

    const total = allItems.reduce((total, current) => {
      return (total += Number(current.answer));
    }, 0);

    response = {
      complete: numberOfCompleted,
      failed: numberofFailed,
      skipped: numberofSkipped,
      total: total,
    };

    console.log("EPE PE")
    //disconnectDB();
  } catch (error) {
    console.error("GREKSA JE :",error);
  }

  return new Response(JSON.stringify(response));
}
