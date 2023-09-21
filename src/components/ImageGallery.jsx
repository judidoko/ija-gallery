import images from "../data";
import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  SortableContext,
  arrayMove,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";
import ImageCard from "./ImageCard";
// import { useState } from "react";

const ImageGallery = ({ loading, data, setData }) => {
  // const [images, setImages] = useState(data);

  // Dragged End event
  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setData((items) => {
        console.log(items);
        const activeIndex = items.findIndex((items) => items.id === active.id);
        const overIndex = items.findIndex((items) => items.id === over.id);
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      {loading && (
        <h1 className="flex items-center justify-center m-auto">
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </h1>
      )}
      <div className="grid md:grid-cols-4 justify-center gap-4 m-10">
        <SortableContext items={images} strategy={rectSwappingStrategy}>
          {data.map((item, index) => (
            <ImageCard
              key={index}
              item={item}
              className="w-full bg-base-100 shadow-xl"
            />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default ImageGallery;

// () => (
//   <Sortable
//     {...props}
//     strategy={rectSwappingStrategy}
//     reorderItems={arraySwap}
//     getNewIndex={({id, items, activeIndex, overIndex}) =>
//       arraySwap(items, activeIndex, overIndex).indexOf(id)
//     }
//   />
// )
