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
