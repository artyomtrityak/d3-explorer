import { ajax } from 'jquery';
import Rx from 'rxjs/Rx';

export default (data) => {
  return Rx.Observable.create((observer) => {
    const xhr = ajax({
      url: "http://localhost:5000/graphql",
      method: "POST",
      xhrFields: {
        withCredentials: true
      },
      data: data
    });

    xhr.done((response) => {
      if (response.errors) {
        observer.error(response.errors);
      } else {
        observer.next(response);
        observer.complete();
      }
    });

    return () => (xhr.abort());
  });
};
