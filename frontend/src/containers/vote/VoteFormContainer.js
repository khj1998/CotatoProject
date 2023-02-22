import VoteForm from "../../Components/common/VoteForm";
import axios from 'axios';

const getUserId = async() => {
    await axios.get(`http://localhost:8080/users/role`,
    {
        withCredentials : true,
        headers : {"Content-Type" : "application/json"}
    }).then((res) => {
        localStorage.setItem("Id",res.data.data.userId);
    })
}

const VoteCreateFormContainer = () => {
    getUserId();
    return (
        <VoteForm />
    );
};

export default VoteCreateFormContainer;