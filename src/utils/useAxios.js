import { useEffect, useState } from 'react';
import axios from 'axios';
import { api_key } from './secret';

export const useAxios = (value) => {
  // TODO: Set initial value of useState to a date
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [newValue, setNewValue] = useState(value);

  const baseUrl =
    newValue === ''
      ? `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
      : `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${newValue}`;

  const axiosRequest = axios.create({
    baseURL: baseUrl,
  });

  useEffect(() => {
    setIsLoading(true);

    axiosRequest
      .get()
      .then((response) => {
        setResponse(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });

  }, [newValue]);

  return [response, isLoading, error, setNewValue];
};
