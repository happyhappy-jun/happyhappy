import { CSchedule, Schedule } from "../types/type";
import parseXmlToJson from "../utils/parseXmlToJson";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMoviesQuery = () => {
  return useQuery<CSchedule>({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await axios({
        method: "post",
        url: "/api/cgv/CGV2011/RIA/CJ000.aspx/CJ_TICKET_SCHEDULE_SC_SCREEN_DEFAULT",
        data: {
          REQSITE: "x02PG4EcdFrHKluSEQQh4A==",
          ISNormal: "ECFppiyFz/nvSGsg7VwPQw==",
          Screen_Rating_Cd: "9sxNW0kL/ZE3ioyEu1Em8w==",
          Language: "zqWM417GS6dxQ7CIf65+iA==",
        },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return parseXmlToJson<Schedule>(data?.d.DATA)["CSchedule"];
    },
  });
};

export default useMoviesQuery;
