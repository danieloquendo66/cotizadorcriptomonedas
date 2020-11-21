import React, { createContext, useState } from 'react';
import { fetchBaseData, fetchCryptoCurrencyData } from "../services/baseData";
import { useEffect } from 'react';

export const CurrencyContext = createContext();

export const CurrencyContextProvider = ({ children }) => {
  const [crypoCurrencyData, setCrypoCurrencyData] = useState(undefined);
  const [cryptoCurrencySearch, setCryptoCurrencySearch] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [currency, setCurrency] = useState(undefined);
  const [cryptoCurrency, setCryptoCurrency] = useState(undefined);

  useEffect(() => {
    fetchBaseData().then((data) => {
      setCrypoCurrencyData(data);
      setIsLoading(false);
    }).catch((exception) => {
      setError(true);
      console.warn(exception);
    })
  }, [setIsLoading, setCrypoCurrencyData, setError]);

  useEffect(() => {
    if (currency && cryptoCurrency) {
      setIsLoading(true);
      try {
        fetchCryptoCurrencyData(cryptoCurrency, currency).then(data => {
          setCryptoCurrencySearch(data[cryptoCurrency][currency]);
          setError(undefined);
          setIsLoading(false);
        })
      } catch (exception) {
        setError(true);
        console.warn(exception);
      }
    }
  }, [currency, cryptoCurrency, setIsLoading, setCryptoCurrencySearch, setError]);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleCryptoCurrencyChange = (e) => {
    setCryptoCurrency(e.target.value);
  };

  return (
    <CurrencyContext.Provider value={{
      isLoading,
      cryptoCurrencySearch,
      crypoCurrencyData,
      error,
      currency,
      handleCurrencyChange,
      cryptoCurrency,
      handleCryptoCurrencyChange
    }}>
      {children}
    </CurrencyContext.Provider>
  )
};