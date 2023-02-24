import { useState, useEffect } from 'react';
import './WriteApp.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'html-react-parser';
import Axios from 'axios';

function WriteApp() {
  const [blogContent, setblogContent] = useState({
    category: '',
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  /*

  useEffect(()=>{
    Axios.get(`여기 URL 뭐 넣어야하지??? -포뇨카-`).then((response)=>{
      setViewContent(response.data);
    })
  },[viewContent])
  */

  const submitReview = ()=>{
    Axios.post(`http://localhost:8080/boards/add`, {
      title: blogContent.title,
      content: setblogContent.content,
      category: setblogContent.category
    }).then(()=>{
      alert('등록 완료!');
      window.open('http://localhost:3000/postList','_self');
    })
  };

  const getValue = e => {
    const { name, value } = e.target;
    setblogContent({
      ...blogContent,
      [name]: value
    })



  };


  return (
    <div className="App">
      <h1>Hello Coding Potato!</h1>
      <div className='content-container'>
        {viewContent.map(element =>
          <div style={{ border: '1px solid #333' }}>
            <h2>{element.title}</h2>
            <div>
              {ReactHtmlParser(element.content)}
            </div>
          </div>
        )}
      </div>
      <div className='form-wrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>'내용을 입력해주세요'</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setblogContent({
              ...blogContent,
              content: data
            })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button
        className="submit-button"
        onClick={submitReview}
        >입력</button>
    </div>
  );
}

export default WriteApp;