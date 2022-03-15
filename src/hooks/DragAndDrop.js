import React, { useState } from 'react';

export const DragToReorderList = ({ filtered, setFiltered }) => {
  // dragAndDrop 초기값
  const [dragAndDrop, setDragAndDrop] = useState({
    draggedFrom: null,
    draggedTo: null,
    originalOrder: [],
    updatedOrder: [],
  });
  // Item을 잡기 시작했을 때 발생 (시작)
  const onDragStart = (event) => {
    event.currentTarget.style.opacity = '0.4';
    const initialPosition = parseInt(event.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      originalOrder: filtered,
    });
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
  // 드래그가 끝나서 드래그하던 객체를 놓는 장소에 위치한 객체에서 발생함
  const onDrop = (event) => {
    setFiltered(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };
  // Item이 범위를 벗어났을 때 발생
  const onDragLeave = (event) => {
    event.currentTarget.classList.remove('over');
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };
  // 잡은 Item이 다른 Item이랑 겹쳤을 때 발생
  const onDragEnter = (event) => {
    event.currentTarget.classList.add('over');
  };
  // 잡은 Item을 놓았을 때 발생
  const onDragEnd = (event) => {
    event.currentTarget.style.opacity = '1';
    const listItens = document.querySelectorAll('.draggable');
    listItens.forEach((item) => {
      item.classList.remove('over');
    });
  };
  return {
    onDragStart,
    onDragOver,
    onDragLeave,
    onDragEnter,
    onDragEnd,
    onDrop,
  };
};
