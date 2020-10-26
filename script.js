var es = new EventSourcePolyfill("http://localhost:8080/stream-sse")
es.onerror = es.onopen = es.onmessage = function (event) {
  console.log(event.type + ': ' + event.data);
};