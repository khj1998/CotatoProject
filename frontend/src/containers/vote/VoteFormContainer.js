import VoteForm from "../../Components/common/VoteForm";
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
            console.log(res.data.data);
            localStorage.setItem("Id",res.data.data.userId);

                axios.get(`http://localhost:8080/cotato/voate/all`,{
                    withCredentials : false,
                    headers : {"Content-Type" : "application/json"}
                }).then((res) => {
                if (res.data.data == null) {
                alert('등록된 투표 게시물이 없습니다.');
                window.open('http://localhost:3000/cotato','_self');
            } else {
                localStorage.clear();
                localStorage.setItem("title",res.data.data.title);
                localStorage.setItem("content",res.data.data.content);
            }
        });
        }
    })
}

const VoteCreateFormContainer = () => {
    getUserId();
    while (localStorage.getItem("content")) break;
    return (
        <VoteForm />
    );
};

export default VoteCreateFormContainer;