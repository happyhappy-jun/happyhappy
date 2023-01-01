import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import parseXmlToJson from "../utils/parseXmlToJson";
import { SeatResponse } from "../types/seat";

const useSeatQuery = (movieCD: string, playYMD: string) => {
  return useQuery({
    queryKey: ["seat", movieCD, playYMD],
    queryFn: async () => {
      const { data } = await axios({
        method: "post",
        url: "/api/CGV2011/RIA/CJ000.aspx/CJ_TICKET_016",
        data: {
          REQSITE: "x02PG4EcdFrHKluSEQQh4A==",
          TheaterCd: "LMP+XuzWskJLFG41YQ7HGA==",
          MovieCd: movieCD,
          PlayYMD: playYMD,
          ScreenCd: "nG6tVgEQPGU2GvOIdnwTjg==",
          PlayNum: "nG6tVgEQPGU2GvOIdnwTjg==",
        },
      });
      return parseXmlToJson<SeatResponse>(data?.d.DATA)["NewDataSet"];
    },
    enabled: !movieCD && !playYMD,
  });
};

export default useSeatQuery;
