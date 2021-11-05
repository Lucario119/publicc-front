import React, { useEffect, useState } from 'react';
import styles from '../styles/pages/cards.module.css';
import {
  Draggable,
  Droppable,
  DragDropContext,
  DropResult,
} from 'react-beautiful-dnd';
import Asset1 from '../assets/Sem títulodfdf.png';
import Image from 'next/image';

function Cards() {
  const cards = [
    {
      id: 0,
      className: `${styles.card}`,
    },
    {
      id: 1,
      className: `${styles.card2}`,
    },
    {
      id: 2,
      className: `${styles.card3}`,
    },
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [isDragEnded, setIsDragEnded] = useState(false);
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);

  useEffect(() => {
    setItems(cards);
  }, []);

  function dragState() {
    !isDragging ? setIsDragging(true) : setIsDragging(false);
  }
  function onDragEnd(id) {
    items.splice(id, 1);

    if (items.length === 0) {
      const newArray = [...cards];

      setItems(newArray);
    }
    if (items2.length < 7) {
      items2.push(1);
    }
    setIsDragEnded(true);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.cardsContainer}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              className={styles.cardContainer}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <>
                {items.slice(0, 1).map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        key={item.id}
                        id={item.id}
                        onDrag={dragState}
                        className={item.className}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      />
                    )}
                  </Draggable>
                ))}
              </>
            </div>
          )}
        </Droppable>

        <div />
        <div className={styles.dropzoneContainer}>
          <Droppable droppableId="trashbin">
            {(provided) => (
              <div
                className={styles.dropzone}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div>
                  {isDragEnded && (
                    <h1 className={styles.blur}>
                      PRIMEIRA AÇÃO DE CHAMAR .FICA EM MODO BLUR ASSIM QUE
                      SOLTAR
                    </h1>
                  )}
                </div>
                <Image src={Asset1} alt="asset" width={1000} height={100} />
                {items2.map((e, i) => (
                  <div key={i}>
                    {[...Array(1)].map((e, i) => (
                      <>
                        <span key={i} className={styles.blur}>
                          PRIMEIRA AÇÃO DE CHAMAR .FICA EM MODO BLUR ASSIM QUE
                          SOLTAR
                        </span>
                      </>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </Droppable>
        </div>
        {/* {provided.placeholder} */}
      </div>
    </DragDropContext>
  );
}
export default Cards;
