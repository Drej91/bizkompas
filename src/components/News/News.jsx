import React from "react";
import "../News/News.css";
// import { Link } from "react-router-dom";
// import image from "../../assets/Images/image2.jpg";

// const articles = [
//   {
//     id: 1,
//     title: "Provera",
//     picture: "../../assets/Images/image2.jpg",
//     date: "02.04.1991.",
//     description:
//       "Walsad ljasldjalsj asldjasld, lasjdlajsldjasd, lasdlajsdioas dsiajdiasd ijsdi isd.",
//     content:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//   },
//   {
//     id: 2,
//     title: "Provera",
//     picture: "../../assets/Images/image2.jpg",
//     date: "02.04.1991.",
//     description:
//       "Walsad ljasldjalsj asldjasld, lasjdlajsldjasd, lasdlajsdioas dsiajdiasd ijsdi isd.",
//     content:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//   },
//   {
//     id: 3,
//     title: "Provera",
//     picture: "../../assets/Images/image2.jpg",
//     date: "02.04.1991.",
//     description:
//       "Walsad ljasldjalsj asldjasld, lasjdlajsldjasd, lasdlajsdioas dsiajdiasd ijsdi isd.",
//     content:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//   },
// ];

// const goToNewsDetails = (id) => {
//   return <Link to={`news:${id}`} />;
// };

const Contact = () => {
  return (
    <div className="newsContainer">
      <p className="h2 bold">Knjigovodstvene usluge</p>
      {/* <div className="newsMainContent">
        {articles.map((article) => {
          return (
            <div
              className="articleWrapper"
              key={article.id}
              onClick={() => goToNewsDetails(article.id)}
            >
              <div className="articleImageWrapper">
                <img src={image} alt="articleImg" className="articleImg" />
              </div>
              <div className="articleContentWrapper">
                <p className="h2 articleTitle">{article.title}</p>
                <p className="regular">{article.date}</p>
                <p className="regular">{article.description}</p>
              </div>
            </div>
          );
        })}
        {true ? <div className="fakeDiv"></div> : null}
      </div> */}
      <div className="accountantServiceWrapper">
        <p className="regular soonText">Uskoro...</p>
      </div>
    </div>
  );
};

export default Contact;
