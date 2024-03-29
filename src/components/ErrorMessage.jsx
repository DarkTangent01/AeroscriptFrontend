import React from 'react'
import Alert from '@material-ui/lab/Alert';

const ErrorMessage = ({severity="error", children}) => {
    return (
        <Alert severity={severity}>
            <strong>{children}</strong>
        </Alert>
    );
};

export default ErrorMessage;