import VoteCreateForm from "../../Components/common/VoteCreateForm";
import axios from 'axios';

const getUserId = async() => {
    await axios.get(`http://localhost:8080/users/role`,
    {
        withCredentials : true,
        headers : {"Content-Type" : "application/json"}
    }).then((res) => {
        console.log(res.data);
        localStorage.setItem("Id",res.data.data.userId);
    })
}

const VoteCreateFormContainer = () => {
    getUserId();
    return (
        <VoteCreateForm />
    );
};

export default VoteCreateFormContainer;