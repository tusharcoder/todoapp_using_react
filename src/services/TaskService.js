import axios from "axios";
export const getOpenTasks = async (status)=>{

    try {
        return await axios.get("https://c82e7264-d7bf-4465-a288-2ad636a89e11.mock.pstmn.io/todo?status="+status)
    } catch (e) {
        console.log("Error while fetching the pending tasks. Error:"+e.message);
    }
}