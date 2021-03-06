import React, {useEffect, useState} from 'react';
import {auth, db} from "../firebase-config";
import {collection, addDoc} from 'firebase/firestore';
import {useNavigate} from "react-router-dom";

const CreatePost = ({isAuth}) => {
	const [title, setTitle] = useState('');
	const [postText, setPostText] = useState('');

	const postsCollectionRef = collection(db, 'posts');
	const navigate = useNavigate();

	const createPost = async () => {
		await addDoc(postsCollectionRef, {
			title,
			postText,
			author: {
				name: auth.currentUser.displayName,
				id: auth.currentUser.uid,
			}
		});
		navigate('/');
	}

	useEffect(() => {
		if (!isAuth) {
			navigate('/login');
		}
	}, []);

	return (
		<div className='createPostPage'>
			<div className='cpContainer'>
				<h1>Create A Post</h1>
				<div className='inputGp'>
					<label>Title:</label>
					<input placeholder='Title...' value={title}
								 onChange={(e) => setTitle(e.target.value)}/>
				</div>
				<div className='inputGp'>
					<label>Post:</label>
					<textarea placeholder='Post...' value={postText}
										onChange={(e) => setPostText(e.target.value)}/>
				</div>
				<button onClick={createPost}>Submit Post</button>
			</div>
		</div>
	);
};

export default CreatePost;