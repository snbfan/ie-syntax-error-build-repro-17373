import requestCaptcha from './captcha/captcha';

export function getHashCashLink() {
  return requestCaptcha({}, (new Date()).getTime()).then(hashcashCaptcha => ({
    headers: {
      ...{},
      Accept: `application/json;charset=utf-8;hashcash=${hashcashCaptcha}`
    }
  }));
}
