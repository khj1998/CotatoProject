import VoteCreateForm from "../../Components/common/VoteCreateForm";
import axios from 'axios';

const getUserId = async() => {
    await axios.get(`http://localhost:8080/users/role`,
    {
        withCredentials : true,
        headers : {"Content-Type" : "application/json"}
    }).then((res) => {
        if (res.data.message == "USER NOT AUTHENTICATED") {
            alert('로그인 하지 않은 유저입니다. 로그인을 진행하세요.');
            window.open('http://localhost:3000/login','_self');
        } else {
            localStorage.setItem("Id",res.data.data.userId);
        }
    })
}

const VoteCreateFormContainer = () => {
    getUserId();
    return (
        <VoteCreateForm />
    );
};

export default VoteCreateFormContainer;