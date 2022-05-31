import React, { FC } from "react";
import "./error.scss"

interface ErrorMessageProps {
    message: string;
    testId?: string;
    name?: string;
}

const Error: FC<ErrorMessageProps> = ({ message, testId, name }) => {
    return (
        <div className={`input__error ${name}`} data-testid={testId}>
            { message }
        </div>
    )
}

export default Error;