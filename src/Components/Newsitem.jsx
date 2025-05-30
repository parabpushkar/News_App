export const Newsitem = ({ title, description, src, url }) => {
  const fallbackImage = "https://via.placeholder.com/360x200?text=No+Image";

  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src || fallbackImage}
        className="card-img-top"
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        alt={title || "News image"}
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "Untitled"}
        </h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "No description available."}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read More...
        </a>
      </div>
    </div>
  );
};
