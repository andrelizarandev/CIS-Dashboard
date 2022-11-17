// Modules
import { useQuery } from '@tanstack/react-query'

// Api
import { getEventsApi } from '../../api/events'

// Type
import { EventData } from '../../api/events/types';

export default function useEventsQueries () {

  function useGetEvents (onSuccess: (data:EventData[]) => void) {
    return useQuery(['get-events'], getEventsApi, {
      onSuccess: ({ data }) => onSuccess(data.events) 
    });
  }

  return {
    useGetEvents
  }

}
