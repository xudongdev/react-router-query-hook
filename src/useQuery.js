import qs from "qs";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function useQuery() {
  const location = useLocation();

  return useMemo(
    function() {
      return qs.parse(location.search, { ignoreQueryPrefix: true });
    },
    [location]
  );
}
