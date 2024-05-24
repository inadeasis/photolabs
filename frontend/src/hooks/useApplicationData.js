import { useEffect, useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SHOW_MODAL: "SHOW_MODAL",
  MODAL_PHOTO_DATA: "MODAL_PHOTO_DATA",
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return [...state, action.id];
  case ACTIONS.FAV_PHOTO_REMOVED:
    return state.filter((id) => id !== action.id);
  case ACTIONS.SHOW_MODAL:
    return action.flag;
  case ACTIONS.MODAL_PHOTO_DATA:
    return action.item;
  default:
    throw new Error(
      `Unsupported action type: ${action.type}`
    );
  }
};

const useApplicationData = () => {

  const [photoIDs, dispatch1] = useReducer(reducer, []);
  const [displayModal, dispatch2] = useReducer(reducer, false);
  const [modalPhotoData, dispatch3] = useReducer(reducer, {});


  const updateFavouritedPhotoIDs = (id, action) => {
    if (!action) {
      console.log("add");
      dispatch1({ type: ACTIONS.FAV_PHOTO_ADDED, id: id });
    } else {
      console.log("remove");
      dispatch1({ type: ACTIONS.FAV_PHOTO_REMOVED, id: id });
      };
    }

   const updateModalData = (flag, item) => {
    dispatch2({ type: ACTIONS.SHOW_MODAL, flag: flag });
    dispatch3({ type: ACTIONS.MODAL_PHOTO_DATA, item: item });
  }

    useEffect(() => {
    console.log(photoIDs);
  }, [photoIDs]);

  return {
    photoIDs,
    displayModal,
    modalPhotoData,
    updateFavouritedPhotoIDs,
    updateModalData
  };
};

export default useApplicationData;