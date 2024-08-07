// create Event

import axios from "axios";
import { server } from "../../server";

export const createEvent =
  (
    name,
    description,
    category,
    tags,
    originalPrice,
    discountPrice,
    stock,
    images,
    shopId,
    start_Date,
    Finish_Date
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "EventCreateRequest",
      });

      // const config = { headers: { "Content-Type": "multipart/form-data" } };

      const { data } = await axios.post(
        `${server}/event/create-event`,
        name,
        description,
        category,
        tags,
        originalPrice,
        discountPrice,
        stock,
        images,
        shopId,
        start_Date,
        Finish_Date
      );

      dispatch({
        type: "EventCreateSuccess",
        payload: data.event,
      });
    } catch (error) {
      dispatch({
        type: "EventCreateFail",
        payload: error.response.data.message,
      });
    }
  };

//get all Events for shop

export const getAllEventsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllEventsShopRequest",
    });

    const { data } = await axios.get(`${server}/event/get-all-events/${id}`);

    dispatch({
      type: "getAllEventsShopSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAllEventsShopFailed",
      payload: error.response.data.message,
    });
  }
};

//delete Event

export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteEventRequest",
    });

    const { data } = await axios.delete(
      `${server}/event/delete-shop-event/${id}`
    );

    dispatch({
      type: "deleteEventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteEventFailed",
      payload: error.response.data.message,
    });
  }
};

//get all Events

export const getAllEvents = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllEventsRequest",
    });

    const { data } = await axios.get(`${server}/event/get-all-events`);

    dispatch({
      type: "getAllEventsSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAllEventsFailed",
      payload: error.response.data.message,
    });
  }
};
