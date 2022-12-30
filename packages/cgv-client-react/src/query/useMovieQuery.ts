import { useQuery } from "@tanstack/react-query";
import { CSchedule, Schedule } from "../types/type";
import axios from "axios";
import parseXmlToJson from "../utils/parseXmlToJson";

const useMovieQuery = (playymd: string) => {
  return useQuery<CSchedule>({
    queryKey: ["movie"],
    queryFn: async () => {
      const { data } = await axios({
        method: "post",
        url: "/api/CGV2011/RIA/CJ000.aspx/CJ_HP_SCHEDULE_SC_SCREEN_MOVIE",
        data: {
          REQSITE: "x02PG4EcdFrHKluSEQQh4A==",
          TheaterCd: "LMP+XuzWskJLFG41YQ7HGA==",
          ISNormal: "ECFppiyFz/nvSGsg7VwPQw==",
          PlayYMD: "nG6tVgEQPGU2GvOIdnwTjg==",
          ScreenRatingCd: "9sxNW0kL/ZE3ioyEu1Em8w==",
          Language: "zqWM417GS6dxQ7CIf65+iA==",
        },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return parseXmlToJson<Schedule>(data?.d.data.DATA)["CSchedule"];
    },
  });
};

export default useMovieQuery;
