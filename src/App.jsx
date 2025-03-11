import { useEffect, useState } from 'react'
import Loader from './components/Loader'

const App =()=> {
const [loading, setLoading] = useState(true);
const [products, setproducts] = useState([]);
const [count, setcount] = useState(6)

async function fetchProducts() {
  try{
    const response = await fetch(`https://dummyjson.com/products?limit=${count}`);
    const data = await response.json();
    setproducts(data.products);
    setLoading(false);
  }
  catch(e){
    console.error(e);
    setLoading(false);
  }
}


useEffect(() => {
  fetchProducts();
}
, [count]);





  return (
    <>
 <div>
  <div>
   {loading ? (
    <Loader />
   ) : (
    
    products.map((product, index) => (
      <div
        key={index}
        className="max-w-2xl m-5 border border-slate-200 rounded-md shadow-md h-[30vh] mx-auto flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl font-bold text-center">{product.name}</h1>
        <div className="flex gap-x-7 items-center justify-around mt-9">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-1/3 h-1/3 object-cover"
          />
          <p className="text-lg font-medium">{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
        </div>
      </div>
    ))



   )}
  
  </div>

  {loading ? (
        <div></div>
      ) : (
        <button
          onClick={() => setcount(count + 6)}
          className="w-2xl block mx-auto p-4 text-center bg-blue-500 text-lg font-bold text-white my-6 rounded-md"
        >
          SHOW MORE
        </button>
      )}
    </div>

</>
  );
};

export default App;

// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Login from './components/Login'
// import About from './components/About'


// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <><Navbar /><Home /></>
//     },
//     {
//       path: "/login",
//       element: <><Navbar /><Login /></>
//     },
//     {
//       path: "/about",
//       element: <><Navbar /><About /></>
//     },
   
//   ])

//   return (
//     <div>


// <RouterProvider router={router} />

//     </div>
//   )
// }

// export default App