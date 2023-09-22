import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  SortableContext,
  arrayMove,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";
import ImageCard from "./ImageCard";

const ImageGallery = ({ loading, data, setData, error }) => {
  // Dragged End event
  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setData((items) => {
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
      {error ? <p className="text center">{error}</p> : null}
      <div className="grid md:grid-cols-4 justify-center gap-4 m-10">
        <SortableContext
          items={data}
          strategy={rectSwappingStrategy}
          reorderItems={arrayMove}
        >
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
