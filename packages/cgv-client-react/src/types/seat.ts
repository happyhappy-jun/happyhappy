export interface SMSRESULT {
  RES_CD: number;
  RES_MSG: string;
}

export interface REMAINSEATINFO {
  NO: number;
  SCREEN_CD: number;
  PLAY_NUM: number;
  START_HM: number;
  REMAIN_SEAT: number;
}

export interface NewDataSet {
  SMS_RESULT: SMSRESULT;
  REMAIN_SEAT_INFO: REMAINSEATINFO[];
}

export interface SeatResponse {
  NewDataSet: NewDataSet;
}
