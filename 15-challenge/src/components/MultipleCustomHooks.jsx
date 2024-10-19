import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      {isLoading ? (
        <div className="alert alert-info">Loading...</div>
      ) : (
        data && data.length > 0 && (
          <blockquote className="blockquote text-right">
            <p className="mb-0">{data[0].quote}</p>
            <footer className="blockquote-footer">{data[0].author}</footer>
          </blockquote>
        )
      )}

      {hasError && (
        <div className="alert alert-danger">Error fetching data</div>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;