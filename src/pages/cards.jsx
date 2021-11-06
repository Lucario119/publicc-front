import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/pages/cards.module.css';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import Asset1 from '../assets/Sem títulodfdf.png';
import RightArrowIcon from '../assets/right-arrow-svgrepo-com.svg';
import LeftArrowIcon from '../assets/left-arrow-svgrepo-com.svg';
import Image from 'next/image';

function Cards() {
  const [isDragEnded, setIsDragEnded] = useState(false);

  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const itemsEndRef = useRef();
  const ref = useRef();
  const [arrowPosition, setArrowPosition] = useState();

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

  useEffect(() => {
    setItems(cards);
  }, []);
  useEffect(() => {
    scrollToBottom();
  }, [items2]);

  const scrollToBottom = () => {
    itemsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const set = () =>
    ref && ref.current ? ref.current.getBoundingClientRect().top : {};
  const dropRemoveElement = () => {
    items.splice(0, 1);
  };

  function onDragEnd(e) {
    dropRemoveElement();
    if (items.length === 0) {
      const newArray = [...cards];

      setItems(newArray);
    }
    setItems2([...items2, e]);

    setArrowPosition(set());

    setIsDragEnded(true);
    console.log(items2);
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.cardsContainer}>
        <button onClick={dropRemoveElement}>
          <Image src={LeftArrowIcon} alt="leftarrow" width={55} height={55} />
        </button>

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
              <>
                <div
                  className={styles.image_wrapper}
                  style={{ top: items2.length >= 8 ? 480 : arrowPosition }}
                >
                  <Image
                    src={RightArrowIcon}
                    alt="rightarrow"
                    width={25}
                    height={25}
                  />
                </div>
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
                  <div>
                    <Image src={Asset1} alt="asset" width={1000} height={100} />
                  </div>

                  {/* <div className={styles.scroll}> */}
                  {items2.map((item) => (
                    <div
                      ref={ref}
                      key={item.id}
                      className={styles.dropzone_card}
                    >
                      <span key={item.id} className={styles.blur}>
                        PRIMEIRA AÇÃO DE CHAMAR .FICA EM MODO BLUR ASSIM QUE
                        SOLTAR
                      </span>
                    </div>
                  ))}
                  <div ref={itemsEndRef} />
                </div>
                {/* {provided.placeholder} */}
                {/* </div> */}
              </>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}
export default Cards;
