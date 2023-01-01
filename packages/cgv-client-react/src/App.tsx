import React from "react";
import "./App.css";
import { CMovie, CPlayDay } from "./types/type";
import { Button, FormControl, HStack, Select, Tag } from "@chakra-ui/react";
import { encrypt } from "./utils/crypto";
import { useForm } from "react-hook-form";
import { filter, match } from "fp-ts/Array";
import { pipe } from "fp-ts/function";
import useMovieQuery from "./query/useMovieQuery";
import useSeatQuery from "./query/useSeatQuery";

function App() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const watchAllFields = watch();
  const { data: movieData, isLoading } = useMovieQuery();
  const { data: seatData, refetch } = useSeatQuery(
    movieData
      ? pipe(
          movieData!.Movies.CMovie,
          filter((x: CMovie) => x.MOVIE_NM === watch("name")),
          match(
            () => encrypt(""),
            (as: CMovie[]) => encrypt(as[0].MOVIE_CD.toString())
          )
        )
      : encrypt(""),
    encrypt(watch("date"))
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const MovieOptions = (data: CMovie | CMovie[]) => {
    if (Array.isArray(data))
      return (
        <>
          {data.map((d) => (
            <option key={d.MOVIE_NM} value={d.MOVIE_NM}>
              {d.MOVIE_NM}
            </option>
          ))}
        </>
      );
    return <option value={data.MOVIE_NM}>{data.MOVIE_NM}</option>;
  };

  const PlayDayOptions = (data: CPlayDay | CPlayDay[]) => {
    if (Array.isArray(data))
      return (
        <>
          {data.map((d) => (
            <option key={d.PLAY_YMD} value={d.PLAY_YMD}>
              {d.PLAY_YMD}
            </option>
          ))}
        </>
      );
    return <option value={data.PLAY_YMD}>{data.PLAY_YMD}</option>;
  };

  const onSubmit = () => {
    refetch();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.name}>
          <Select id="movie" placeholder="영화 선택" {...register("name")}>
            {MovieOptions(movieData!.Movies.CMovie)}
          </Select>
          <Select placeholder="날짜 선택" {...register("date")}>
            {PlayDayOptions(movieData!.PlayDays.CPlayDay)}
          </Select>
          <Button type={"submit"}>Submit</Button>
        </FormControl>
      </form>
      <HStack spacing={"24px"}>
        {seatData?.REMAIN_SEAT_INFO.map((d) => (
          <Tag key={d.NO}>
            시작 시간: {d.START_HM} 남은 자리: {d.REMAIN_SEAT}
          </Tag>
        ))}
      </HStack>
    </div>
  );
}

export default App;
