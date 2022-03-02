// Абстрактные классы

// не может использоваться для создания объекта напрямую

// используется только как родительский класс

// может содержать реализацию для некоторых методов

// реализованные методы могут ссылаться на другие методы, которых на самом деле ещё не существует (нам все же нужно указать имена и типы для нереализованных методов)

// может заставить дочерние классы пообещать реализовывать какой-то другой метод

// ========================================================================================================================

// Разница interface и abstract classes
// Желательно использовать интерфейсы, кроме того случая, когда оч похожие классы, когда мы можем эффективно использовать наследование

// interface
// - Устанавливает контракт между разными классами
// - Используется, когда у нас есть очень разные объекты, с которыми мы хотим работать вместе
// - Способствует слабому сцеплению (+)

// abstract classes
// - Устанавливает контракт между разными классами
// - Используется, когда мы пытаемся создать определение объекта
// - Способствет сильному сцеплению (-)
