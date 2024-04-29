// // import React, { useContext, useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';
// // import { CounterContext } from './App';

// // const Home = () => {
// //   const { state } = useContext(CounterContext);
// //   const [myCount, setMyCount] = useState(0);

// //   useEffect(() => {
// //     const fetchMyCounter = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/my-counter');
// //         console.log('My Count Response:', response.data); // Log the response
// //         setMyCount(response.data.myCount);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };

// //     fetchMyCounter();
// //   }, []);

// //   console.log('My Count:', myCount); // Log the myCount value

// //   return (
// //     <div>
// //       <h1>Counter Value: {state.count}</h1>
// //       <h1>My Counter Value: {myCount}</h1>
// //       <Link to="/counter">Counter</Link>
// //       <Link to="/my-counter">My Counter</Link>
// //     </div>
// //   );
// // };

// // export default Home;



// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { CounterContext } from './App';

// const Home = () => {
//   const { state } = useContext(CounterContext);
//   const [myCount, setMyCount] = useState(0);

//   useEffect(() => {
//     const fetchMyCounter = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/my-counter');
//         setMyCount(response.data.myCount);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchMyCounter();
//   }, []);

//   return (
//     <div>
//       <h1>Counter Value: {state.count}</h1>
//       <h1>My Counter Value: {myCount}</h1> {/* Display MyCounter Value */}
//       <Link to="/counter">Counter</Link>
//       <Link to="/my-counter">My Counter</Link>
//     </div>
//   );
// };

// export default Home;




import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CounterContext } from './App';

const Home = () => {
  const { state } = useContext(CounterContext);
  const [myCount, setMyCount] = useState(0);

  useEffect(() => {
    const fetchMyCounter = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/my-counter');
        setMyCount(response.data.myCount);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMyCounter();
  }, []);

  return (
    <div>
      <h1>Counter Value: {state.count}</h1>
      <h1>My Counter Value: {myCount}</h1>
      
    </div>
  );
};

export default Home;