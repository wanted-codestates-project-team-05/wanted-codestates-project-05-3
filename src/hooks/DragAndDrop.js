import React, { useState } from 'react';

export const DragToReorderList = ({ items, setItems }) => {
  // dragAndDrop 초기값
  const [dragAndDrop, setDragAndDrop] = useState({
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  });
  // Item을 잡기 시작했을 때 발생 (시작)
  const onDragStart = (event) => {
    const initialPosition = parseInt(event.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: items,
    });
    event.dataTransfer.setData('text/html', '');
  };
  // 잡은 Item이 다른 Item과 겹쳐졌을 때 milli sec마다 발생함
  const onDragOver = (event) => {
    event.preventDefault();
    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = parseInt(event.currentTarget.dataset.position);
    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter((item, index) => index !== draggedFrom);
    newList = [...remainingItems.slice(0, draggedTo), itemDragged, ...remainingItems.slice(draggedTo)];
    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };
  // 잡은 Item을 적절한 곳에 놓았을 때 발생
  const onDrop = (event) => {
    setItems(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };
  // Item이 범위를 벗어났을 때 발생
  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  return {
    onDragStart,
    onDragOver,
    onDragLeave,
    onDrop,
  };
};
