//! 1
Promise.resolve("1")
  .then((data) => {
    console.log(data);
  })
  .then((data) => {
    console.log(data);
    return "2";
  })
  .then((data) => {
    console.log(data);
  });

console.log("Задача 2");

//! 2
Promise.reject(1)
  .then((data) => {
    console.log(data);
  })
  .then(null, (data) => console.log(data))
  .then(() => console.log("ok"));

//! 3
Promise.reject().then(
  (data) => console.log("ok"),
  (data) => console.log("error")
);

//! 4 null в .then
Promise.resolve("1")
  .then(null)
  .then((data) => console.log(data));

//! 5 Задачи на .catch
Promise.reject("Api Error")
  .then((data) => console.log("ok"))
  .catch((error) => {
    console.log(error);
    return "1";
  })
  .then((data) => {
    console.log(data);
  });

//! 6 Ошибка из Promise.reject в .catch
Promise.reject()
  .catch(() => {
    console.log("error1");
    return Promise.reject();
  })
  .catch(() => {
    console.log("error2");
  });

//! 7 Ошибка throw new Error
Promise.resolve()
  .then((data) => {
    throw new Error("Api Error");
    return 1;
  })
  .then((data) => console.log("ok"))
  .catch((error) => {
    console.log(error.message);
    return "2";
  })
  .then((data) => {
    console.log(data);
  });

//! 8 Необработанная ошибка в Promise
/*
Необработанная ошибка в Promise не влияет на работу программы, т.к. Promise не выпускает ошибку за свои пределы.
*/

Promise.resolve().then(() => {
  throw new Error("Api Error");
});
setTimeout(() => {
  console.log("setTimeout");
}, 1000);

//! 9 null в .catch
Promise.reject("Api Error")
  .catch(null)
  .then((data) => console.log("ok"))
  .catch((error) => console.log(error))
  .then((data) => console.log("ok2"));

//! 10 Задачи на .finally (прикольная)
Promise.resolve()
  .then(() => {
    return "1";
  })
  .finally((data) => {
    console.log(data);
    return "2";
  })
  .then((data) => console.log(data));

//! 11 Задачи на .finally
Promise.reject().finally((data) => {
  console.log("finally");
});

//! 12 Задачи на несколько Promise
Promise.resolve()
  .then(() => console.log(1))
  .then(() => console.log(2));

Promise.resolve()
  .then(() => console.log(11))
  .then(() => console.log(12));

//! 13 Задачи на несколько Promise
Promise.resolve()
  .then(() => console.log(1))
  .then(() => {
    console.log(2);
    throw new Error();
  })
  .catch(() => console.log(3))
  .then(() => console.log(4));

Promise.resolve()
  .then(() => console.log(11))
  .then(() => {
    console.log(12);
    throw new Error();
  })
  .catch(() => console.log(13))
  .then(() => console.log(14));

//! Задача на бесконечные микротаски
/*
 *В качестве бонуса покажу, как повесить браузер микротасками, которыми являются Promise:
  /
const foo = () => {
  Promise.resolve().then(() => foo());
};

foo();