import dayjs from 'dayjs';

export interface IPerson {
  id?: number;
  firstName?: string;
  lastName?: string | null;
  dateOfBirth?: string | null;
  phoneNumber?: string | null;
}

export const defaultValue: Readonly<IPerson> = {};
