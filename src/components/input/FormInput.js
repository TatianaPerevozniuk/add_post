import './styleForm.css';
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {addPost} from "../../store";

const FormInput = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState({
        name: '',
        text: '',
        img: '',
        likes: 0,
        comments: 0,
        reposts: 0
    });

    const handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        setInputValue({...inputValue, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const user = users.find(item => item.name === inputValue.name);

        const date = new Date().toLocaleString("ua", {month: 'long', day: 'numeric', year:'numeric',
            hour:'2-digit', minute:'2-digit', second: '2-digit'});

        const inputPost = {
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            photo: user.photo,
            date: date,
            text: inputValue.text,
            img: inputValue.img,
            likes: inputValue.likes,
            comments: inputValue.comments,
            reposts: inputValue.reposts
        };
        dispatch(addPost(inputPost));
    }

    return (
        <div className='wrapper'>
            <form className='form-wrapper'
                onSubmit={handleSubmit}>
                <div className="commentText">
                <textarea
                    className="commentText"
                    name='text'
                    placeholder='Enter comment'
                    onChange={handleChange}/>
                </div>
                <div className="input_img_url">
                    <input
                        className="input_img_url"
                        name='img'
                        type="url"
                        placeholder='Enter url photo'
                        onChange={handleChange}/>
                </div>
                <div className="form_select_block">
                    <label>
                        Select author:
                        <select className="form_select_block"
                                name="name"
                            onChange={handleChange}>
                            {users.map((user) => (
                                <option key={user.id} value={user.name}>{user.name}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className="submission_btn">
                    <button type='submit'>Add post</button>
                </div>
            </form>
        </div>
    );
}

export default FormInput;