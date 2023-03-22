import { connectDB, disconnectDB , client } from "@/DB/main"


export async function POST(request) {

 let response
  try {
    await connectDB()
    const db = client.db()
    const userCollection =  db.collection("users")
    const data = await request.json()

    const email = data.email
    const emailFinded = await userCollection.find({email:email}).toArray()
    console.log(emailFinded)
  

    if(emailFinded.length === 0){
      response = await userCollection.insertOne(data)
    }
    else{
      response = "User with this email is alredy registrated"
    }
    await disconnectDB()   
  } catch (error) {
    console.error(error)
  }
 




  return new Response(JSON.stringify(response))

   
  
}
