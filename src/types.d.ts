export type recordToday = {
  id: number
  quantity: number
  article: string;
  deliveredAt: Date;
  deliveredTo: string;
  receivedAt: Date | null;
  receivedStatus: boolean | null
}

export type recordsToday = recordToday[] | null

export type recordInput = {
  id?: number
  quantity: number
  article: string;
  deliveredTo: string;
  receivedAt?: Date | null;
  receivedStatus?: boolean | null
}

export type responsibleToday = {
  id?: number,
  morningResponsible: string | null,
  afternoonResponsible: string | null,
  createdAt?: Date
}

export type responsiblesToday = responsibleToday[]

export type StatusObject = {
  openParking: boolean;
  receiveVolunteers: boolean;
  submitReport: boolean;
  washJacketsNight: boolean;
  chargeImplements2: boolean;
  cleanOffices: boolean;
  chargeImplements: boolean;
  fixTrashAfternoon: boolean;
  submitAssistance: boolean;
  checkClean: boolean;
  washJackets: boolean;
  takeCounterPhoto: boolean;
  cleanAfterDinner: boolean;
  closeParking: boolean;
  fixTrash: boolean;
  cleanAfterLunch: boolean;
  checkCleanAfterLunch: boolean;
  checkReceived: boolean;
  remindNightClean: boolean;
  receiveCleanImplements: boolean;
  receiveNightVolunteers: boolean;
  registerExit: boolean;
  entranceToken: boolean;
  entranceAfternoonToken: boolean;
}
