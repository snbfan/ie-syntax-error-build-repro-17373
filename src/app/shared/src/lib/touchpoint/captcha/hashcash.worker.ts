function generateHashCash(challenge, strength, separator, cb) {
  cb(null, null);
}

self.addEventListener('message', (e: any) => {
  const id = e.data.id
  const payload = e.data.payload
  if (payload) {
    generateHashCash(payload.challenge, payload.strength, payload.separator, function(err, result) {
      const msg = {
        id,
        err,
        payload: result
      }
      this.postMessage(msg);
    });
  }
}, false);
