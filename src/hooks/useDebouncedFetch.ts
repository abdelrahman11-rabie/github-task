import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRepos } from '../redux/actions';

export const useDebouncedFetch = (
  perPage: string,
  language: string,
  date: string,
  delay: number = 500,
) => {
  const dispatch = useDispatch();
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Clear previous timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set new timer
    debounceTimerRef.current = setTimeout(() => {
      dispatch(
        fetchRepos({
          perPage,
          language,
          date,
        }) as any,
      );
    }, delay);

    // Cleanup
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [dispatch, perPage, language, date, delay]);
};
