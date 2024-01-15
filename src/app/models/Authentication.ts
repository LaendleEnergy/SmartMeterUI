export interface AuthRequest {
  emailAddress: string;
  password: string;
}

export function disableGoingBack(path: string) {
  const func = () => history.pushState(path, '', path);
  const length = history.length;
  Array.from({ length: length }, () => func());
}
