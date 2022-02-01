import React, {FC, useState, useRef} from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        alert(`управляемый эл ${value}, неуправляемый эл ${inputRef.current?.value}`);
    }

    return (
        <>
            <div>
                <input value={value} onChange={changeHandler} type='text' />
                <button onClick={clickHandler}>Click</button>
            </div>
            <div>
                Неуправляемый инпут реф
                <input ref={inputRef} type='text' />
            </div>
        </>
    );
};

export default EventsExample;
