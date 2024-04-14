import useImage from "../../../hooks/useImage";

const Image = ({ fileName, ...rest }) => {
  const { loading, image } = useImage(fileName);
  return (
    <>
      {loading ? <div>loading</div> : <img src={image} alt={image} {...rest} />}
    </>
  );
};

export default Image;
