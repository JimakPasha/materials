import {useState} from "react";

function useInput(initialValue: string) {
    const [value, setValue] = useState<string>(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return {
        value, onChange
    }
};

export default useInput; 