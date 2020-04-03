import WorkerWrapper from './worker-wrapper';

let worker;

export default function requestCaptcha(requestBody, timestamp) {
  try {
    if (worker === undefined) {
      const hashcashWorker = new Worker('./hashcash.worker', {
        type: 'module'
      });
      worker = new WorkerWrapper(hashcashWorker);
    }

    return generateHashcash({});
  } catch (e) {}
}

export function generateHashcash(payload) {
  return new Promise((resolve, reject) => {
    worker
      .postMessage(payload)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
