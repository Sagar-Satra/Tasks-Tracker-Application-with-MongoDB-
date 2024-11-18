export const setResponse = (data, response) => {
    if (Array.isArray(data)) {
        if (data.length > 0) {
            response.status(200).json(data);
        } else {
            response.status(404).json({
                error: {
                    code: 'NotFound',
                    message: 'Documents not found.'
                }
            });
        }
    } else {
        if (data) {
            response.status(200).json(data);
        } else {
            response.status(404).json({
                error: {
                    code: 'NotFound',
                    message: 'Document not found.'
                }
            });
        }
    }
}

export const setError = (error, response) => {
    console.log(error);
    if (error.name === 'ValidationError') {
        response.status(400).json({
            error: {
                code: 'ValidationError',
                message: error.message
            }
        });
    } else if (error.name === 'CastError') {
        response.status(400).json({
            error: {
                code: 'InvalidId',
                message: 'Invalid ID format.'
            }
        });
    } else if (error.name === 'DocumentNotFoundError') {
        response.status(404).json({
            error: {
                code: 'NotFound',
                message: 'Document not found.'
            }
        });
    } else {
        response.status(500).json({
            error: {
                code: 'InternalServerError',
                message: 'An error occurred while processing the request.'
            }
        });
    }
};