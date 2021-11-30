Область видимости — это набор правил, которые определяют где и как переменная (идентификатор) могут быть найдены. Этот поиск может осуществляться для целей присваивания значения переменной, которая является LHS (left-hand-side) ссылкой, или может осуществляться для целей извлечения ее значения, которое является RHS (right-hand-side) ссылкой.

LHS-ссылки являются результатом операции присваивания. Присваивания, связанные с Областью видимости, могут происходить либо с помощью операции =, либо передачей аргументов (присваиванием) параметрам функции.

JavaScript Движок перед выполнением сначала компилирует код, и пока он это делает, он разбивает операторы, подобные var a = 2; на два отдельных шага:

Первый, var a, чтобы объявить ее в Область видимости. Это выполняется в самом начале, до исполнения кода.

Позже, a = 2 ищет переменную (LHS-ссылку) и присваивает ей значение, если находит.

Оба поиска ссылок LHS и RHS начинаются в текущей выполняющейся Области видимости и если нужно (т.е. они не нашли что искали в ней), они работают с их более высокими вложенными Областями видимости, с одной областью (этажом) за раз, ища идентификатор, пока не доберутся до глобальной (верхний этаж) и не остановятся, вне зависимости от результата поиска.

Невыполненные RHS-ссылки приводят к выбросу ReferenceError. Невыполненные LHS-ссылки приводят к автоматической, неявно созданной переменной с таким именем (если не включен "Строгий режим"), либо к ReferenceError (если включен "Строгий режим").