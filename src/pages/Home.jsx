/* eslint-disable no-undef */
import Navbar from "./../components/Navbar";
import ImageGallery from "./../components/ImageGallery";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("dog");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getPhotos = async () => {
    setLoading(true);
    await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        Authorization: import.meta.env.VITE_REACT_APP_API_KEY,
      },
    })
      .then((resp) => {
        if (!resp.ok) throw new Error("Some went wrong");
        return resp.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data.photos);
      })
      .catch((error) => {
        setError("An error has occured. Please try again");
      });
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      getPhotos();
    }
  };

  const handleSearch = () => {
    getPhotos(query);
  };

  return (
    <div>
      <Navbar
        onKeyDownHandler={onKeyDownHandler}
        setQuery={setQuery}
        query={query}
        handleSearch={handleSearch}
      />
      {error ? <p>{error}</p> : null}
      <ImageGallery
        loading={loading}
        data={data}
        setData={setData}
        error={error}
      />
      <Footer />
    </div>
  );
};

export default Home;

// const getPhotos = async () => {
//   setLoading(true);
//   await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
//     headers: {
//       Authorization: API_KEY,
//     },
//   })
//     .then((resp) => {
//       return resp.json();
//     })
//     .then((data) => {
//       setLoading(false);
//       setData(data.photos);
//     }).catch( (err) => {
//       console.log(err)
//       setErrMsg("An error has occured. Please try again later")
//   });
// };

// useEffect(() => {
//   getPhotos();
// }, []);

// const onKeyDownHandler = (e) => {
//   if (e.keyCode === 13) {
//     getPhotos();
//   }
// };

// const value = {
//   data,
//   loading,
//   error,
//   searchImage,
//   setSearchImage,
// };
