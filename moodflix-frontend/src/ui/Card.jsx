const Card = ({ title, description, image }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;