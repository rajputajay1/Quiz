// src/api/index.js
import axiosInstance from "./axiosInstance";
import { getErrorMessage } from "./errorHandler";

const buildQueryString = (params) => {
  return Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

const transformToFormData = (data) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
};

export const fetchGetData = async (endpoint, params = {}) => {
  const queryString = buildQueryString(params);
  const url = `${endpoint}?${queryString}`;
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
};

export const updateData = async (endpoint, data = {}) => {
  try {
    const formData = transformToFormData(data);

    const response = await axiosInstance.put(endpoint, formData);
    return response.data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
};

export const postData = async (endpoint, data = {}) => {
  const formData = transformToFormData(data);
  try {
    const response = await axiosInstance.post(endpoint, formData);
    return response.data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
};

export const deleteData = async (endpoint) => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
};
