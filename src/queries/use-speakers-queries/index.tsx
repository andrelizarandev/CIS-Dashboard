// Modules
import { useQuery } from "@tanstack/react-query";
import { getSpeakersApi } from "../../api/speakers";

// Type
import { SpeakerData } from "../../api/speakers/types";

export default function useSpeakersQueries () {
  
  function getSpeakersQuery (onSuccess: (data:SpeakerData[]) => void) {
    return useQuery(['get-speakers'], getSpeakersApi, {
      onSuccess: ({ data }) => {
        onSuccess(data.speakers);
      }
    });
  }

  return {
    getSpeakersQuery
  }

}
