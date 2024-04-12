var BASE_URL="http://localhost:3000"
async function resolve(){
    const currentURL = window.location.href;
    const parts = currentURL.split("/");
    const token = parts[parts.length - 1];
    console.log(token); 
    const response=await axios.post(`${BASE_URL}/verification/${token}`,{});
    

}


resolve();