import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const ImageCard = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      className="card h-100 shadow"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <img src={item.src.portrait} alt="Pics" />
    </div>
  );
};

export default ImageCard;
