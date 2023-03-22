import { connectDB, disconnectDB , client } from "@/DB/main"


export async function POST(request) {
    const data = await request.json()
    let response 

    try {

    await connectDB()
    const db = client.db()
    const userCollection =  db.collection("users")
    console.log(data)
    const emailEntered = data.email
    const passwordEntered = data.password
    console.log(emailEntered)
    const emailInDTBS = await userCollection.find({email:emailEntered}).toArray()
    console.log(passwordEntered)
  
    

    if(emailInDTBS[0] == undefined){
        response = "User with this email doens`t exist"
        
    }

    if(emailInDTBS[0].password == passwordEntered){
        response = "Welcome back!"
    }

    if(emailInDTBS[0].password != passwordEntered){
        response = "Wrong password!"
    }

        
    } catch (error) {
        console.error(error)
    }

    
  return new Response(JSON.stringify(response))
}
