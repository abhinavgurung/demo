import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'
const socket = io('http://localhost:3001');

const App = () => {
	const [state, setState] = useState({
		posts: [],
		nextID: 0
	});

	// const [posts, setPosts] = useState([{}]);
	// const [nextID, setNextID] = useState(0);

	// useEffect(() => {
	// 	socket.on('connect', () => {
	// 		console.log('connected on client side');
	// 	});

	// 	socket.on('post', (data) => {
	// 		setPosts([...posts, {
	// 			name: data.name, 
  //                     image: data.image, 
  //                     content: data.content, 
  //                     problem: data.problem,
  //                     priority: data.priority,
  //                     id: nextID}
	// 		]);
	// 	})
	// },[posts]);

	useEffect(() => {
		socket.on('connect', () => {
			console.log('connect on client side');

			socket.on('post', (data) => {
				setState({
					posts: [
						...state.posts,
						{
							name: data.name,
							image: data.image,
							content: data.content,
							problem: data.problem,
							priority: data.priority,
							id: state.nextID,
						}
					],
					nextID: data.nextID+1
				});

			});//end post event
		});//end connect event

	}, [state.posts]);
	
		return (
			<Router>
				<div>      
        {state.posts.map( 
          ({name,image,content,problem,priority,id}) => 
            <div key={id}> 
              <img src={image} alt="{name}" /> <br />
                {name} <br />
                {problem} <br />
                {priority} <br />
                {content} <br /> <br /> <br /> <br />
            </div> 
          )}
      </div>
			</Router>
		);
	};

export default App;