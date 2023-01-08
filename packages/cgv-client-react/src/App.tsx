import React, { Fragment, useEffect } from "react";
import "./App.css";
import { CMovie, CPlayDay } from "./types/type";
import { Button, FormControl, HStack, Select, Tag } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
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
  const { data: movieData, isLoading: isMovieQueryLoading } = useMovieQuery();
  const {
    data: seatData,
    isLoading: isSeatQueryLoading,
    refetch,
  } = useSeatQuery(watch("MOVIE_CD"), watch("date"), false);

  useEffect(() => {
    console.log(movieData);
  }, []);

  if (isMovieQueryLoading) {
    return <p>Loading...</p>;
  }

  const MovieOptions = (data: CMovie | CMovie[]) => {
    if (Array.isArray(data))
      return (
        <Fragment>
          {data.map((d) => (
            <option
              key={d.MOVIE_NM}
              value={d.MOVIE_CD}
              label={d.MOVIE_NM.toString()}
            />
          ))}
        </Fragment>
      );
    return (
      <option
        key={data.MOVIE_NM}
        value={data.MOVIE_CD}
        label={data.MOVIE_NM.toString()}
      />
    );
  };

  const PlayDayOptions = (data: CPlayDay | CPlayDay[]) => {
    if (Array.isArray(data))
      return (
        <Fragment>
          {data.map((d) => (
            <option
              key={d.PLAY_YMD}
              value={d.PLAY_YMD}
              label={d.PLAY_YMD.toString()}
            />
          ))}
        </Fragment>
      );
    return <option value={data.PLAY_YMD} />;
  };

  const onSubmit = () => {
    refetch();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.name}>
          <Select id="movie" placeholder="영화 선택" {...register("MOVIE_CD")}>
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
