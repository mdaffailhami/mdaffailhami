export type ServerResponse<T = unknown> = {
  success: boolean;
  message: string;
  data: T | null;
};
