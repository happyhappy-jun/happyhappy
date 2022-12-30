export interface CPlayDay {
  PLAY_YMD: number;
  FORMAT_DATE: string;
}

export interface CMovie {
  GROUP_CD: number;
  GROUP_NM: string;
  MOVIE_CD: number;
  MOVIE_NM: string;
  RATING_CD: number;
  PLATFORM_CD: number;
  TRANS_CD: number;
  PLATFORM_ATTR_CD: number;
  RESOLUTION_CD: number;
  SUBTITLE_CD?: number;
  SUBTITLE_NM?: string;
  ART_YN: string;
  MOVIE_COLLAGE_YN: string;
  MOVIE_ADD_ATTR: string;
  MOVIE_EX_SHOW_YN: string;
  RELEASE_DATE: number;
  TICKET_RATE: number;
  STAR_POINT: number;
  SCREEN_RATING_CD?: number;
  SOUNDX_YN: string;
  THIRD_ATTR_CD: string;
  THIRD_ATTR_NM: string;
}

export interface CGroupMovie {
  MOVIE_CD_GROUP	:	number;
  MOVIE_GROUP_NM	:	string;
  TICKET_RATE	:	number;
  STAR_POINT	:	number;
  RATING_CD	:	number
  POSTER	:	URL;
  MOVIE_IDX	:	number;
}

export interface CSTheater {
  THEATER_CD	:	number;
  THEATER_NM	:	string;
  AREA_CD	:	number;
  RATING_CD	:	number;
  DIRECT_RELATED_YN	:	string;
}

export interface CScreen {
  RATING_CD	:	number;
  RATING_NM	:	string;
}
